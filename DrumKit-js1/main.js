
removePlayingClass = (e) =>{
    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key)=> key.addEventListener('transitionend',removePlayingClass));
const body = document.querySelector('body');

window.addEventListener('keydown',function(e){
    const dataKey = e.key.toUpperCase();       
    const keyDiv = document.querySelector(`.key[data-key = "${dataKey}"]`);
    const audio = document.querySelector(`audio[data-key = "${dataKey}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    keyDiv.classList.add('playing');
    const span = keyDiv.querySelector('.sound');
    const p = document.querySelector('.sound-name');
    p.textContent=span.textContent.toUpperCase();
})

