let body = document.querySelector("body");
let form = document.createElement("form");

let inputName = document.createElement("input");
inputName.type = "text";
inputName.name = "userName";
inputName.placeholder = "Username";

let h2 = document.createElement("h2");
h2.innerText = "Signup";

let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.name = "userEmail";
inputEmail.placeholder = "Email";

let password = document.createElement("input");
password.type = "password";
password.name = "password";
password.placeholder = "Password";

let button = document.createElement("button");
button.type = "submit";
button.value = "Submit";
button.innerText = "Signup";

let span = document.createElement("span");
let text = document.createTextNode("Already have an account?");
let link = document.createElement("a");
link.href = "login.html";
link.textContent = "Login";
span.append(text, link);


form.appendChild(h2);
form.appendChild(inputName);
form.appendChild(inputEmail);
form.appendChild(password);
form.appendChild(button);

form.appendChild(span);
// form.appendChild(p);
body.appendChild(form);

let data = JSON.parse(localStorage.getItem("obj")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

    let bool = data.some(
        (item) =>
            item.userName === inputName.value || item.email === inputEmail.value
  );
  if (!bool) {
    let userObj = {
      userName: inputName.value,
      email: inputEmail.value,
      password: password.value,
    };

    data.push(userObj);
    localStorage.setItem("obj", JSON.stringify(data));
    window.location = "login.html";
  } else {
    window.alert("!!!");
  }

  inputName.value = "";
  inputEmail.value = "";
  password.value = "";
});
