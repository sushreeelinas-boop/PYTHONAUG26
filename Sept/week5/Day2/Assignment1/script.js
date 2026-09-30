
let registerForm = document.querySelector("#registerForm");
console.log(registerForm);

let inputs = registerForm.children;
console.log(inputs);

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = inputs[0].querySelector("input").value;
  let email = inputs[1].querySelector("input").value;
  let course = inputs[2].querySelector("select").value;
  let phone = inputs[3].querySelector("input").value;
  let password = inputs[4].querySelector("input").value;

  console.log(name, email, course, phone, password);


  localStorage.setItem(
    "userData",
    JSON.stringify({ name,email,course,phone,password })
  );


  inputs[0].querySelector("input").value = "";
  inputs[1].querySelector("input").value = "";
  inputs[2].querySelector("select").value = "";
  inputs[3].querySelector("input").value = "";
  inputs[4].querySelector("input").value = "";

  alert("Successfully registered");

});

let show_container = document.querySelector(".show-container");
let showBtn = document.querySelector(".show");

showBtn.addEventListener("click", () => {

  let userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);

  if (userData) {

    show_container.innerHTML = "";

    for (let key in userData) {

      let p = document.createElement("p");
      let b = document.createElement("b");


      b.innerText = key + " : ";
      p.innerText = userData[key];

      show_container.append(b, p);

    }

  } else {

    alert("No registration data found");

  }

});

