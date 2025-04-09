const messages = [
    "Building cool stuff...",
    "Learning new things...",
    "Always learning...",
    "Exploring the unknown...",
    "Creating experiences...",
    "Innovating every day...",
    "Pushing boundaries...",
    "Embracing challenges...",
    "Crafting solutions...",
];

let i = 0;
let txt = '';
let msgIndex = 0;
let speed = 50; // typing speed in milliseconds

function typeWriter() {
    if (i < messages[msgIndex].length) {
        txt += messages[msgIndex].charAt(i);
        document.querySelector(".typewriter").textContent = txt;
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            txt = '';
            i = 0;
            msgIndex = (msgIndex + 1) % messages.length; // loop through messages
            typeWriter();
        }, 2000); // wait 2 seconds before starting the next message
    }
}

typeWriter();
