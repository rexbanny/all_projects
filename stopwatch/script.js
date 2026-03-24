const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let musicFiles = ["music1.mp3", "music2.mp3"];
let seconds = 0;
let interval = null;
function updateTime() {
    seconds++;
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    timeDisplay.textContent =
        `${String(mins).padStart(2, "0")}:` +
        `${String(secs).padStart(2, "0")}`;
}
startBtn.addEventListener("click", () => {
    if (interval === null) {
        interval = setInterval(updateTime, 1000);
    }
});
stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});
resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    timeDisplay.textContent = "00:00";
});
function changeMusic(direction) {
    const audio = document.querySelector("audio");
    let currentSrc = audio.getAttribute("src");
    let currentIndex = musicFiles.indexOf(currentSrc);
    if (direction === "next") {
        currentIndex = (currentIndex + 1) % musicFiles.length;
    } else if (direction === "prev") {
        currentIndex = (currentIndex - 1 + musicFiles.length) % musicFiles.length;
    }   
    audio.setAttribute("src", musicFiles[currentIndex]);
    audio.play();
}
nextBtn.addEventListener("click", () => changeMusic("next"));
prevBtn.addEventListener("click", () => changeMusic("prev"));   


