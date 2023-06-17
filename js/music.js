let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlicon");
let isPlaying = false;

function playpause() {
    if (isPlaying) {
        song.pause();
        ctrlIcon.classList.remove("la-pause-circle");
        ctrlIcon.classList.add("la-play-circle");
    } else {
        song.play();
        ctrlIcon.classList.remove("la-play-circle");
        ctrlIcon.classList.add("la-pause-circle");
    }
    isPlaying = !isPlaying;
}

// Start playing the audio when the page is loaded
window.addEventListener('load', () => {
    song.play().then(() => {
        ctrlIcon.classList.remove("la-play-circle");
        ctrlIcon.classList.add("la-pause-circle");
        isPlaying = true;
    }).catch((error) => {
        console.log('Autoplay was prevented:', error);
    });
});