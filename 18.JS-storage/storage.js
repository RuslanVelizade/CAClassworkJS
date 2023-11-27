let form = document.querySelector("form");
let inputs = document.querySelector(".input");

let fName = document.querySelector("#firstName");
let lName = document.querySelector("#lastName");
let address = document.querySelector("#address");

let data = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let info = {
        id: Date.now(),
        firstName: fName.value,
        lastName: lName.value,
        address: address.value,
    };

    data.push(info)

    localStorage.setItem("personObj")
}
// let users = JSON.parse(localStorage.getItem("users")) || [];

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let bool = users.some((item) =>
//         item.firstName === inputs[0].value || item.lastName === inputs[1].value);
//     console.log(bool);
    
//     if (!bool) {
        
//         let userObj = {
//             firstName: users[0].value,
//             lastName: users[1].value,
//             address: users[2].value,
//             id: Date.now(),
//         };

//         users.push(userObj);

//         localStorage.setItem("users", JSON.stringify(users))
//         window.location = "about.html";
//     } else {
//         window.alert("username or email already used!");
//     }

//     inputs.forEach(element => {
//         element.value = "";
//     });
// });


