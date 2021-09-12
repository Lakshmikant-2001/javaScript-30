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
    const rotationValue = secondsHand.style.getPropertyValue('--rotation');
    if(rotationValue==0){
        secondsHand.style.transition="none";
    }
    else{
        secondsHand.style.transition="transform .1s cubic-bezier(0.01, 2.5, 1, 1)";
    }
    console.log(rotationValue);
}

function setRotation(hand, ratio) {
    hand.style.setProperty('--rotation', ratio * 360, "important");
}

function sound() {
    const speakerIconType = speakerIcon.getAttribute('title');
    if (speakerIconType == "click to mute") {
        console.log("s");
        speakerIcon.classList.toggle('fa-volume-up');
        speakerIcon.classList.toggle('fa-volume-off');
        speakerIcon.setAttribute('title', "click to unmute");
        audio.pause();
    }
    else {
        speakerIcon.classList.toggle('fa-volume-up');
        speakerIcon.classList.toggle('fa-volume-off');
        speakerIcon.setAttribute('title', "click to mute");
        audio.play();
        audio.loop="true"
        audio.currentTime = 0;
    }

}

speakerIcon.addEventListener('click', sound)
setClock();

