function $(id){return document.getElementById(id);}
var activeTool="text";

// Toolbar strumenti
["text","check","move","del"].forEach(k=>{
  var b=$("tool-"+k);
  if(b) b.onclick=()=>{
    activeTool=k;
    document.querySelectorAll(".tool").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
  };
});

// Click su overlay → crea campo o checkbox
function overlayClick(ev, ov){
  const r = ov.getBoundingClientRect();
  const x = ev.clientX - r.left;
  const y = ev.clientY - r.top;

  if (activeTool === "check"){
    const c=document.createElement("div");
    c.className="checkbox";
    c.style.left=(x-10)+"px";
    c.style.top=(y-10)+"px";
    c.addEventListener("click",e=>{e.stopPropagation();c.classList.toggle("checked");});
    ov.appendChild(c);
    return;
  }
  if (activeTool !== "text") return;

  const f=document.createElement("div");
  f.className="field";
  f.contentEditable="true";
  f.style.left=x+"px";
  f.style.top=y+"px";
  ov.appendChild(f);
  f.focus();

  const sel=window.getSelection();
  if(sel){
    const rg=document.createRange();
    rg.selectNodeContents(f);
    rg.collapse(false);
    sel.removeAllRanges();
    sel.addRange(rg);
  }
}

// Sposta / elimina elementi
document.addEventListener("pointerdown",function(e){
  var el=e.target;
  if(!el.classList) return;
  if(el.classList.contains("field")||el.classList.contains("checkbox")){
    if(activeTool==="del"){ el.remove(); return; }
    if(activeTool!=="move") return;
    var sx=e.clientX, sy=e.clientY,
        sl=parseFloat(el.style.left||"0"),
        st=parseFloat(el.style.top||"0");
    function mv(ev){
      el.style.left=(sl+(ev.clientX-sx))+"px";
      el.style.top =(st+(ev.clientY-sy))+"px";
    }
    function up(){
      document.removeEventListener("pointermove",mv);
      document.removeEventListener("pointerup",up);
    }
    document.addEventListener("pointermove",mv);
    document.addEventListener("pointerup",up);
  }
});

