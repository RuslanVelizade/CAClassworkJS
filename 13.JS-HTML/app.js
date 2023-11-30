//TASK 1
// Bir dəyişən təyin edin və dəyəri 1 olsun. 1 saniyədən bir consol-da yaratdığınız dəyişənin dəyərini +1 artırın. 4 saniyə
// sonra intervalı sonlandırın.
// let count = 1;
// let interval = setInterval(() => {
//   console.log(count++);
// }, 1000);
// setTimeout(() => {
//   clearTimeout(interval);
// }, 4000);


//TASK 2
// HTML-də button və text üçün tag yazın. button-a click ettikdə text-içindəki yazı dəyişsin.
// let btn = document.querySelector(".button");
// let p = document.querySelector(".text");

// btn.addEventListener("click", function () {
//   p.innerText = "I am Ruslan";
//   p.style.color = "yellow";
//   p.style.fontSize = "100px";
// });


//TASK 3
// HTML-də birdən çox eyni adda class sahib element yaradın. Hər bir elementi loop ilə tək-tək console-a çıxardın.
// let all = document.querySelectorAll(".span")
// all.forEach((item)=>{
//     console.log(item.innerText);
// })
//TASK 4
 

// Verilmiş string-in hər bir hərfini 1 saniyədən bir böyük hərf edin.

// Developer
// DEveloper
// DEVEloper
// DEVELOper
// DEVELOPer
// DEVELOPEr
// DEVELOPER
function capitalize(str) {
    let count = 0;
    let word = setInterval(() => {
        if (count ===str.length) {
            clearInterval(word)
        } else{
            str = str.substring(0, count) + str[count].toLocaleUpperCase() + str.substring(count+1)
        }
        count++;
    }, 1000);
 
  return str;
}
console.log(capitalize("developer"));