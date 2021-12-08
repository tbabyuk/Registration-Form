const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("form");


username.focus();

//ERROR/SUCCESS FUNCTIONS

function showError(input, message) {
    let formGroup = input.parentElement;
    let small = formGroup.querySelector("small");
    formGroup.className = "form-group error";
    small.textContent = message;
}

function showSuccess(input) {
    let formGroup = input.parentElement;
    let small = formGroup.querySelector("small");
    formGroup.className = "form-group success";
    small.textContent = "";
}


//VALIDATOR FUNCTIONS

//Check email is valid
function checkEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//Check password has number
function checkForNumber(password) {
    return /\d/g.test(password);
}



form.addEventListener("submit", (e) => {
    e.preventDefault();


    //enter validation conditions

    if (username.value === "") {
        showError(username, "Username is required");
    } else if (username.value.length <= 6) {
        showError(username, "Username must be longer than 6 characters");
    } else {
        showSuccess(username);
    }

    if (email.value === "") {
        showError(email, "Email is required");

        //check if entered email is valid
    } else if (!checkEmail(email.value.trim())) {
        showError(email, "Email is not valid. Try again.")
    } else {
        showSuccess(email);
    }
    if (password.value === "") {
        showError(password, "Password is required");

        //check if entered password includes at least one number    
    } else if (!checkForNumber(password.value)) {
        showError(password, "Password must contain at least one number");
    } else {
        showSuccess(password);
    }
    if (password2.value === "") {
        showError(password2, "Please re-enter password");
    } else if (password.value !== password2.value) {
        showError(password2, "Passwords must match");
    } else {
        showSuccess(password2);
    }
})

