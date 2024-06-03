function playAudio(id) {
    document.getElementById(id).play();
}

function pauseAudio(id) {
    document.getElementById(id).pause();
}

function stopAudio(id) {
    var audio = document.getElementById(id);
    audio.pause();
    audio.currentTime = 0;
}
