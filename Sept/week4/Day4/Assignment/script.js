let h1 = document.querySelector("#heading");
console.log(h1);

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let Name = inputs[0].value;
  let Email = inputs[1].value;
  let Phone = inputs[2].value;
  let Gender = inputs[3].value;
  let Course = inputs[4].value;
  let Password = inputs[5].value;
  let ConfirmPassword = inputs[6].value;
  console.log(Name, Email, Phone, Gender, Course, Password, ConfirmPassword );

  localStorage.setItem("userObj",JSON.stringify({Name, Email, Phone, Gender, Course, Password, ConfirmPassword}))
  
  inputs[0].value="";
  inputs[1].value="";
  inputs[2].value="";
  inputs[3].value="";
  inputs[4].value="";
  inputs[5].value="";
  inputs[6].value="";
  
});