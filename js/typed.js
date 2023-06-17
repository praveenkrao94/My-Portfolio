const textArray = [
    { text: 'Praveen Rao', color: 'rgb(0, 231, 120)' },
    { text: 'a Developer', color: 'rgb(56, 56, 56)' },
    { text: 'a Gamer', color: 'rgb(25, 174, 228)' },
    { text: 'a DJ', color: 'rgb(0, 231, 120)' }
];
const typingSpeed = 150;
const delay = 2000;

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const autoTypeElement = document.querySelector('.auto-type');
autoTypeElement.style.color = textArray[textIndex].color;

function type() {
    const currentTextObj = textArray[textIndex];
    const currentText = currentTextObj.text;

    if (isDeleting) {
        autoTypeElement.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;
    } else {
        autoTypeElement.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, delay);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;
        if (textIndex === textArray.length) {
            textIndex = 0;
        }
        autoTypeElement.style.color = textArray[textIndex].color;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", type);
