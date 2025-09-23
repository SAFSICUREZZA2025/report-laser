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
function autoDetectHighlights(host){
  const pages = host.querySelectorAll(".page");
  pages.forEach(page=>{
    const canvas=page.querySelector("canvas"),
          ov=page.querySelector(".overlay");
    if(!canvas||!ov) return;

    const ctx=canvas.getContext("2d");
    const W=canvas.width, H=canvas.height;
    const data=ctx.getImageData(0,0,W,H).data;

    const step=3;
    const gw=Math.floor(W/step)+1,
          gh=Math.floor(H/step)+1;
    const seen=new Uint8Array(gw*gh);
    const idx=(x,y)=>y*gw+x;
    const isFluo=(r,g,b)=>
      (r>200&&g>200&&b<170)||
      (r>230&&g>210&&b<160)||
      (r<120&&g>200&&b<130);

    for(let ys=0; ys<H; ys+=step){
      for(let xs=0; xs<W; xs+=step){
        const gx=Math.floor(xs/step),
              gy=Math.floor(ys/step),
              id=idx(gx,gy);
        if(seen[id]) continue;

        const i=(ys*W+xs)*4,
              r=data[i], g=data[i+1], b=data[i+2];
        if(!isFluo(r,g,b)){ seen[id]=1; continue; }

        const q=[[gx,gy]]; seen[id]=1;
        let minx=gx,miny=gy,maxx=gx,maxy=gy;

        while(q.length){
          const [cx,cy]=q.pop();
          if(cx<minx)minx=cx;
          if(cy<miny)miny=cy;
          if(cx>maxx)maxx=cx;
          if(cy>maxy)maxy=cy;
          [[cx+1,cy],[cx-1,cy],[cx,cy+1],[cx,cy-1]].forEach(([nx,ny])=>{
            if(nx<0||ny<0||nx>=gw||ny>=gh) return;
            const nid=idx(nx,ny);
            if(seen[nid]) return;
            const px=nx*step, py=ny*step,
                  pi=(py*W+px)*4;
            if(isFluo(data[pi],data[pi+1],data[pi+2])){
              seen[nid]=1;
              q.push([nx,ny]);
            } else seen[nid]=1;
          });
        }

        const pad=3;
        let bx=minx*step+pad,
            by=miny*step+pad,
            bw=(maxx-minx+1)*step-2*pad,
            bh=(maxy-miny+1)*step-2*pad;

        if (bw*bh < 250 || bw < 50 || bh < 12) continue;

        if (bw < 50 && bh < 40){
          const c=document.createElement("div");
          c.className="checkbox";
          c.style.left=bx+"px";
          c.style.top=by+"px";
          c.addEventListener("click",e=>{e.stopPropagation();c.classList.toggle("checked");});
          ov.appendChild(c);
        } else {
          const f=document.createElement("div");
          f.className="field";
          f.contentEditable="true";
          f.style.left=bx+"px";
          f.style.top=by+"px";
          f.style.width=Math.max(70,bw)+"px";
          f.style.height=Math.max(20,bh)+"px";
          ov.appendChild(f);
        }
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
