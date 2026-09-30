// ===============================
// TARGET ELEMENTS
// ===============================

let loginForm = document.querySelector("#login");

let email = document.querySelector("#email");

let password = document.querySelector("#password");

let remember = document.querySelector("#remember");

let forgotPassword = document.querySelector("#forgotPassword");


// ===============================
// LOGIN FORM
// ===============================

loginForm.addEventListener("submit", (e) => {

    // Prevent page refresh
    e.preventDefault();


    // Get input values
    let emailValue = email.value.trim();

    let passwordValue = password.value.trim();


    // ===============================
    // VALIDATION
    // ===============================

    if (emailValue === "") {

        alert("Please enter your email");

        email.focus();

        return;
    }


    if (passwordValue === "") {

        alert("Please enter your password");

        password.focus();

        return;
    }


    // ===============================
    // EMAIL VALIDATION
    // ===============================

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {

        alert("Please enter a valid email address");

        email.focus();

        return;
    }


    // ===============================
    // PASSWORD VALIDATION
    // ===============================

    if (passwordValue.length < 6) {

        alert("Password must be at least 6 characters");

        password.focus();

        return;
    }


    // ===============================
    // REMEMBER ME
    // ===============================

    if (remember.checked) {

        localStorage.setItem("email", emailValue);

        localStorage.setItem("password", passwordValue);

    } else {

        localStorage.removeItem("email");

        localStorage.removeItem("password");
    }


    // ===============================
    // LOGIN SUCCESS
    // ===============================

    alert("Login Successful!");

    console.log("Email:", emailValue);

    console.log("Password:", passwordValue);

    console.log("Remember Me:", remember.checked);

});


// ===============================
// LOAD SAVED LOGIN
// ===============================

window.addEventListener("load", () => {

    let savedEmail = localStorage.getItem("email");

    let savedPassword = localStorage.getItem("password");


    if (savedEmail && savedPassword) {

        email.value = savedEmail;

        password.value = savedPassword;

        remember.checked = true;
    }

});


// ===============================
// FORGOT PASSWORD
// ===============================

forgotPassword.addEventListener("click", (e) => {

    e.preventDefault();

    let emailValue = email.value.trim();


    if (emailValue === "") {

        alert("Please enter your email first");

        email.focus();

        return;
    }


    alert(
        "Password reset link will be sent to: " +
        emailValue
    );

});