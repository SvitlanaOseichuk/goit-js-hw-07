function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const numberOfBoxesInput = document.querySelector("#controls input");
const outputBoxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]"); 
const btnDestroy = document.querySelector("button[data-destroy]"); 


btnCreate.addEventListener("click", function() {
  let amount = numberOfBoxesInput.value;
    if (amount >= 1 && 100 >= amount) {
      createBoxes(amount);
    }
      
  function createBoxes(amount) {
  
    outputBoxes.innerHTML = '';

    let htmlContent = ''; 

    for (let i = 0; i < amount; i++) {
      let box = document.createElement("div");
      const size = 30 + 10 * i + "px";
      box.style.width = size;
      box.style.height = size;
      box.style.backgroundColor = getRandomHexColor();

      htmlContent += box.outerHTML;
    }

    outputBoxes.innerHTML = htmlContent;

    numberOfBoxesInput.value = '';
  }
});


btnDestroy.addEventListener("click", function() {
  outputBoxes.innerHTML = '';
})

