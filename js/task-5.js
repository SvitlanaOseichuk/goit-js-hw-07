
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const spanColor = document.querySelector(".color");
const btn = document.querySelector(".change-color");


btn.addEventListener("click", () => {

  const getColor = getRandomHexColor();

  spanColor.style.color = getColor;
  spanColor.textContent = getColor;
  body.style.backgroundColor = getColor;

});

