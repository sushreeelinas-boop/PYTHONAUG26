let loginForm = document.querySelector("#login");
let loginInputs = document.querySelectorAll("#login input");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = loginInputs[0].value;
    let password = loginInputs[1].value;

    if (!email || !password) {
        alert("Kindly fill the fields");
        return;
    }

    let existingUsers =
        JSON.parse(localStorage.getItem("usersData")) || [];

    let existingUser = existingUsers.find((v) => {
        return v.email == email;
    });

    if (!existingUser) {

        alert("User does not exist");

    } else {

        if (existingUser.password == password) {

            alert("Login success");

            loginInputs[0].value = "";
            loginInputs[1].value = "";

        } else {

            alert("Invalid password");

        }
    }
});