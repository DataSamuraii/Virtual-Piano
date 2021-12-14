let clickedLetter = 0;

document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        let audio = new Audio("sounds/A.mp3");
        audio.play();
    }
    if (event.code == "KeyS") {
        let audio = new Audio("sounds/S.mp3");
        audio.play();
    }
    if (event.code == "KeyD") {
        let audio = new Audio("sounds/D.mp3");
        audio.play();
    }
    if (event.code == "KeyF") {
        let audio = new Audio("sounds/F.mp3");
        audio.play();
    }
    if (event.code == "KeyG") {
        let audio = new Audio("sounds/G.mp3");
        audio.play();
    }
    if (event.code == "KeyH") {
        let audio = new Audio("sounds/H.mp3");
        audio.play();
    }
    if (event.code == "KeyJ") {
        let audio = new Audio("sounds/J.mp3");
        audio.play();
    }

    if (event.code == "KeyW") {
        let audio = new Audio("sounds/W.mp3");
        audio.play();
    }
    if (event.code == "KeyE") {
        let audio = new Audio("sounds/E.mp3");
        audio.play();
    }
    if (event.code == "KeyT") {
        let audio = new Audio("sounds/T.mp3");
        audio.play();
    }
    if (event.code == "KeyY") {
        let audio = new Audio("sounds/Y.mp3");
        audio.play();
    }
    if (event.code == "KeyU") {
        let audio = new Audio("sounds/U.mp3");
        audio.play();
    }

    let kbd = document.getElementsByClassName("kbd")
    kbd.addEventListener("click", adder);

    function adder() {
        kbd.classList.add('clicked-key');
        console.log("a")
    }
});
