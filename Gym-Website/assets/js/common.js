const BASE_URL = "http://localhost:4000";

let menuIcon = document.querySelector("i.fa-solid.fa-bars");
let header = document.querySelector("header");
let responsiveHeader = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
  responsiveHeader.style.display = "block";
  console.log("Hi");
});



  