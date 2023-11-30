let fullName = "Ruslan Velizade";
let age = 44;
let skills = ["Telebe"]

localStorage.setItem("fullName", fullName);
localStorage.setItem("age", age);
localStorage.setItem("skills", skills);

console.log(localStorage.getItem("fullName"));
console.log(localStorage.getItem("age"));
console.log(localStorage.getItem("skills"));
