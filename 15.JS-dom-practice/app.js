let startB = document.querySelector(".startbtn");
let span = document.querySelector(".counter");
let stopB = document.querySelector(".stopbtn");
let incre = document.querySelector(".incbtn");
let decre = document.querySelector(".decbtn");
let reset = document.querySelector(".reset");
let count = 0;
let countInterval;
startB.addEventListener("click", function () {
  clearInterval(countInterval);
  countInterval = setInterval(() => {
    count++;
    span.innerText = count;
  }, 500);
  this.setAttribute("disabled", null);
  stopB.removeAttribute("disabled");
});

stopB.addEventListener("click", function () {
  startB.removeAttribute("disabled");
  this.setAttribute("disabled", null);
  clearInterval(countInterval);
});

incre.addEventListener("click", function () {
  clearInterval(countInterval);
  count++;
  span.innerText = count;
  startB.removeAttribute("disabled");
});
decre.addEventListener("click", function () {
  clearInterval(countInterval);
  startB.removeAttribute("disabled");
  count--;
  span.innerText = count;
});

reset.addEventListener("click", function () {
  clearInterval(countInterval);
  startB.removeAttribute("disabled");
  stopB.removeAttribute("disabled");
  count = 0;
  span.innerText = count;
});
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

// btn1.addEventListener("click", function () {
//   span.innerText = ++count;
// });
// btn2.addEventListener("click", function () {
//   span.innerText = --count;
// });
btn1.addEventListener("click", function () {
  count += +input1.value;
  span.innerText = count;
});
btn2.addEventListener("click", function () {
  count -= +input2.value;
  span.innerText = count;
});
