const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const s='<script type="module">';
const e='</script>';
const i=html.indexOf(s);
const j=html.indexOf(e,i+s.length);
const before=html.slice(0,i+s.length);
const js=html.slice(i+s.length,j);
const startLine=before.split(/\r?\n/).length;
const lines=js.split(/\r?\n/);
let depth=0;let inS=false,inD=false,inB=false,inLC=false,inBC=false;
const depths=[];
for(let ln=0, idx=0; ln<lines.length; ln++){
  const line=lines[ln];
  for(let k=0;k<line.length;k++){
    const ch=line[k], prev=k?line[k-1]:''; const next=k<line.length-1?line[k+1]:'';
    if(!inS && !inD && !inB){
      if(!inBC && ch==='/' && next==='/' ){ inLC=true; break; }
      if(!inLC && ch==='/' && next==='*'){ inBC=true; k++; continue; }
      if(inBC && prev==='*' && ch=== '/'){ inBC=false; continue; }
    }
    if(inLC||inBC) continue;
    if(!inD && !inB && ch==='\'' && prev!=='\\'){ inS=!inS; continue; }
    if(!inS && !inB && ch==='"' && prev!=='\\'){ inD=!inD; continue; }
    if(!inS && !inD && ch==='`' && prev!=='\\'){ inB=!inB; continue; }
    if(inS||inD||inB) continue;
    if(ch==='{'){ depth++; }
    if(ch==='}'){ depth--; }
  }
  inLC=false; // reset at end of line
  depths.push(depth);
}
console.log('End depth:',depth);
console.log('Last 20 depths:');
for(let i=Math.max(0,depths.length-20); i<depths.length; i++){
  console.log(`${startLine+i+1}: depth=${depths[i]} | ${lines[i]}`);
}
