"use strict";

/* ==========================================================
   APP.JS v4.0
   PART 1 - CORE
========================================================== */

/* ==========================================================
   KONFIGURASI
========================================================== */

const CONFIG = {
    TOTAL_SOAL: 90,
    DURASI: 120 * 60,
    SKOR_BENAR: 5
};

/* ==========================================================
   GLOBAL
========================================================== */

let soal = [];
let current = 0;
let answers = [];
let flags = [];

let duration = CONFIG.DURASI;
let timerId = null;

let mode = "belajar";
let namaPeserta = "Peserta";

let examStarted = false;

/* ==========================================================
   ELEMENT HTML
========================================================== */

const el = {

    nama: document.getElementById("namaPeserta"),
    mode: document.getElementById("modeText"),
    score: document.getElementById("score"),
    timer: document.getElementById("timer"),

    question: document.getElementById("questionText"),
    choices: document.getElementById("choices"),
    feedback: document.getElementById("feedback"),

    number: document.getElementById("questionNumber"),
    progress: document.getElementById("progressBar"),

    grid: document.getElementById("questionGrid"),

    examPage: document.getElementById("examPage"),
    resultPage: document.getElementById("resultPage"),
    reviewPage: document.getElementById("reviewPage"),

    reviewContainer: document.getElementById("reviewContainer")

};

/* ==========================================================
   SHUFFLE ARRAY
========================================================== */

function shuffle(arr){

    const data = [...arr];

    for(let i=data.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [data[i],data[j]]=[data[j],data[i]];

    }

    return data;

}

/* ==========================================================
   MEMBANGUN SOAL
========================================================== */

function buildExam(){

    soal = shuffle(BANK_SOAL)
    .slice(0,CONFIG.TOTAL_SOAL)
    .map(item=>{

        const pilihan = shuffle(

            item.pilihan.map((text,index)=>({

                text:text,

                old:index

            }))

        );

        return{

            soal:item.soal,

            pilihan:pilihan,

            benar:pilihan.findIndex(

                x=>x.old===item.jawaban

            )

        };

    });

}

/* ==========================================================
   RESET LATIHAN
========================================================== */

function resetExam(){

    current = 0;

    duration = CONFIG.DURASI;

    answers = new Array(CONFIG.TOTAL_SOAL).fill(null);

    flags = new Array(CONFIG.TOTAL_SOAL).fill(false);

    examStarted = false;

    if(timerId){

        clearInterval(timerId);

        timerId = null;

    }

    el.score.textContent = "0";

    el.timer.textContent = "120:00";

    el.feedback.innerHTML = "";

}

/* ==========================================================
   FORMAT TIMER
========================================================== */

function formatTime(sec){

    const menit = Math.floor(sec/60);

    const detik = sec%60;

    return String(menit).padStart(2,"0") +
           ":" +
           String(detik).padStart(2,"0");

}

/* ==========================================================
   START LATIHAN
========================================================== */

function startExam(){

    if(typeof BANK_SOAL==="undefined"){

        alert("BANK_SOAL belum dimuat.");

        return;

    }

    namaPeserta =
    document.getElementById("namaInput")
    .value
    .trim();

    if(namaPeserta===""){

        namaPeserta="Peserta";

    }

    mode =
    document.querySelector(
        "input[name=mode]:checked"
    ).value;

    resetExam();

    buildExam();

    el.nama.textContent = namaPeserta;

    el.mode.textContent =
        mode==="belajar"
        ? "Belajar"
        : "Ujian";

    examStarted = true;

}
/* ==========================================================
   APP.JS v4.0
   PART 2 - RENDER & NAVIGASI
========================================================== */

/* ==========================================================
   MEMBUAT GRID NOMOR SOAL
========================================================== */

function buildGrid(){

    el.grid.innerHTML="";

    for(let i=0;i<CONFIG.TOTAL_SOAL;i++){

        const btn=document.createElement("button");

        btn.className="qnum";

        btn.textContent=i+1;

        btn.onclick=function(){

            current=i;

            renderQuestion();

        };

        el.grid.appendChild(btn);

    }

}

/* ==========================================================
   UPDATE GRID
========================================================== */

