function sayYes() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "flex";
}


function sayNo() {
    document.getElementById("page1").innerHTML = `
        <div class="welcome-card">

            <div class="little-heart">🥺</div>

            <p class="small-line">
                HOW DARE YOU?! 😤😂
            </p>

            <h1>
                You don't want<br>
                to see it?
            </h1>

            <p class="question">
                Really? 🥺
            </p>

            <button class="yes-btn" onclick="oneMoreChance()">
                Okay... one more chance? 👀
            </button>

        </div>
    `;
}


function oneMoreChance() {
    document.getElementById("page1").innerHTML = `
        <div class="welcome-card">

            <div class="little-heart">♡</div>

            <p class="small-line">
                Okay... 👀
            </p>

            <h1>
                One more<br>
                <span>chance?</span>
            </h1>

            <p class="question">
                This time... say YES. 😌💗
            </p>

            <button class="yes-btn" onclick="sayYes()">
                YES 💗
            </button>

        </div>
    `;
}


/* =========================
   PAGE 2 - ENVELOPE
   ========================= */

function openLetter() {

    const envelope = document.querySelector(".envelope");

    envelope.classList.add("open");

    setTimeout(function () {

        document.getElementById("page2").style.display = "none";

        document.getElementById("page3").style.display = "flex";

    }, 1000);
}


/* =========================
   PAGE 4
   ========================= */

function goToPage4() {

    document.getElementById("page3").style.display = "none";

    document.getElementById("page4").style.display = "flex";

    window.scrollTo(0, 0);
}


/* =========================
   PAGE 5
   ========================= */

function goToPage5() {

    document.getElementById("page4").style.display = "none";

    document.getElementById("page5").style.display = "flex";

    window.scrollTo(0, 0);
}


/* =========================
   FIND HIDDEN HEART
   ========================= */

function findHeart() {

    const heart = document.querySelector(".hidden-heart");

    const message = document.getElementById("gardenMessage");

    const nextButton = document.getElementById("gardenNext");

    heart.classList.add("found");

    message.innerHTML = `
        YAYYYY! 🥹💗 You found it!
    `;

    nextButton.style.display = "inline-block";
}


/* =========================
   PAGE 6
   ========================= */

function goToPage6() {

    document.getElementById("page5").style.display = "none";

    document.getElementById("page6").style.display = "flex";

    window.scrollTo(0, 0);
}


/* =========================
   LOVE MACHINE
   ========================= */

function releaseHearts() {

    const output =
        document.getElementById("heartOutput");

    const message =
        document.getElementById("vendingMessage");

    const button =
        document.getElementById("machineButton");

    const screenText =
        document.getElementById("screenText");

    const screenHeart =
        document.getElementById("screenHeart");

    const secretCard =
        document.getElementById("secretCard");


    /* Prevent pressing repeatedly */

    button.disabled = true;

    button.innerHTML = "DISPENSING... 💗";


    /* Machine screen */

    screenText.innerHTML = "LOADING LOVE...";

    screenHeart.innerHTML = "💗";


    /* Clear previous hearts */

    output.innerHTML = "";


    const hearts = [
        "💗",
        "💕",
        "💖",
        "💞",
        "💓",
        "💘",
        "🩷",
        "🤍",
        "💝",
        "💟"
    ];


    /* Create 70 hearts */

    for (let i = 0; i < 70; i++) {

        const heart =
            document.createElement("span");


        heart.className =
            "falling-heart";


        heart.innerHTML =
            hearts[i % hearts.length];


        /* Random horizontal position */

        heart.style.left =
            Math.random() * 90 + 5 + "%";


        /* Random direction */

        heart.style.setProperty(
            "--random-x",
            Math.random() * 100
        );


        /* Random size */

        heart.style.fontSize =
            17 + Math.random() * 23 + "px";


        /* Random timing */

        heart.style.animationDelay =
            Math.random() * 1.8 + "s";


        output.appendChild(heart);
    }


    /* Message appears */

    setTimeout(function () {

        screenText.innerHTML =
            "LOVE DISPENSED!";

        screenHeart.innerHTML =
            "💖";

        message.innerHTML =
            "A little extra love, just for you. 🥹💗";

    }, 900);


    /* Secret card appears */

    setTimeout(function () {

        secretCard.classList.add("show");

    }, 2800);

}


/* =========================
   SECRET CARD
   ========================= */

function openSecretCard() {

    const secretCard =
        document.getElementById("secretCard");

    secretCard.innerHTML = `
        <div class="secret-card-heart">
            💗
        </div>

        <p>
            Surprise... 🥹<br>
            There is still one more thing
            waiting for you.
        </p>

        <button
            class="open-secret-btn"
            onclick="goToPage7()">

            ONE MORE 👀💗

        </button>
    `;
}


/* =========================
   PAGE 7
   ========================= */

function goToPage7() {

    document.getElementById("page6").style.display = "none";

    document.getElementById("page7").style.display = "flex";

    window.scrollTo(0, 0);
}