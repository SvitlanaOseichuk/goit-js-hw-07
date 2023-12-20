
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divClr = document.querySelector(".widget");
const spanClr = document.querySelector(".color");
const btn = document.querySelector(".change-color");
const elementBody = divClr.parentNode;


btn.addEventListener("click", () => {
 spanClr.style.backgroundColor = elementBody.style.backgroundColor = getRandomHexColor();
});
