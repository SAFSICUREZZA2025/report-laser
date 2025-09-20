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

function overlayClick(ev,ov){var r=ov.getBoundingClientRect();var x=ev.clientX-r.left,y=ev.clientY-r.top;if(activeTool==="text"){var f=document.createElement("div");f.className="field";f.contentEditable="true";f.style.left=(x-40)+"px";f.style.top=(y-14)+"px";ov.appendChild(f);f.focus();} else if(activeTool==="check"){var c=document.createElement("div");c.className="checkbox";c.style.left=(x-10)+"px";c.style.top=(y-10)+"px";c.addEventListener("click",e=>{e.stopPropagation();c.classList.toggle("checked");});ov.appendChild(c);}}
document.addEventListener("pointerdown",function(e){var el=e.target;if(!el.classList)return;if(el.classList.contains("field")||el.classList.contains("checkbox")){if(activeTool==="del"){el.remove();return;}if(activeTool!=="move")return;var sx=e.clientX,sy=e.clientY,sl=parseFloat(el.style.left||"0"),st=parseFloat(el.style.top||"0");function mv(ev){el.style.left=(sl+(ev.clientX-sx))+"px";el.style.top=(st+(ev.clientY-sy))+"px";}function up(){document.removeEventListener("pointermove",mv);document.removeEventListener("pointerup",up);}document.addEventListener("pointermove",mv);document.addEventListener("pointerup",up);}});

function autoDetectHighlights(host){var pages=host.querySelectorAll(".page");pages.forEach(page=>{var canvas=page.querySelector("canvas"),ov=page.querySelector(".overlay"); if(!canvas||!ov)return;var ctx=canvas.getContext("2d"),W=canvas.width,H=canvas.height,data=ctx.getImageData(0,0,W,H).data;var step=4,gw=Math.floor(W/step)+1,gh=Math.floor(H/step)+1,seen=new Uint8Array(gw*gh);function idx(x,y){return y*gw+x;}function isFluo(r,g,b){return (r>220&&g>220&&b<140)||(r>200&&g>200&&b<120);}for(var ys=0;ys<H;ys+=step){for(var xs=0;xs<W;xs+=step){var gx=Math.floor(xs/step),gy=Math.floor(ys/step),id=idx(gx,gy); if(seen[id])continue;var i=(ys*W+xs)*4,r=data[i],g=data[i+1],b=data[i+2]; if(!isFluo(r,g,b)){seen[id]=1;continue;}var q=[[gx,gy]];seen[id]=1;var minx=gx,miny=gy,maxx=gx,maxy=gy;while(q.length){var p=q.pop(),cx=p[0],cy=p[1];if(cx<minx)minx=cx;if(cy<miny)miny=cy;if(cx>maxx)maxx=cx;if(cy>maxy)maxy=cy;[[cx+1,cy],[cx-1,cy],[cx,cy+1],[cx,cy-1]].forEach(nb=>{var nx=nb[0],ny=nb[1];if(nx<0||ny<0||nx>=gw||ny>=gh)return;var nid=idx(nx,ny);if(seen[nid])return;var px=nx*step,py=ny*step,pi=(py*W+px)*4,rr=data[pi],gg=data[pi+1],bb=data[pi+2];if(isFluo(rr,gg,bb)){seen[nid]=1;q.push([nx,ny]);}else seen[nid]=1;});}var bx=minx*step,by=miny*step,bw=(maxx-minx+1)*step,bh=(maxy-miny+1)*step;if(bw*bh<600||bw<16||bh<10)continue;if(bw<50&&bh<40){var c=document.createElement("div");c.className="checkbox";c.style.left=bx+"px";c.style.top=by+"px";c.addEventListener("click",e=>{e.stopPropagation();c.classList.toggle("checked");});ov.appendChild(c);} else {var f=document.createElement("div");f.className="field";f.contentEditable="true";f.style.left=bx+"px";f.style.top=by+"px";f.style.width=Math.max(100,bw-6)+"px";f.style.height=Math.max(24,bh-6)+"px";ov.appendChild(f);} }}});}

async function renderBufferToHost(buf,hostId){
  await ensurePdfjsReady();
  if(!window.pdfjsLib || !window.pdfjsLib.getDocument){ alert("PDF.js non caricato. Controlla libs/pdfjs/"); return; }
  var host=$(hostId); host.innerHTML="";
  window.pdfjsLib.getDocument({data:buf}).promise.then(pdf=>{
    let p=1;(function next(){ if(p>pdf.numPages)return; pdf.getPage(p).then(page=>{
      var vp=page.getViewport({scale:1.5});
      var sect=document.createElement("div");sect.className="page";
      var hold=document.createElement("div");hold.className="canvas-holder";
      var c=document.createElement("canvas");c.width=vp.width;c.height=vp.height;var ctx=c.getContext("2d");
      page.render({canvasContext:ctx,viewport:vp}).promise.then(()=>{
        var ov=document.createElement("div");ov.className="overlay";ov.addEventListener("click",ev=>overlayClick(ev,ov));
        hold.appendChild(c);hold.appendChild(ov);sect.appendChild(hold);host.appendChild(sect);p++;next();
      });}); })();
  }).catch(e=>{console.error(e);host.innerHTML='<div class="page"><div style="padding:12px;color:#b00">Errore PDF: '+e.message+'</div></div>';});
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
