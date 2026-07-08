/* ===========================
   TYPEWRITER LOVE LETTER
=========================== */

const letter = `Hi Bavitha ❤️,

This website isn't just made with HTML, CSS and JavaScript...

It's made with memories, smiles, laughter and love.

Every moment with you has become a beautiful chapter in my life.

Thank you for always being there,
for making me smile,
for making ordinary days feel extraordinary.

No matter where life takes us,
    I hope we continue creating wonderful memories together.

        You'll always have a special place in my heart.

I Love You Forever ❤️`;

const typingElement = document.getElementById("typing");

let index = 0;

function typeLetter() {

    if (index < letter.length) {

        typingElement.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter, 40);

    }

}

window.addEventListener("load", typeLetter);


/* ===========================
   RELATIONSHIP COUNTER
=========================== */

/*
Replace this date with the day your relationship started.

Format:
Year, Month(0-11), Day

Example:
new Date(2023,9,16)

October = 9
*/

const loveDate = new Date(2023, 5, 30);

function updateCounter() {

    const now = new Date();

    const difference = now - loveDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCounter();

setInterval(updateCounter, 1000);


/* ===========================
   MUSIC BUTTON
=========================== */

// const music = document.getElementById("music");

// const musicBtn = document.getElementById("musicBtn");

// let playing = false;

// musicBtn.addEventListener("click", () => {

//     if (!playing) {

//         music.play();

//         musicBtn.innerHTML = "⏸";

//         playing = true;

//     } else {

//         music.pause();

//         musicBtn.innerHTML = "🎵";

//         playing = false;

//     }

// });

const music = document.getElementById("music");

window.addEventListener("click", () => {

    music.play().catch(error => {

        console.log("Autoplay blocked");

    });

}, { once: true });


/* ===========================
   SMOOTH BUTTON ANIMATION
=========================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.08)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});
// gift reveal
const giftBtn = document.getElementById("giftBtn");
const giftMessage = document.getElementById("giftMessage");

giftBtn.addEventListener("click", () => {

    giftMessage.style.display = "block";

    giftBtn.innerHTML = "❤️ I Love You ❤️";

    giftBtn.disabled = true;

    giftBtn.style.opacity = ".8";

    createConfetti();

});


/* ===========================
   FLOATING HEARTS
=========================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 350);


/* ===========================
   SCROLL REVEAL
=========================== */

const revealElements = document.querySelectorAll(
    ".story,.letter,.gallery,.counter,.reasons,.surprise"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

revealElements.forEach(section => {

    section.classList.add("fade");

    observer.observe(section);

});


/* ===========================
   CONFETTI
=========================== */

function createConfetti() {

    for (let i = 0; i < 180; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";

        confetti.style.width = "8px";
        confetti.style.height = "16px";

        const colors = [
            "#ff4d88",
            "#ffb6c1",
            "#ffd700",
            "#87ceeb",
            "#ffffff",
            "#ff69b4"
        ];

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.opacity = ".9";

        confetti.style.zIndex = "9999";

        confetti.style.borderRadius = "4px";

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);

        let pos = -20;

        const speed = 2 + Math.random() * 4;

        const drift = (Math.random() - 0.5) * 3;

        const fall = setInterval(() => {

            pos += speed;

            confetti.style.top = pos + "px";

            confetti.style.left =
                parseFloat(confetti.style.left) + drift + "px";

            if (pos > window.innerHeight + 30) {

                clearInterval(fall);

                confetti.remove();

            }

        }, 20);

    }

}


/* ===========================
   PHOTO HOVER EFFECT
=========================== */

const photos = document.querySelectorAll(".photo img");

photos.forEach(photo => {

    photo.addEventListener("mouseenter", () => {

        photo.style.transform = "scale(1.08) rotate(2deg)";

    });

    photo.addEventListener("mouseleave", () => {

        photo.style.transform = "scale(1)";

    });

});


/* ===========================
   GREETING IN CONSOLE
=========================== */

console.log(
    "❤️ This website was made with love. ❤️"
);
