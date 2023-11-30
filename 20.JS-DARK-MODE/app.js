let body = document.querySelector("body");
let btn = document.querySelector(".btn");



let isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
    body.classList.add('dark-mode')
}
btn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});



