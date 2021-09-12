setInterval(setClock, 1000);

const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hoursHand = document.querySelector('.hours');
const audio = document.querySelector('audio');
const dateElement = document.querySelector('.date');
const timeElement = document.querySelector('.time');
const speakerIcon = document.querySelector('#speaker-icon');

const day = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];

function setClock() {
    const currentDate = new Date();
    dateElement.textContent = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} - ${day[currentDate.getDay()]}day`;
    timeElement.textContent = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    secondsRatio = currentDate.getSeconds() / 60;
    minutesRatio = currentDate.getMinutes() / 60;
    hoursRatio = (currentDate.getHours() + minutesRatio) / 12;
    setRotation(secondsHand, secondsRatio);
    setRotation(minutesHand, minutesRatio);
    setRotation(hoursHand, hoursRatio);
    fixTransition(secondsHand);
    fixTransition(minutesHand);
    fixTransition(hoursHand);
}

function fixTransition(hand){
    const rotationValue = hand.style.getPropertyValue('--rotation');
    if(rotationValue==0){
        hand.style.transition="none";
    }
    else{
       hand.style.transition="transform .1s cubic-bezier(0.01, 2.5, 0.07, 1.31)";
    }
}

function setRotation(hand, ratio) {
    hand.style.setProperty('--rotation', ratio * 360, "important");
}

function sound() {
    const speakerIconType = speakerIcon.getAttribute('title');
    if (speakerIconType == "click to mute") {
        speakerIcon.classList.toggle('fa-volume-up');
        speakerIcon.classList.toggle('fa-volume-off');
        speakerIcon.setAttribute('title', "click to unmute");
        audio.volume=0;
    }
    else {
        speakerIcon.classList.toggle('fa-volume-up');
        speakerIcon.classList.toggle('fa-volume-off');
        speakerIcon.setAttribute('title', "click to mute");
        audio.play();
        audio.volume=1;
        audio.loop="true"
        audio.currentTime=0;
    }

}

speakerIcon.addEventListener('click', sound)
setClock();

