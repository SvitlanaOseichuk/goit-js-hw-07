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

    outputBoxes.append(box)
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



console.log(inputNum);
// console.log(outputBoxes);
// console.log(btnCreate)
// console.log(btnDestroy)

// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів. Після
// натискання на кнопку Create має рендеритися (додаватися в DOM) колекція
// з відповідною кількістю елементів і очищатися значення в інпуті.
// При повторному натисканні на кнопку Create поверх старої колекції
// має рендеритись нова. Після натискання на кнопку Destroy колекція
// елементів має очищатися.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>




// Після натискання користувачем на кнопку Create треба провалідувати значення
// в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно
// задоволяє умову, мають додаватися нові <div> елементи в DOM.
//     ((((
//     Після кліку на кнопку Create, якщо в input значення поза 
//     межами діапазону 1-100, нічого не відбувається
//     Після кліку на кнопку Create в div#boxes додається така
//     кількість різнокольорових квадратів, яка вказана в input.
//     Значення input очищається
//     ))))
//     ((((
//       Після повторного кліку на кнопку Create попередні квадрати 
//     повністю прибираються і замість них додаються нові у 
//     кількості, що вказана в input. Значення input очищається
//     ))))
// Для рендеру елементів на сторінці створи функцію createBoxes(amount), 
// яка приймає один параметр — число, що зберігає кількість елементів для 
// рендеру. Функція має створювати стільки <div> елементів, скільки вказано  (insertAjactedHTML)
// в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.(має бути стіп)
//     ((((
//       Перший квадрат у div#boxes має розміри 30px на 30px, 
//       а кожен наступний на 10px вищий і ширший від попереднього
//       )))) 
     

// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону.( додати функцію getRandomHexColor) Використовуй 
// готову функцію getRandomHexColor() для отримання випадкового кольору.
//     ((((
//       Усі квадрати в div#boxes різнокольорові і мають фон 
//     випадкового кольору
//     ))))   
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Для очищення колекції після натискання на кнопку Destroy створи функцію 
// destroyBoxes(), яка очищає вміст div#boxes,
//     ((((
//       Після натискання на кнопку Destroy усі квадрати з
//      div#boxes мають видалятися
//     ))))
// у такий спосіб видаляючи всі створені елементи.





// потрібно зробити так щоб створювались бокси по кількості, що вказує користувач в інпуті,
// і створювались вони на пікселі більше з умовою якщо їхня кількість не перевищує 100 і не менша 1 


// 1 для того що вводять в інпут додаємо лістенер
// 2 всі дані з інпуту додаємо через кріейт в дом дерево чурез apply і зразу очищаємо інпут через реплай()
// 3 при старомо вводі додається нова поверх(це можливо через blur)
// 4 коли натискаємо га дестрой видаляємоусе із дом дерева ( можливо через innerHTML)




// у createBoxes(amount) додаємо перевірку чи відповідає кількість і тоді обимо код і потім додаємо все в дом дерево



// функція для перевірки чисел
// функція для створення квадратів
// фукнція для додавання квадратів і очищення інпуту
// функція для додавання новтх квадратів і очищення інпуту



// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i++) {
//     const div = document.createElement('div');
//     div.style.width = `${30 + i * 10}px`;
//     div.style.height = `${30 + i * 10}px`;
//     div.style.background = getRandomHexColor();
//     document.querySelector('#boxes').appendChild(div);
//   }
// }

// function destroyBoxes() {
//   let boxes = document.querySelector('#boxes');
//   while (boxes.firstChild) {
//     boxes.removeChild(boxes.firstChild);
//   }
// }

// const controls = document.querySelector('#controls');
// const createButton = controls.querySelector('[data-create]');
// const destroyButton = controls.querySelector('[data-destroy]');
// const input = controls.querySelector('input');

// createButton.addEventListener('click', () => {
//   createBoxes(input.value);
// });

// destroyButton.addEventListener('click', () => {
//   destroyBoxes()
 // });








// const refs = {
//   amountEl: document.querySelector('#controls input'),
//   createEl: document.querySelector('button[data-create]'),
//   destroyEl: document.querySelector('button[data-destroy]'),
//   boxesEl: document.querySelector('#boxes')
// }

// function createBoxes(amount) {
//   for(var i = 0; i < amount; i++) {
//     var elem = document.createElement('div');
    
//     elem.style.width = 30 + (10 * i)+'px';
//     elem.style.height = 30+'px';
//     elem.style.backgroundColor = getRandomHexColor();
    
//     refs.boxesEl.append(elem);
//   }
// }

// refs.createEl.addEventListener('click', function() {
//   var amount = refs.amountEl.value;
//   if(amount > 0) {
//     createBoxes(amount);
//   }
// });

// refs.destroyEl.addEventListener('click', function() {
//   refs.boxesEl.innerHTML = '';
// });


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }