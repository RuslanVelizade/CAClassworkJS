let form = document.querySelector("form");
let allInputs = document.querySelector(".form-control");
let inputName = document.querySelector("#inputuser1");
let inputEmail = document.querySelector("#inputemail1");
let inputPassword = document.querySelector("#inputpassword1");

data = JSON.parse(localStorage.getItem("obj"));

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let user = data.find(
        (item) =>
            item.email === inputEmail.value && item.password === inputPassword.value
    );
    if (user && item.email !== ' ' && item.password !== ' ') {
        window.location = "home.html";
    } else {
        window.alert("Email or password is incorrect!!")
    }
})

let icon = document.querySelector("i");

icon.addEventListener("click", function () {
    if (icon.className==="fa-solid fa-eye") {
        icon.className = "fa-solid fa-eye-slash"
        inputPassword.type= "password"
    } else {
        icon.className = "fa-solid fa-eye"
        inputPassword.type = "text"
    }
})