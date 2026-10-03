const gift = document.getElementById("gift");
const message = document.getElementById("message");
const clickText = document.getElementById("clickText");
const typing = document.getElementById("typing");

const text =
    "Some feelings are difficult to explain... so I made this little gift just for you. ❤️";

let i = 0;

gift.addEventListener("click", () => {

    gift.classList.add("open");

    clickText.style.display = "none";

    setTimeout(() => {

        message.style.display = "block";

        typeMessage();

    }, 800);

    createHearts();
});


function typeMessage() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeMessage, 45);
    }
}


function createHearts() {

    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 5000);
    }
}