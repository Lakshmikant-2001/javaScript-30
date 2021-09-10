
removePlayingClass = (e) =>{
    // if(e.propertyName!=='transform') return;
    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key)=> key.addEventListener('transitionend',removePlayingClass));

window.addEventListener('keydown',function(e){
    const dataKey = e.key.toUpperCase();       
    const keyDiv = document.querySelector(`.key[data-key = "${dataKey}"]`);
    const audio = document.querySelector(`audio[data-key = "${dataKey}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    keyDiv.classList.add('playing');
})

