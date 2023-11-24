let words = document.querySelector(".words");
let container = document.querySelector(".container");
let listOne = document.querySelector(".list.one");
let listTwo = document.querySelector(".list.two");

let keys = document.querySelectorAll(".key");

window.addEventListener("keydown", function (e) {
    // if (words.innerText.length > 60) {
    //     words.innerText = "";
    // }
    // if (e.code == "Space") {
    //     words.innerText += ""
    // }

    keys.forEach((item, i) => {
        console.log(item.innerText == e.key);

        if (item.innerText == e.key) {
            item.style.opacity = "0";
            item.style.backgroundColor = "#06c06f";
            item.style.transform = `scale(1.3)`;
            item.style.transition = `150ms`;
            words.innerText += `${item.innerText}`;
        }
    });
});

window.addEventListener("keyup", function (e) {
    // if (e.code == "Space") {
    //     words.innerText += ``;
    // }
    keys.forEach((item, i) => {
        // console.log(item.innerText == e.key);

        if (item.innerText == e.key) {
            item.style.opacity = "1";
            item.style.backgroundColor = "darkcyan";
            item.style.transform = `scale(1)`;
            
        }
    });

});

// keys.forEach(item, )