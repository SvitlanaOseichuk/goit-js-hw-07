
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
const spanColor = document.querySelector(".color");
const btn = document.querySelector(".change-color");



btn.addEventListener("click", () => {
  spanColor.style.color = getRandomHexColor();
 spanColor.textContent = getRandomHexColor();
});
