setInterval(setClock, 1000);

const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hoursHand = document.querySelector('.hours');
const audio = document.querySelector('audio');

function setClock() {
    const currentDate = new Date();
    secondsRatio = currentDate.getSeconds() / 60;
    minutesRatio = currentDate.getMinutes() / 60;
    hoursRatio = (currentDate.getHours()+minutesRatio) / 12;
    setRotation(secondsHand,secondsRatio);
    setRotation(minutesHand,minutesRatio);
    setRotation(hoursHand,hoursRatio);
    audio.play();
    audio.currentTime=0;
}

function setRotation(hand,ratio){
    hand.style.setProperty('--rotation',ratio * 360,"important");
}


setClock();

