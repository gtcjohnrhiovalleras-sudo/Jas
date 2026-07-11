// ==========================
// FOR JASMINE ❤️
// PART 3
// ==========================

const loading = document.getElementById("loading");
const login = document.getElementById("login");
const main = document.getElementById("main");

const btn = document.getElementById("openGift");
const input = document.getElementById("nameInput");

const message = document.getElementById("message");
const heart = document.getElementById("heart");

// Loading animation
setTimeout(() => {
    loading.classList.add("hidden");
    login.classList.remove("hidden");
}, 4200);

// Open gift
btn.addEventListener("click", () => {

    let name = input.value.trim();

    if(name === ""){
        name = "Someone Special ❤️";
    }

    login.classList.add("hidden");
    main.classList.remove("hidden");

    // Save globally
    window.receiverName = name;

    startScene();

});

// First Scene
function startScene(){

    message.style.opacity = "1";

    message.innerHTML = `
    🌹<br><br>
    For <span style="color:#ff7eb9">${window.receiverName}</span>
    `;

    bloomFlower();
    
    setTimeout(showHeart,3500);

}

// Heart animation
function showHeart(){

    heart.style.opacity="1";

    heart.innerHTML="❤️";

    heart.animate([
        {transform:"translateX(-50%) scale(1)"},
        {transform:"translateX(-50%) scale(1.25)"},
        {transform:"translateX(-50%) scale(1)"}
    ],{
        duration:900,
        iterations:Infinity
    });

}
// ==========================
// PART 4
// STARS & FIREFLIES
// ==========================

// ---------- Stars ----------
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

for(let i=0;i<180;i++){

    stars.push({

        x:Math.random()*window.innerWidth,

        y:Math.random()*window.innerHeight,

        r:Math.random()*2,

        a:Math.random(),

        d:(Math.random()*0.02)+0.003

    });

}

function drawStars(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let s of stars){

        ctx.beginPath();

        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

        ctx.fillStyle="rgba(255,255,255,"+s.a+")";

        ctx.fill();

        s.a+=s.d;

        if(s.a>=1||s.a<=0){

            s.d*=-1;

        }

    }

    requestAnimationFrame(drawStars);

}

drawStars();


// ---------- Fireflies ----------

const fireflies = document.getElementById("fireflies");

function createFirefly(){

    const f=document.createElement("div");

    f.style.position="absolute";

    f.style.width="6px";

    f.style.height="6px";

    f.style.borderRadius="50%";

    f.style.background="#fff8a5";

    f.style.boxShadow="0 0 20px gold";

    f.style.left=Math.random()*100+"vw";

    f.style.top="110vh";

    f.style.opacity="1";

    fireflies.appendChild(f);

    let x=Math.random()*200-100;

    let y=-window.innerHeight-300;

    f.animate([

        {

            transform:"translate(0,0) scale(.6)"

        },

        {

            transform:`translate(${x}px,${y}px) scale(1.3)`

        }

    ],{

        duration:7000+Math.random()*3000,

        easing:"linear"

    });

    setTimeout(()=>{

        f.remove();

    },10000);

}

setInterval(createFirefly,450);
