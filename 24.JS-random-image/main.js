let container = document.querySelector(".container");
let img = document.createElement("img");
let h1 = document.createElement("h1");

h1.textContent = 'RANDOM IMAGE';

let BASE_URL = "https://dog.ceo/api/breeds/image";
img.src = "https://images.dog.ceo/breeds/briard/n02105251_8725.jpg";

container.append(h1, img);


setInterval(() => {
  fetch(`${BASE_URL}/random`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      img.src = data.message;
    })
    .catch((err) => console.log(err));
}, 2000);