function updateGrid(){

    const tombol=document.querySelectorAll(".qnum");

    tombol.forEach((btn,index)=>{

        btn.className="qnum";

        if(index===current){

            btn.classList.add("active");

        }

        if(answers[index]!==null){

            btn.classList.add("answered");

        }

        if(flags[index]){

            btn.classList.add("flag");

        }

    });

}

/* ==========================================================
   UPDATE NILAI
========================================================== */

function updateScore(){

    let nilai=0;

    soal.forEach((q,index)=>{

        if(answers[index]===q.benar){

            nilai+=CONFIG.SKOR_BENAR;

        }

    });

    el.score.textContent=nilai;

}

/* ==========================================================
   UPDATE PROGRESS
========================================================== */

function updateProgress(){

    el.number.textContent=
        (current+1)+" / "+CONFIG.TOTAL_SOAL;

    el.progress.style.width=
        ((current+1)/CONFIG.TOTAL_SOAL*100)+"%";

}

/* ==========================================================
   RENDER SOAL
========================================================== */

function renderQuestion(){

    if(!soal.length) return;

    const q=soal[current];

    el.question.textContent=q.soal;

    el.choices.innerHTML="";

    q.pilihan.forEach(function(opsi,index){

        const label=document.createElement("label");

        label.className="choice";

        label.innerHTML=`

            <input
                type="radio"
                name="answer"
                ${answers[current]===index?"checked":""}
            >

            <b>${String.fromCharCode(65+index)}.</b>

            ${opsi.text}

        `;

        label.querySelector("input").onchange=function(){

            answers[current]=index;

            updateScore();

            updateGrid();

            updateProgress();

            showFeedback();

        };

        el.choices.appendChild(label);

    });

    updateGrid();

    updateProgress();

    updateScore();

    showFeedback();

}

/* ==========================================================
   NEXT
========================================================== */

function nextQuestion(){

    if(current<CONFIG.TOTAL_SOAL-1){

        current++;

        renderQuestion();

    }

}

/* ==========================================================
   PREVIOUS
========================================================== */

function prevQuestion(){

    if(current>0){

        current--;

        renderQuestion();

    }

}

/* ==========================================================
   BOOKMARK
========================================================== */

function toggleFlag(){

    flags[current]=!flags[current];

    updateGrid();

}

/* ==========================================================
   EVENT NAVIGASI
========================================================== */

document.getElementById("nextBtn").onclick=nextQuestion;

document.getElementById("prevBtn").onclick=prevQuestion;

document.getElementById("flagBtn").onclick=toggleFlag;

/* ==========================================================
   APP.JS v4.0
   PART 3 - TIMER, FEEDBACK & EVENT
========================================================== */

/* ==========================================================
   TIMER
========================================================== */

function startTimer(){

    if(timerId){

        clearInterval(timerId);

    }

    duration=CONFIG.DURASI;

    el.timer.textContent=formatTime(duration);

    timerId=setInterval(function(){

        duration--;

        el.timer.textContent=formatTime(duration);

        if(duration<=0){

            clearInterval(timerId);

            finishExam();

        }

    },1000);

}

/* ==========================================================
   MODE BELAJAR
========================================================== */

function showFeedback(){

    el.feedback.innerHTML="";

    if(mode!=="belajar") return;

    if(answers[current]===null) return;

    const benar=soal[current].benar;

    const user=answers[current];

    const pilihan=document.querySelectorAll(".choice");

    pilihan.forEach(function(item){

        item.classList.remove("correct");

        item.classList.remove("wrong");

    });

    pilihan[benar].classList.add("correct");

    if(user!==benar){

        pilihan[user].classList.add("wrong");

        el.feedback.innerHTML=`

            <div class="feedback error">

                ❌ Jawaban Anda Salah

                <br><br>

                Jawaban yang benar adalah

                <br>

                <b>

                ${String.fromCharCode(65+benar)}.

                ${soal[current].pilihan[benar].text}

                </b>

            </div>

        `;

    }else{

        el.feedback.innerHTML=`

            <div class="feedback success">

                ✅ Jawaban Benar

                <br>

                +${CONFIG.SKOR_BENAR} poin

            </div>

        `;

    }

}

/* ==========================================================
   MULAI LATIHAN
========================================================== */

document.getElementById("startBtn").onclick=function(){

    startExam();

    buildGrid();

    renderQuestion();

    startTimer();

};

