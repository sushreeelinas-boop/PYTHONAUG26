let registerForm = document.querySelector(".register");
console.log(registerForm);

let inputs = registerForm.children;
console.log(inputs);

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = inputs[1].value;
  let email = inputs[5].value;
  let phone = inputs[9].value;
  let dateofbirth = inputs[13].value;
  let genderElement = document.querySelector('input[name="gender"]:checked');
  if(!genderElement){
    alert("Please select your gender");
    return;
  }
    let gender = genderElement.value
  
  let address = document.querySelector("#address").value;
  

  console.log(name, email, phone, dateofbirth, gender, address);

  localStorage.setItem(
    "userData",
    JSON.stringify({name, email, phone, dateofbirth, gender, address }),
  );

  inputs[1].value = "";
  inputs[5].value = "";
  inputs[9].value = "";
  inputs[13].value = "";
 document.querySelectorAll('input[name="gender"]').forEach((radio)=>{
  radio.checked=false;
 });

 document.querySelector("#address").value = "";
  

  alert("successfully register");
});

let show_container = document.querySelector(".show-container");

let showBtn = document.querySelector(".show");
showBtn.addEventListener("click", () => {
  let userData = JSON.parse(localStorage.getItem("userData"));

  for (let key in userData) {
    let p = document.createElement("p");
    let b = document.createElement("b");
    b.innerText = key;
    p.innerText = userData[key];
    show_container.append(b,p);
  }

  console.log(userData);
});