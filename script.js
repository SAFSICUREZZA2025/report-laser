// Environment guard for file://
const IS_FILE_PROTOCOL = location.protocol === "file:";

function ensurePdfjsReady() {
  return new Promise((resolve) => {
    function ready() {
      if (window.pdfjsLib) {
        try {
          var localWorker = "libs/pdfjs/pdf.worker.js";
          fetch(localWorker, {method:"HEAD"}).then(r=>{
            if(r.ok){ window.pdfjsLib.GlobalWorkerOptions.workerSrc = localWorker; }
            else { window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"; }
            resolve();
          }).catch(()=>{
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
            resolve();
          });
        } catch(e) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
          resolve();
        }
      }
    }
    if (window.pdfjsLib) return ready();
    const iv = setInterval(() => { if (window.pdfjsLib) { clearInterval(iv); ready(); } }, 50);
  });
}

function $(id){return document.getElementById(id);}var activeTool="text";
function setTool(id){activeTool=id;document.querySelectorAll(".tool").forEach(b=>b.classList.remove("active"));var x=$("tool-"+id);if(x)x.classList.add("active");}
["text","check","move","del"].forEach(k=>{var b=$("tool-"+k); if(b) b.onclick=()=>setTool(k);});

function wirePhotos(inputId,outId){var inp=$(inputId),out=$(outId);if(!inp||!out)return;inp.addEventListener("change",e=>{out.innerHTML="";[...(e.target.files||[])].forEach(f=>{var img=new Image();img.className="thumb";img.src=URL.createObjectURL(f);out.appendChild(img);});});}
wirePhotos("photos1","photos1-preview");wirePhotos("photos2","photos2-preview");

function overlayClick(ev, ov){
  const r = ov.getBoundingClientRect();
  const x = ev.clientX - r.left;
  const y = ev.clientY - r.top;

  if (activeTool === "check"){
    const c = document.createElement("div");
    c.className = "checkbox";
    c.style.left = (x-10) + "px";
    c.style.top  = (y-10) + "px";
    c.addEventListener("click", e => { e.stopPropagation(); c.classList.toggle("checked"); });
    ov.appendChild(c);
    return;
  }
  if (activeTool !== "text") return;

  const f = document.createElement("div");
  f.className = "field";
  f.contentEditable = "true";
  f.style.left = x + "px";
  f.style.top  = y + "px";
  ov.appendChild(f);
  f.focus();
  const sel = window.getSelection();
  if (sel){ const rg = document.createRange(); rg.selectNodeContents(f); rg.collapse(false); sel.removeAllRanges(); sel.addRange(rg); }
}

document.addEventListener("pointerdown",function(e){var el=e.target;if(!el.classList)return;if(el.classList.contains("field")||el.classList.contains("checkbox")){if(activeTool==="del"){el.remove();return;}if(activeTool!=="move")return;var sx=e.clientX,sy=e.clientY,sl=parseFloat(el.style.left||"0"),st=parseFloat(el.style.top||"0");function mv(ev){el.style.left=(sl+(ev.clientX-sx))+"px";el.style.top=(st+(ev.clientY-sy))+"px";}function up(){document.removeEventListener("pointermove",mv);document.removeEventListener("pointerup",up);}document.addEventListener("pointermove",mv);document.addEventListener("pointerup",up);}});