// Evidenzia fluo → campi
// SOSTITUISCI TUTTA la funzione con questa
function autoDetectHighlights(host){
  const pages = host.querySelectorAll(".page");
  pages.forEach(page=>{
    const canvas = page.querySelector("canvas");
    const ov     = page.querySelector(".overlay");
    if(!canvas || !ov) return;

    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const data = ctx.getImageData(0,0,W,H).data;

    const step = 3;
    const gw = Math.floor(W/step)+1, gh = Math.floor(H/step)+1;
    const seen = new Uint8Array(gw*gh);
    const idx = (x,y)=> y*gw + x;

    // giallo/verde fluo
    const isFluo = (r,g,b)=>
      (r>200&&g>200&&b<170) || (r>230&&g>210&&b<160) || (r<120&&g>200&&b<130);

    for(let ys=0; ys<H; ys+=step){
      for(let xs=0; xs<W; xs+=step){
        const gx=Math.floor(xs/step), gy=Math.floor(ys/step), id=idx(gx,gy);
        if(seen[id]) continue;

        const i=(ys*W+xs)*4, r=data[i], g=data[i+1], b=data[i+2];
        if(!isFluo(r,g,b)){ seen[id]=1; continue; }

        // flood-fill
        const q=[[gx,gy]]; seen[id]=1;
        let minx=gx,miny=gy,maxx=gx,maxy=gy;
        while(q.length){
          const [cx,cy]=q.pop();
          minx=Math.min(minx,cx); miny=Math.min(miny,cy);
          maxx=Math.max(maxx,cx); maxy=Math.max(maxy,cy);
          [[cx+1,cy],[cx-1,cy],[cx,cy+1],[cx,cy-1]].forEach(([nx,ny])=>{
            if(nx<0||ny<0||nx>=gw||ny>=gh) return;
            const nid=idx(nx,ny); if(seen[nid]) return;
            const px=nx*step, py=ny*step, pi=(py*W+px)*4;
            if(isFluo(data[pi],data[pi+1],data[pi+2])){ seen[nid]=1; q.push([nx,ny]); }
            else seen[nid]=1;
          });
        }

        // bounding box in px
        const pad=2;
        const bx=minx*step+pad, by=miny*step+pad;
        const bw=(maxx-minx+1)*step-2*pad, bh=(maxy-miny+1)*step-2*pad;

        // CREA SOLO QUADRATINI: piccole aree quasi quadrate (case da barrare)
        const area = bw*bh;
        const ratio = bw/bh;
        const isSquareLike = ratio>0.7 && ratio<1.4;
        if (area>100 && area<1800 && bh>=10 && bh<=40 && isSquareLike){
          const c=document.createElement("div");
          c.className="checkbox";
          c.style.left=bx+"px"; c.style.top=by+"px";
          c.addEventListener("click",e=>{e.stopPropagation();c.classList.toggle("checked");});
          ov.appendChild(c);
        }
        // NIENTE campi testo automatici: li aggiungi tu con il click.
      }
    }
  });
}
// Render PDF con PDF.js
async function renderBufferToHost(buf,hostId){
  await new Promise(res=>{
    if(window.pdfjsLib){ res(); }
    else {
      const t=setInterval(()=>{ if(window.pdfjsLib){ clearInterval(t); res(); } },50);
    }
  });
  window.pdfjsLib.GlobalWorkerOptions.workerSrc=
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

  const host=$(hostId);
  host.innerHTML="";
  window.pdfjsLib.getDocument({data:buf}).promise.then(pdf=>{
    let p=1;
    (function next(){
      if(p>pdf.numPages) return;
      pdf.getPage(p).then(page=>{
        const vp=page.getViewport({scale:1.5});
        const sect=document.createElement("div");
        sect.className="page";
        const hold=document.createElement("div");
        hold.className="canvas-holder";
        const c=document.createElement("canvas");
        c.width=vp.width;
        c.height=vp.height;
        const ctx=c.getContext("2d");
        page.render({canvasContext:ctx,viewport:vp}).promise.then(()=>{
          const ov=document.createElement("div");
          ov.className="overlay";
          ov.addEventListener("click",ev=>overlayClick(ev,ov));
          hold.appendChild(c);
          hold.appendChild(ov);
          sect.appendChild(hold);
          host.appendChild(sect);
          p++; next();
        });
      });
    })();
  }).catch(e=>{
    console.error(e);
    host.innerHTML='<div class="page"><div style="padding:12px;color:#b00">Errore PDF: '+e.message+'</div></div>';
  });
}

// Upload PDF
function wireUpload(btnId,inputId,hostId){
  const btn=$(btnId),inp=$(inputId);
  btn.addEventListener("click",()=>inp.click());
  inp.addEventListener("change",()=>{
    const f=inp.files&&inp.files[0];
    if(!f) return;
    const fr=new FileReader();
    fr.onload=()=>{
      renderBufferToHost(fr.result,hostId);
      const ab=document.getElementById(btnId.replace("btn-","auto"));
      if(ab) ab.disabled=false;
    };
    fr.readAsArrayBuffer(f);
  });
}
wireUpload("btn-file1","file1","doc1");
wireUpload("btn-file2","file2","doc2");

document.getElementById("autoDoc1").onclick=()=>autoDetectHighlights(document.getElementById("doc1"));
document.getElementById("autoDoc2").onclick=()=>autoDetectHighlights(document.getElementById("doc2"));

