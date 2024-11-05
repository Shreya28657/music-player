const audioPlayer = document.getElementById('audio-player');
const playButtons = document.querySelectorAll('.play-btn');

let currentSongIndex = -1;

playButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const songElement = button.parentElement;
        const songSrc = songElement.getAttribute('data-src');

        if (currentSongIndex === index && !audioPlayer.paused) {
            audioPlayer.pause();
            button.innerText = 'Play';
        } else {
            if (currentSongIndex !== -1) {
                playButtons[currentSongIndex].innerText = 'Play';
            }
            audioPlayer.src = songSrc;
            audioPlayer.play();
            button.innerText = 'Pause';
            currentSongIndex = index;
        }
    });
});

audioPlayer.addEventListener('ended', () => {
    if (currentSongIndex !== -1) {
        playButtons[currentSongIndex].innerText = 'Play';
    }
});
