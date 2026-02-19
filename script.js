const text = "Bunga ini bersinar seperti perasaan yang tulus ✨🌸";
let index = 0;
const speed = 80;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

typeEffect();
