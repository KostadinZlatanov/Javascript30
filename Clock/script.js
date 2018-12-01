function moveHands() {
    const now = new Date();

    const hourHand = document.querySelector("#hour-hand");
    const hourDegrees = now.getHours()%12*30 + 90;

    const minHand = document.querySelector("#min-hand");
    const minDegrees = now.getMinutes()*6 + 90;

    const secHand = document.querySelector("#sec-hand");
    const secDegrees = now.getSeconds()*6 + 90;

    hourHand.style.transform =`rotate(${hourDegrees}deg)`;
    minHand.style.transform =`rotate(${minDegrees}deg)`;
    secHand.style.transform =`rotate(${secDegrees}deg)`;
}

setInterval(moveHands,1000);