
// app.js - Simulasi CAT PPPK
let soal = [];
let current = 0;
let answers = [];
let flags = [];
let score = 0;
let duration = 120*60;

function shuffle(a){
  const arr=[...a];
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}

function init(){
  if(typeof BANK_SOAL==="undefined"){
    document.getElementById("questionText").innerText="BANK_SOAL belum dimuat.";
    return;
  }
  soal = shuffle(BANK_SOAL).slice(0,90).map(q=>{
    const opts=q.pilihan.map((t,i)=>({t,i}));
    const s=shuffle(opts);
    return {
      soal:q.soal,
      pilihan:s,
      benar:s.findIndex(x=>x.i===q.jawaban)
    };
  });
  answers=new Array(90).fill(null);
  flags=new Array(90).fill(false);
  buildGrid();
  render();
  timer();
}

function buildGrid(){
  const g=document.getElementById("questionGrid");
  g.innerHTML="";
  soal.forEach((_,i)=>{
    const b=document.createElement("button");
    b.className="qnum";
    b.textContent=i+1;
    b.onclick=()=>{current=i;render();}
    g.appendChild(b);
  });
}

function render(){
  document.getElementById("questionNumber").textContent=(current+1)+" / 90";
  document.getElementById("questionText").textContent=soal[current].soal;
  const c=document.getElementById("choices");
  c.innerHTML="";
  soal[current].pilihan.forEach((o,i)=>{
    const l=document.createElement("label");
    l.className="choice";
    l.innerHTML=`<input type="radio" name="opsi" ${answers[current]===i?"checked":""}> <b>${String.fromCharCode(65+i)}.</b> ${o.t}`;
    l.querySelector("input").onchange=()=>{answers[current]=i;updateGrid();calc();};
    c.appendChild(l);
  });
  updateGrid();
  document.getElementById("progressBar").style.width=((current+1)/90*100)+"%";
}

function updateGrid(){
  document.querySelectorAll(".qnum").forEach((b,i)=>{
    b.className="qnum";
    if(answers[i]!=null)b.classList.add("answered");
    if(flags[i])b.classList.add("flag");
    if(i===current)b.classList.add("active");
  });
}

function calc(){
  score=0;
  soal.forEach((q,i)=>{
    if(answers[i]===q.benar)score+=5;
  });
  document.getElementById("score").textContent=score;
}

document.getElementById("nextBtn").onclick=()=>{if(current<89){current++;render();}};
document.getElementById("prevBtn").onclick=()=>{if(current>0){current--;render();}};
document.getElementById("flagBtn").onclick=()=>{flags[current]=!flags[current];updateGrid();};
document.getElementById("finishBtn").onclick=finish;

function finish(){
 let benar=0,salah=0,kosong=0;
 soal.forEach((q,i)=>{
   if(answers[i]==null)kosong++;
   else if(answers[i]===q.benar)benar++;
   else salah++;
 });
 alert(`HASIL SIMULASI CAT

Benar : ${benar}
Salah : ${salah}
Kosong : ${kosong}

Nilai : ${benar*5} / 450`);
}

function timer(){
 const t=document.getElementById("timer");
 const x=setInterval(()=>{
   duration--;
   let m=Math.floor(duration/60),s=duration%60;
   t.textContent=String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");
   if(duration<=0){
      clearInterval(x);
      finish();
   }
 },1000);
}

window.onload=init;
