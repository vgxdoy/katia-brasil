const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const questionScreen = document.getElementById("questionScreen");
const successScreen = document.getElementById("successScreen");

const message = document.getElementById("message");

let attempts = 0;


/* =========================
   BOTTONE SÌ
========================= */

yesButton.addEventListener("click", () => {

    questionScreen.style.display = "none";

    successScreen.style.display = "block";

});


/* =========================
   BOTTONE NO
========================= */

function runAway() {

    attempts++;

    const messages = [
        "Sei sicura? 🥺",
        "Pensaci meglio...",
        "Non vuoi davvero farlo 😭",
        "Katia, guarda il bottone SÌ 👀",
        "Sapevo che avresti provato a cliccare 😂",
        "Non puoi scappare...",
        "Questo bottone non vuole farsi cliccare 😈",
        "Dovrai scegliere SÌ ❤️"
    ];

    message.textContent =
        messages[Math.min(attempts - 1, messages.length - 1)];


    noButton.style.position = "fixed";


    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const padding = 20;

    const maxX =
        window.innerWidth - buttonWidth - padding;

    const maxY =
        window.innerHeight - buttonHeight - padding;


    const randomX =
        Math.floor(Math.random() * maxX) + padding;

    const randomY =
        Math.floor(Math.random() * maxY) + padding;


    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";


    noButton.style.transform = "scale(1.1)";

    setTimeout(() => {
        noButton.style.transform = "scale(1)";
    }, 200);

}


/* =========================
   CELLULARE
========================= */

noButton.addEventListener("touchstart", (event) => {

    event.preventDefault();

    runAway();

});


/* =========================
   PC
========================= */

noButton.addEventListener("mouseover", () => {

    if (window.innerWidth > 600) {
        runAway();
    }

});


/* =========================
   SE RIESCE A CLICCARE
========================= */

noButton.addEventListener("click", (event) => {

    event.preventDefault();

    runAway();

});