function autoDetectHighlights(host){
  const pages = host.querySelectorAll(".page");
  pages.forEach(page=>{
    const canvas = page.querySelector("canvas");
    const ov     = page.querySelector(".overlay");
    if(!canvas || !ov) return;

    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const data = ctx.getImageData(0,0,W,H).data;

    const step = 3;                                 // più fine
    const gw = Math.floor(W/step)+1, gh = Math.floor(H/step)+1;
    const seen = new Uint8Array(gw*gh);
    const idx = (x,y)=> y*gw + x;
    const isFluo = (r,g,b)=>
      (r>200&&g>200&&b<170) || (r>230&&g>210&&b<160) || (r<120&&g>200&&b<130);

    for(let ys=0; ys<H; ys+=step){
      for(let xs=0; xs<W; xs+=step){
        const gx=Math.floor(xs/step), gy=Math.floor(ys/step), id=idx(gx,gy);
        if(seen[id]) continue;

        const i=(ys*W+xs)*4, r=data[i], g=data[i+1], b=data[i+2];
        if(!isFluo(r,g,b)){ seen[id]=1; continue; }

        const q=[[gx,gy]]; seen[id]=1;
        let minx=gx,miny=gy,maxx=gx,maxy=gy;
        while(q.length){
          const [cx,cy]=q.pop();
          if(cx<minx)minx=cx; if(cy<miny)miny=cy; if(cx>maxx)maxx=cx; if(cy>maxy)maxy=cy;
          [[cx+1,cy],[cx-1,cy],[cx,cy+1],[cx,cy-1]].forEach(([nx,ny])=>{
            if(nx<0||ny<0||nx>=gw||ny>=gh) return;
            const nid=idx(nx,ny); if(seen[nid]) return;
            const px=nx*step, py=ny*step, pi=(py*W+px)*4;
            if(isFluo(data[pi],data[pi+1],data[pi+2])){ seen[nid]=1; q.push([nx,ny]); }
            else seen[nid]=1;
          });
        }

        const pad=3;
        let bx=minx*step+pad, by=miny*step+pad;
        let bw=(maxx-minx+1)*step-2*pad, bh=(maxy-miny+1)*step-2*pad;

        if (bw*bh < 250 || bw < 50 || bh < 12) continue;

        if (bw < 50 && bh < 40){
          const c=document.createElement("div");
          c.className="checkbox";
          c.style.left=bx+"px"; c.style.top=by+"px";
          c.addEventListener("click",e=>{e.stopPropagation();c.classList.toggle("checked");});
          ov.appendChild(c);
        } else {
          const f=document.createElement("div");
          f.className="field"; f.contentEditable="true";
          f.style.left=bx+"px"; f.style.top=by+"px";
          f.style.width=Math.max(70,bw)+"px";
          f.style.height=Math.max(20,bh)+"px";
          ov.appendChild(f);
        }
      }
    }
  });
}

function wireUpload(btnId,inputId,hostId){
  const btn=$(btnId),inp=$(inputId);
  if(!btn||!inp)return;
  btn.addEventListener("click",()=>inp.click());
  inp.addEventListener("change",()=>{
    const f=inp.files&&inp.files[0];
    if(!f)return;
    const fr=new FileReader();
    fr.onload=()=>{ renderBufferToHost(fr.result,hostId); var abtn=$(btnId.replace("btn-","auto")); if(abtn) abtn.disabled=false; };
    fr.readAsArrayBuffer(f);
  });
}
wireUpload("btn-file1","file1","doc1");wireUpload("btn-file2","file2","doc2");

var sign=$("sign"),sctx=sign.getContext("2d");sctx.lineWidth=2.2;sctx.lineCap="round";sctx.strokeStyle="#111";
var drawing=false,last=null;function pos(e){var r=sign.getBoundingClientRect();var x=(e.touches?e.touches[0].clientX:e.clientX)-r.left;var y=(e.touches?e.touches[0].clientY:e.clientY)-r.top;return {x,y};}
function start(e){e.preventDefault();document.body.classList.add("signing");drawing=true;last=pos(e);}
function move(e){if(!drawing)return;e.preventDefault();var p=pos(e);sctx.beginPath();sctx.moveTo(last.x,last.y);sctx.lineTo(p.x,p.y);sctx.stroke();last=p;}
function end(){drawing=false;document.body.classList.remove("signing");}
["pointerdown","touchstart"].forEach(ev=>sign.addEventListener(ev,start,{passive:false}));
["pointermove","touchmove"].forEach(ev=>sign.addEventListener(ev,move,{passive:false}));
["pointerup","pointerleave","touchend","touchcancel"].forEach(ev=>sign.addEventListener(ev,end));
$("sign-clear").onclick=()=>sctx.clearRect(0,0,sign.width,sign.height);

$("autoDoc1").onclick=()=>autoDetectHighlights($("doc1"));
$("autoDoc2").onclick=()=>autoDetectHighlights($("doc2"));
// Precarica PDF di default se presenti sul sito
fetch("VALUTAZIONE ROA LASER ESTETICO.pdf").then(r=>r.ok&&r.arrayBuffer()).then(b=>{ if(b){ renderBufferToHost(b,"doc1"); document.getElementById("autoDoc1").disabled=false; }});
fetch("Relazione_ESL_II_modello_editabile 2025.pdf").then(r=>r.ok&&r.arrayBuffer()).then(b=>{ if(b){ renderBufferToHost(b,"doc2"); document.getElementById("autoDoc2").disabled=false; }});
