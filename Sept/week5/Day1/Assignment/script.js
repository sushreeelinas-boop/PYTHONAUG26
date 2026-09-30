let registerForm = document.querySelector("#register");

let inputs = registerForm.querySelectorAll("input[type='text'], input[type='email'], input[type='number'], input[type='Date of Birth'], textarea");

console.log(inputs);


registerForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let name = inputs[0].value;
    let email = inputs[1].value;
    let phone = inputs[2].value;
    let dob = inputs[3].value;
    let address = document.querySelector("#address").value;

    let genderElement = document.querySelector(
        "input[name='gender']:checked"
    );

    let gender = genderElement ? genderElement.value : "";

    if (!name || !email || !phone || !dob || !gender || !address) {
        alert("Kindly fill all the fields");
        return;
    }

    let existingUsers =
        JSON.parse(localStorage.getItem("usersData")) || [];


    let newUser = {
        name,
        email,
        phone,
        dob,
        gender,
        address
    };


    let newUserList = [...existingUsers, newUser];


    localStorage.setItem(
        "usersData",
        JSON.stringify(newUserList)
    );


    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    document.querySelector("#address").value = "";

    if (genderElement) {
        genderElement.checked = false;
    }


    alert("Success Register");

});



let showButton = document.querySelector(".show");
let showContainer = document.querySelector(".show-container");


showButton.addEventListener("click", (e) => {

    e.preventDefault();

    let existingUsers =
        JSON.parse(localStorage.getItem("usersData")) || [];


    if (existingUsers.length === 0) {

        alert("No user registered");

        return;
    }


    let user = existingUsers[existingUsers.length - 1];


    showContainer.innerHTML = `
        <h3>Student Details</h3>

        <p><b>Name:</b> ${user.name}</p>

        <p><b>Email:</b> ${user.email}</p>

        <p><b>Phone:</b> ${user.phone}</p>

        <p><b>Date of Birth:</b> ${user.dob}</p>

        <p><b>Gender:</b> ${user.gender}</p>

        <p><b>Address:</b> ${user.address}</p>
    `;

});


let loginForm = document.querySelector("#loginForm");

let loginInputs = loginForm.querySelectorAll("input");

console.log(loginInputs);


loginForm.addEventListener("submit", (e) => {

    e.preventDefault();


    let email = loginInputs[0].value;

    let password = loginInputs[1].value;


    if (!email || !password) {

        alert("Kindly fill all the fields");

        return;
    }

    let existingUsers =
        JSON.parse(localStorage.getItem("usersData")) || [];


    let existingUser =
        existingUsers.find((v) => v.email == email);


    console.log(existingUser);



    if (!existingUser) {

        alert("User does not exist");

    } else {

    

        alert(
            "User found, but password login is not available because password is not registered."
        );
    }

});