/* ==========================================================
   SELESAI
========================================================== */

document.getElementById("finishBtn").onclick=function(){

    if(confirm("Yakin ingin menyelesaikan latihan?")){

        finishExam();

    }

};

/* ==========================================================
   KEYBOARD
========================================================== */

document.addEventListener("keydown",function(e){

    if(!examStarted) return;

    if(e.key==="ArrowRight"){

        nextQuestion();

    }

    if(e.key==="ArrowLeft"){

        prevQuestion();

    }

});

/* ==========================================================
   UPDATE HEADER
========================================================== */

function updateHeader(){

    el.nama.textContent=namaPeserta;

    el.mode.textContent=

        mode==="belajar"

        ?"Belajar"

        :"Ujian";

}

/* ==========================================================
   APP.JS v4.0
   PART 4 - HASIL, REVIEW & RESET
========================================================== */

/* ==========================================================
   SELESAI LATIHAN
========================================================== */

function finishExam(){

    if(timerId){

        clearInterval(timerId);

        timerId=null;

    }

    let benar=0;
    let salah=0;
    let kosong=0;

    soal.forEach(function(q,index){

        if(answers[index]===null){

            kosong++;

        }
        else if(answers[index]===q.benar){

            benar++;

        }
        else{

            salah++;

        }

    });

    const nilai=benar*CONFIG.SKOR_BENAR;

    tampilkanHasil(
        benar,
        salah,
        kosong,
        nilai
    );

}

/* ==========================================================
   TAMPILKAN HASIL
========================================================== */

function tampilkanHasil(
    benar,
    salah,
    kosong,
    nilai
){

    document.getElementById("sidebar").style.display = "none";

    el.examPage.style.display = "none";

    el.reviewPage.style.display = "none";

    el.resultPage.style.display = "block";

    document.getElementById("rNama").textContent = namaPeserta;

    document.getElementById("rMode").textContent =
        mode === "belajar" ? "Belajar" : "Ujian";

    document.getElementById("rBenar").textContent = benar;

    document.getElementById("rSalah").textContent = salah;

    document.getElementById("rKosong").textContent = kosong;

    document.getElementById("rNilai").textContent = nilai;

}

/* ==========================================================
   REVIEW JAWABAN
========================================================== */

function reviewExam(){

    let html="";

    soal.forEach(function(q,index){

        html+=`

        <div class="review-item">

            <h3>Soal ${index+1}</h3>

            <p>${q.soal}</p>

        `;

       q.pilihan.forEach(function(opsi,i){

    let cls = "";

    if(i === q.benar){
        cls = "review-correct";
    }

    if(answers[index] === i && i !== q.benar){
        cls = "review-wrong";
    }

    html += `
    <div class="choice ${cls}">
        <b>${String.fromCharCode(65+i)}.</b>
        ${opsi.text}
    </div>
    `;

});

        html+="<hr></div>";

    });

    el.reviewContainer.innerHTML=html;

}

/* ==========================================================
   EVENT REVIEW
========================================================== */

const reviewBtn = document.getElementById("reviewBtn");

if (reviewBtn) {
    reviewBtn.onclick = function () {

        reviewExam();

        el.resultPage.style.display = "none";
        el.reviewPage.style.display = "block";

    };
}

document.getElementById("backResultBtn").onclick=function(){

    el.reviewPage.style.display="none";

    el.resultPage.style.display="block";

};

/* ==========================================================
   LATIHAN LAGI
========================================================== */

function restartExam(){
document.getElementById("sidebar").style.display = "block";
    resetExam();

    buildExam();

    buildGrid();

    renderQuestion();

    startTimer();

    el.examPage.style.display="block";

    el.resultPage.style.display="none";

    el.reviewPage.style.display="none";

}

const restartBtn = document.getElementById("restartBtn");
if (restartBtn) restartBtn.onclick = restartExam;

const restartBtn2 = document.getElementById("restartBtn2");
if (restartBtn2) restartBtn2.onclick = restartExam;

const backBtn = document.getElementById("backResultBtn");
if (backBtn) {
    backBtn.onclick = function () {
        el.reviewPage.style.display = "none";
        el.resultPage.style.display = "block";
    };
}
