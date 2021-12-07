const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("form");


username.focus();

//VALIDATION FUNCTIONS

function showError(input, message) {
    input.style.borderColor = "#cc3d23";
    let inputGroup = input.parentElement;
    let small = inputGroup.querySelector("small");
    small.textContent = message;
}

function showSuccess(input) {
    input.style.borderColor = "#23bb23";
    let inputGroup = input.parentElement;
    let small = inputGroup.querySelector("small");
    small.textContent = "";
}


form.addEventListener("submit", (e) => {
    e.preventDefault();


    //enter validation conditions

    if(username.value === "") {
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }

    if(email.value === "") {
        showError(email, "Email is required");
    } else {
        showSuccess(email);
    }
    if(password.value === "") {
        showError(password, "Password is required");
    } else {
        showSuccess(password);
    }
    if(password2.value === "") {
        showError(password2, "Please re-enter password");
    } else if(password.value !== password2.value) {
        showError(password2, "Passwords must match");
    } else {
        showSuccess(password2);
    }
})

