let formSection = document.querySelector("#form-section");

const id = new URLSearchParams(window.location.search).get("id");

let form = document.querySelector("form");
let inputFirst = document.querySelector("#firstName");
let inputLast = document.querySelector("#lastName");
let inputEmail = document.querySelector("#email");
let inputPhoto = document.querySelector("#inputGroupFile04")

let allInputs = document.querySelector(".form-control");

const BASE_URL = 'http://localhost:2020';

async function getData(users) {
    
    let response = await axios(`${BASE_URL}/${users}`);
    console.log(response);
    
}
getData("users");

data = JSON.parse(localStorage.getItem("obj")) || [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let bool = data.some(
        (item) => {
            item.firstName === item.inputFirst || item.lastName === item.inputLast

        });
    if (!bool) {
        let object = {
            firstName: inputFirst.value,
            lastName: inputLast.value,
            email: inputEmail.value,
            userPhoto: inputPhoto.value,
        }
        data.push(object);
        localStorage.setItem("obj", JSON.stringify(data));

    } else {
        window.alert("First Name,Last Name or email may be wrong!!")
    }
});


async function getUserData() {
    try {
        let response = await axios(`${BASE_URL}/users/${id}`);
        console.log(response.data);
        allInputs[0].value  = response.data.name
        allInputs[1].value  = response.data.surname
        allInputs[2].value  = response.data.email
        allInputs[3].value  = response.data.photo
    } catch (error) {
        console.log(error);
    }
}

id && getUserData();


