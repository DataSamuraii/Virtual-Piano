let kbd = document.getElementsByClassName("kbd");

for (let i = 0; i < kbd.length; i++){
    let keyLetter = kbd[i].innerHTML;
    kbd[i].addEventListener("click", function (){
        let audio = new Audio("sounds/" + keyLetter + ".mp3");
        audio.play();
        SetKeyAnimation(kbd[i]);
    });

    document.addEventListener("keydown", function (event) {
        if (event.code === "Key" + keyLetter) {
            let audio = new Audio("sounds/" + keyLetter + ".mp3");
            audio.play();
            SetKeyAnimation(kbd[i]);
        }
    });
}
function SetKeyAnimation(key) {
    key.classList.add('slide-bottom');
    key.style.animation = 'none';
    key.offsetHeight; /* trigger reflow */
    key.style.animation = null;
}
