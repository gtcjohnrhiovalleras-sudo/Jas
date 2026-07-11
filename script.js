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
