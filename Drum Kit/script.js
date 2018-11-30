
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function removePlaying(e){
    const key = e.target;
    key.classList.remove("playing");
}

window.addEventListener("keydown",playSound);
window.addEventListener("transitionend",removePlaying);