let form = document.querySelector("form");
let allInputs = document.querySelector(".form-control");
let inputName = document.querySelector("#inputuser1");
let inputEmail = document.querySelector("#inputemail1");
let inputPassword = document.querySelector("#inputpassword1");

data = JSON.parse(localStorage.getItem("obj")) || [];


form.addEventListener("submit", function (event) {
    event.preventDefault();

    let bool = data.some(
        (item) =>
            item.userName === inputName.value || item.email === inputEmail.value
    );
    if (!bool) {

        let object = {
            userName: inputName.value,
            email: inputEmail.value,
            password: inputPassword.value
        }
        data.push(object);
        localStorage.setItem("obj", JSON.stringify(data));
        window.location = "login.html";
    } else {
        window.alert("Username, email or password may be wrong!!")
     }
    
})