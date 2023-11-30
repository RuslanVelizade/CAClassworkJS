let mainDiv = document.querySelector(".div");
let childDiv = document.querySelector(".div1");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  //   div1.classList.add("bg-darkgreen");
  this.parentElement.style.backgroundColor = "red";
  this.parentElement.style.width = "200px";
  this.parentElement.style.height = "200px";
  this.parentElement.style.position = "relative";
  this.style.position = "absolute";
  this.style.bottom = "20px";
  this.style.right = "20px";
});
// let body = document.querySelector(".body")
let button = document.querySelector(".btn1");
button.addEventListener("click", function () {
  document.body.classList.toggle("bg");
});

let cities = ["Ganja", "Baku", "Yevlakh", "Goranboy", "Shamkir"];

let ulElem = document.querySelector(".list");
ulElem.style.listStyle = "none";
cities.forEach((item) => {
  let liElem = document.createElement("li");
  liElem.innerText = `${item}`;
  ulElem.append(liElem);
  liElem.addEventListener("click", function () {
    this.remove();
  });
});
