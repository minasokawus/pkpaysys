const images = [
    "picture/shouye1.png",
    "picture/shouye2.png",
    "picture/shouye3.png"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];
}, 3000);