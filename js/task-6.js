function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("#controls input");
const outputBoxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]"); //доступ до кнопки create
const btnDestroy = document.querySelector("button[data-destroy]"); //доступ до кнопки destroy

function createBoxes(amount) {
  for(var i = 0; i < amount; i++) {
    let box = document.createElement('div')
    box.style.width = 30 + (10 * i)+'px';
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = 30 + (10 * i)+'px';

    outputBoxes.append(box);
  }
}

btnCreate.addEventListener("click", function() {
    let amount = inputNum.value;
     if (amount >= 1 && 100 >= amount) {
      createBoxes(amount);
  }
});

btnDestroy.addEventListener("click", function() {
  outputBoxes.innerHTML = '';
})
