let body = document.querySelector("body");
let form = document.createElement("form");

let h2 = document.createElement("h2");
h2.innerText = "Login";

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
button.innerText = "Login";

let span = document.createElement("span");
let text = document.createTextNode("Already have an account?");
let link = document.createElement("a");
link.href = "signup.html";
link.textContent = "Signup";
span.append(text, link);

form.appendChild(h2);
form.appendChild(inputEmail);

form.appendChild(password);

form.appendChild(button);

form.appendChild(span);
// form.appendChild(p);
body.appendChild(form);

let data = JSON.parse(localStorage.getItem("obj"));

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let user = data.find(
    (item) =>
      item.email === inputEmail.value && item.password === password.value
  );
  if (user) {
    window.location = "home.html";
  } else {
    window.alert("email ve ya password sehvdir");
  }
});
