
const userForm = document.querySelector(".login-form");


userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.elements.email.value.trim() === '' || e.target.elements.password.value.trim() === '' ) {
         alert("All form fields must be filled in");
     } else {
        const values = {
            email: `${e.target.elements.email.value.trim()}`,
            password: `${e.target.elements.password.value.trim()}`, 
        };
        console.log(values);
        userForm.reset();
     }
})
