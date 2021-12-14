let clickedLetter = 0;

document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        clickedLetter = "A";
        console.log("The " + clickedLetter + " key is pressed.");
    }
    if (event.code == "KeyS") {
        clickedLetter = "S";
        console.log("The " + clickedLetter + " key is pressed.");
    }
    if (event.code == "KeyD") {
        clickedLetter = "D";
        console.log("The " + clickedLetter + " key is pressed.");
    }
    if (event.code == "KeyF") {
        clickedLetter = "F";
        console.log("The " + clickedLetter + " key is pressed.");
    }
    if (event.code == "KeyG") {
        clickedLetter = "G";
        console.log("The " + clickedLetter + " key is pressed.");
    }
    if (event.code == "KeyH") {
        clickedLetter = "H";
        console.log("The " + clickedLetter + " key is pressed.");
    }
    if (event.code == "KeyJ") {
        clickedLetter = "J";
        console.log("The " + clickedLetter + " key is pressed.");
    }
});
