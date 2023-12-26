
const userName = document.querySelector("#name-input");
let output = document.querySelector('#name-output');

userName.addEventListener('input', (e) => {;

     output.textContent = e.target.value.trim();
     
        if (e.target.value.trim() === '' ){
         return output.textContent = 'Anonymous';
        } 
   
})



