// Form Document Variables
const form = document.querySelector('.register-login');
const userInput = document.querySelector('#username-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const repeatInput = document.querySelector('#repeat-password-input');
const alertMessage = document.querySelector(".alert-placeholder");

form.addEventListener('submit', (e) => {
    let errors = [];
    if(userInput){
        errors = signUpError(userInput.value,emailInput.value,passwordInput.value,repeatInput.value);
    }
    else{
        errors = loginError(emailInput.value,passwordInput.value);
    }
    if(errors.length > 0){
        e.preventDefault();
    }
});

function signUpError(username,email,password,repeatPassword){
    let errorCheck = [];
    if(username == '' || username == null){
        errorCheck.push('type error');
        userInput.parentElement.classList.add('error-logo');
        userInput.classList.add('error');
    }
    if(email == '' || email == null){
        errorCheck.push('type error');
        emailInput.parentElement.classList.add('error-logo');
        emailInput.classList.add('error');
    }
    if(password == '' || password == null || password.length < 8){
        errorCheck.push('type error');
        passwordInput.parentElement.classList.add('error-logo');
        passwordInput.classList.add('error');
        alertMessage.textContent = "Password must have at least 8 characters"
    }
    if(repeatPassword == '' || repeatPassword == null || repeatPassword != password){
        errorCheck.push('type error');
        repeatInput.parentElement.classList.add('error-logo');
        repeatInput.classList.add('error');
        passwordInput.parentElement.classList.add('error-logo');
        passwordInput.classList.add('error');
        alertMessage.textContent = "Password does not match!"
    }
    return errorCheck;
}

function loginError(email,password){
    let errorCheck = [];
    if(email == '' || email == null){
        errorCheck.push('type error');
        emailInput.parentElement.classList.add('error-logo');
        emailInput.classList.add('error');
    }
    if(password == '' || password == null){
        errorCheck.push('type error');
        passwordInput.parentElement.classList.add('error-logo');
        passwordInput.classList.add('error');
        alertMessage.textContent = "Password Required!"
    }
    return errorCheck;
}