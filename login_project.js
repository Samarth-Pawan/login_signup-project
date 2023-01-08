//toggle case 
const input = document.querySelector('.toggle_button') ;

input?.addEventListener('click', (e) =>{
    if(document?.body?.getAttribute("data-theme") == "dark"){
        document?.body?.setAttribute('data-theme', 'light');
    }
    else if(document.body.getAttribute("data-theme") == "light"){
        document.body.setAttribute('data-theme', 'dark');
    }
        
    
})

// signup-login page swap
function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add("form_message-${type}")

}

function setInputError(inputElement, message){
    inputElement.classList.add("form__input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;

}

function clearInputError(inputElement){
    inputElement.classList.remove("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";

}



document.addEventListener("DOMContentLoaded", e => {

    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form_hidden");
        createAccountForm.classList.remove("form_hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createAccountForm.classList.add("form_hidden");

    });

    loginForm.addEventListener("submit", e =>{
        e.preventDefault();
        // perform your AJAX/fetch login
        setFormMessage(loginForm, "error", "Invalid Username/password combination");
    
    });

    document.querySelectorAll(".form_input").forEach(inputElement =>{
        inputElement.addEventListener("blur", e =>{
            if(e.target.id == "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "Username must be atleast 10 characters in length");

            }
        });
        inputElement.addEventListener("input", e =>{
            clearInputError(inputElement);
        });
    });

});