// Export PDF singoli
async function rasterizePageWithOverlays(pageEl){
  const base=pageEl.querySelector("canvas");
  const W=base.width,H=base.height;
  const out=document.createElement("canvas");
  out.width=W; out.height=H;
  const ctx=out.getContext("2d");
  ctx.drawImage(base,0,0);

  const ov=pageEl.querySelector(".overlay");
  ov.querySelectorAll(".field,.checkbox").forEach(el=>{
    const rect=el.getBoundingClientRect(),
          ref=ov.getBoundingClientRect();
    const x=rect.left-ref.left,
          y=rect.top-ref.top;
    if(el.classList.contains("checkbox")){
      ctx.fillStyle=el.classList.contains("checked")?"#2f89ff":"#fff";
      ctx.strokeStyle="#2f89ff"; ctx.lineWidth=2;
      ctx.strokeRect(x,y,18,18);
      if(el.classList.contains("checked")) ctx.fillRect(x,y,18,18);
    } else {
      ctx.fillStyle="rgba(255,255,255,0.95)";
      ctx.fillRect(x,y,el.offsetWidth,el.offsetHeight);
      ctx.strokeStyle="rgba(47,137,255,0.6)";
      ctx.strokeRect(x,y,el.offsetWidth,el.offsetHeight);
      const txt=(el.innerText||"").trim();
      if(txt){
        ctx.fillStyle="#111";
        ctx.font="14px system-ui, Segoe UI, Roboto, Arial";
        ctx.textBaseline="top";
        const pad=6;
        ctx.fillText(txt,x+pad,y+4,el.offsetWidth-2*pad);
      }
    }
  });
  return out;
}

async function exportSingle(hostId, filename){
  const host=document.getElementById(hostId);
  const pages=host.querySelectorAll(".page");
  if (!pages.length){
    alert("Nessuna pagina da esportare.");
    return;
  }
  const { jsPDF } = window.jspdf;
  const first=pages[0].querySelector("canvas");
  const pdf=new jsPDF({unit:"pt",format:[first.width,first.height]});
  for(let i=0;i<pages.length;i++){
    const outCanvas=await rasterizePageWithOverlays(pages[i]);
    if(i>0) pdf.addPage([outCanvas.width,outCanvas.height]);
    const img=outCanvas.toDataURL("image/jpeg",0.92);
    pdf.addImage(img,"JPEG",0,0,outCanvas.width,outCanvas.height);
  }
  pdf.save(filename);
}

document.getElementById("make-pdf-1").onclick=()=>exportSingle("doc1","documento1.pdf");
document.getElementById("make-pdf-2").onclick=()=>exportSingle("doc2","documento2.pdf");

// Export PDF unico (Doc1 + Doc2)
document.getElementById("make-pdf-all").onclick = async ()=>{
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ unit:"pt", format:[595,842] });

  async function addHost(hostId){
    const host=document.getElementById(hostId);
    const pages=host.querySelectorAll(".page");
    for(let i=0;i<pages.length;i++){
      const outCanvas=await rasterizePageWithOverlays(pages[i]);
      if (pdf.getNumberOfPages()>0) pdf.addPage([outCanvas.width,outCanvas.height]);
      pdf.setPage(pdf.getNumberOfPages());
      const img=outCanvas.toDataURL("image/jpeg",0.92);
      pdf.addImage(img,"JPEG",0,0,outCanvas.width,outCanvas.height);
    }
  }

  if(document.getElementById("doc1").children.length) await addHost("doc1");
  if(document.getElementById("doc2").children.length) await addHost("doc2");

  // rimuovi la prima pagina vuota se presente
  if (pdf.getNumberOfPages()>1){
    pdf.deletePage(1);
  }
  pdf.save("documento_unico.pdf");
};

// --- Caricamento automatico dei PDF presenti in root + stato UI ---
async function loadPreloadedPDF(url, hostId, autoBtnId, statusId){
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("File non trovato: " + url);
    const buf = await resp.arrayBuffer();
    await renderBufferToHost(buf, hostId);
    const ab = document.getElementById(autoBtnId);
    if (ab) ab.disabled = false;
    const st = document.getElementById(statusId);
    if (st) st.textContent = "Documento precaricato";
  } catch (e) {
    console.warn("PDF non precaricato:", url, e.message);
  }
}

// Richiama i due PDF precaricati (se presenti in root del sito)
loadPreloadedPDF("VALUTAZIONE ROA LASER ESTETICO.pdf", "doc1", "autoDoc1", "status1");
loadPreloadedPDF("Relazione_ESL_II_modello_editabile 2025.pdf", "doc2", "autoDoc2", "status2");
