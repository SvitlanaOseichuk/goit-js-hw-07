
const userName = document.querySelector("#name-input");

userName.addEventListener('input', (e) => {
   const mesagge = document.querySelector('#name-output');
        mesagge.textContent = e.target.value.trim();
   
})



