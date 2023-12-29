
const userName = document.querySelector("#name-input");
const output = document.querySelector('#name-output');

userName.addEventListener('input', (e) => {
      
     const valueTrim = e.target.value.trim();
     output.textContent = valueTrim;
     
        if (valueTrim === '' ){
         return output.textContent = 'Anonymous';
        } 
   
})



