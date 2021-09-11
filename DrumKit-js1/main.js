
removePlayingClass = (e) => {
    e.target.classList.remove('playing');
}

playAudioKey = (e) => {
    const dataKey = e.key.toUpperCase();
    const keyDiv = document.querySelector(`.key[data-key = "${dataKey}"]`);
    const audio = document.querySelector(`audio[data-key = "${dataKey}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    keyDiv.classList.add('playing');
    const span = keyDiv.querySelector('.sound');
    const p = document.querySelector('.sound-name');
    p.textContent = span.textContent.toUpperCase();
}

playAudioClick = (e) => {
    const keyDiv = e.currentTarget;
    const kbd = keyDiv.querySelector('kbd');
    const dataKey = kbd.textContent;
    const audio = document.querySelector(`audio[data-key = "${dataKey}"]`);
    audio.currentTime = 0;
    audio.play();
    keyDiv.classList.add('playing');
    const span = keyDiv.querySelector('.sound');
    const p = document.querySelector('.sound-name');
    p.textContent = span.textContent.toUpperCase();
}

const keys = document.querySelectorAll('.key');
const body = document.querySelector('body');

window.addEventListener('keydown', playAudioKey);

keys.forEach((key) => {
    key.addEventListener('transitionend', removePlayingClass);
    key.addEventListener('click', playAudioClick);
});
