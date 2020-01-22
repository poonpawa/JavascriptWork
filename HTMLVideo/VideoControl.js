//play/pause controls of the video

const playBt = document.querySelector(".play");
const video = document.querySelector("video");

playBt.addEventListener("click", toggle);
video.addEventListener("click", toggle);

function toggle() {
    //const video = document.querySelector("video");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//skip 10s and 25s in the video
document.querySelector(".skip25").addEventListener("click", skip);
document.querySelector(".skip10").addEventListener("click", skip);

function skip() {
    video.currentTime = video.currentTime + parseInt(this.dataset.skiprate);
}

//Volumne Control and playBackRate

const volumneSlider = document.querySelector(".volume input");
volumneSlider.addEventListener("change", handleChange);

const playBackSlider = document.querySelector(".playBackrate input");
playBackSlider.addEventListener("change", handleChange);

function handleChange() {
    video[this.name] = this.value;
}

//progress bar
const progressBar = document.querySelector(".progressBar");

video.addEventListener("timeupdate", handleProgress);

function handleProgress() {
    let progress = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${progress}%`;
}
