/* =========================
   THEME SYSTEM
========================= */

const themeButtons =
    document.querySelectorAll(".theme-btn");


themeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const theme =
            button.dataset.theme;


        document.body.classList.remove(
            "light",
            "love"
        );


        if (theme === "light") {
            document.body.classList.add("light");
        }


        if (theme === "love") {
            document.body.classList.add("love");
        }

    });

});


/* =========================
   PAGES
========================= */

const page1 =
    document.getElementById("page1");

const page2 =
    document.getElementById("page2");

const page3 =
    document.getElementById("page3");

const page4 =
    document.getElementById("page4");


/* =========================
   BUTTONS
========================= */

const startBtn =
    document.getElementById("startBtn");

const nextBtn =
    document.getElementById("nextBtn");

const page3Btn =
    document.getElementById("page3Btn");


/* =========================
   PAGE 1 → PAGE 2
========================= */

startBtn.addEventListener("click", () => {

    page1.classList.add("fade-out");


    setTimeout(() => {

        page1.classList.remove("active");
        page1.classList.remove("fade-out");

        page2.classList.add("active");

    }, 500);

});


/* =========================
   PAGE 2 → PAGE 3
========================= */

nextBtn.addEventListener("click", () => {

    const music =
        document.getElementById(
            "backgroundMusic"
        );


    music.volume = 0.35;


    music.play().catch(error => {

        console.log(
            "Music error:",
            error
        );

    });


    page2.classList.add("fade-out");


    setTimeout(() => {

        page2.classList.remove("active");
        page2.classList.remove("fade-out");

        page3.classList.add("active");

    }, 500);

});


/* =========================
   PAGE 3 → PAGE 4
========================= */

page3Btn.addEventListener("click", () => {

    const music =
        document.getElementById("backgroundMusic");

    if (music) {
        music.pause();
        music.currentTime = 0;
    }

    page3.classList.add("fade-out");


    setTimeout(() => {

        page3.classList.remove("active");
        page3.classList.remove("fade-out");

        if (page4) {
            page4.classList.add("active");
        }

    }, 500);

});