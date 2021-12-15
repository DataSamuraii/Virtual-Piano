let kbd = document.getElementsByClassName("kbd");
document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        let audio = new Audio("sounds/A.mp3");
        kbd[0].classList.add('slide-bottom');
        audio.play();
        kbd[0].style.animation = 'none';
        kbd[0].offsetHeight; /* trigger reflow */
        kbd[0].style.animation = null;
    }
    if (event.code === "KeyS") {
        let audio = new Audio("sounds/S.mp3");
        kbd[1].classList.add('slide-bottom');
        audio.play();
        kbd[1].style.animation = 'none';2
        kbd[1].offsetHeight; /* trigger reflow */
        kbd[1].style.animation = null;
    }
    if (event.code === "KeyD") {
        let audio = new Audio("sounds/D.mp3");
        kbd[2].classList.add('slide-bottom');
        audio.play();
        kbd[2].style.animation = 'none';
        kbd[2].offsetHeight; /* trigger reflow */
        kbd[2].style.animation = null;
    }
    if (event.code === "KeyF") {
        let audio = new Audio("sounds/F.mp3");
        kbd[3].classList.add('slide-bottom');
        audio.play();
        kbd[3].style.animation = 'none';
        kbd[3].offsetHeight; /* trigger reflow */
        kbd[3].style.animation = null;
    }
    if (event.code === "KeyG") {
        let audio = new Audio("sounds/G.mp3");
        kbd[4].classList.add('slide-bottom');
        audio.play();
        kbd[4].style.animation = 'none';
        kbd[4].offsetHeight; /* trigger reflow */
        kbd[4].style.animation = null;
    }
    if (event.code === "KeyH") {
        let audio = new Audio("sounds/H.mp3");
        kbd[5].classList.add('slide-bottom');
        audio.play();
        kbd[5].style.animation = 'none';
        kbd[5].offsetHeight; /* trigger reflow */
        kbd[5].style.animation = null;
    }
    if (event.code === "KeyJ") {
        let audio = new Audio("sounds/J.mp3");
        kbd[6].classList.add('slide-bottom');
        audio.play();
        kbd[6].style.animation = 'none';
        kbd[6].offsetHeight; /* trigger reflow */
        kbd[6].style.animation = null;
    }

    if (event.code === "KeyW") {
        let audio = new Audio("sounds/W.mp3");
        kbd[7].classList.add('slide-bottom');
        audio.play();
        kbd[7].style.animation = 'none';
        kbd[7].offsetHeight; /* trigger reflow */
        kbd[7].style.animation = null;
    }
    if (event.code === "KeyE") {
        let audio = new Audio("sounds/E.mp3");
        kbd[8].classList.add('slide-bottom');
        audio.play();
        kbd[8].style.animation = 'none';
        kbd[8].offsetHeight; /* trigger reflow */
        kbd[8].style.animation = null;
    }
    if (event.code === "KeyT") {
        let audio = new Audio("sounds/T.mp3");
        kbd[9].classList.add('slide-bottom');
        audio.play();
        kbd[9].style.animation = 'none';
        kbd[9].offsetHeight; /* trigger reflow */
        kbd[9].style.animation = null;
    }
    if (event.code === "KeyY") {
        let audio = new Audio("sounds/Y.mp3");
        kbd[10].classList.add('slide-bottom');
        audio.play();
        kbd[10].style.animation = 'none';
        kbd[10].offsetHeight; /* trigger reflow */
        kbd[10].style.animation = null;
    }
    if (event.code === "KeyU") {
        let audio = new Audio("sounds/U.mp3");
        kbd[11].classList.add('slide-bottom');
        audio.play();
        kbd[11].style.animation = 'none';
        kbd[11].offsetHeight; /* trigger reflow */
        kbd[11].style.animation = null;
    }
});