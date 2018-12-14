const player = document.querySelector(".player");
const video = player.querySelector(".viewer")
const controls = document.querySelector(".player__controls");
const progress = player.querySelector(".progress");
const progressBar = progress.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscreen = player.querySelector("#fullscreen");
progressBar.style.flexBasis = '0%';

function toggleVideo()
{
    if(video.paused) video.play();
    else video.pause();
}

function updateButton()
{
    const icon = video.paused ? '►' : '❚ ❚'
    toggle.innerHTML = icon;
}

function skip()
{
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRanges()
{
    video[this.name] = this.value;
}

function handleProgress()
{
    const percent = video.currentTime/video.duration * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e)
{
    const percent = e.offsetX/progress.offsetWidth * 100;
    progressBar.style.flexBasis = `${percent}%`;
    video.currentTime = percent*video.duration/100;
}

function handleFullscreen()
{
    if(player.requestFullScreen)
    {
        video.requestFullScreen();
    }
    else if(player.mozRequestFullScreen){
        video.mozRequestFullScreen();
    }
    else if(player.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
    }
}

let mousedown=false;

toggle.addEventListener("click",toggleVideo);
video.addEventListener("click",toggleVideo);
video.addEventListener("play",updateButton);
video.addEventListener("pause",updateButton);
video.addEventListener("dblclick",handleFullscreen);
skipButtons.forEach(btn => btn.addEventListener("click",skip));
ranges.forEach(range => range.addEventListener("change",handleRanges));
ranges.forEach(range => range.addEventListener("mousedown", () => mousedown = true));
ranges.forEach(range => range.addEventListener("mouseup", () => mousedown = false));
ranges.forEach(range => range.addEventListener("mousemove",handleRanges));

video.addEventListener("timeupdate",handleProgress);
progress.addEventListener("click",scrub);
progress.addEventListener("mousemove",(e) => {
    if(mousedown) scrub(e);
});
progress.addEventListener("mousedown",() => mousedown=true);
progress.addEventListener("mouseup",() => mousedown=false);
fullscreen.addEventListener("click",handleFullscreen);




