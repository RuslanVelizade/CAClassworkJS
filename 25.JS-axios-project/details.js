let id = new URLSearchParams(window.location.search).get("id");
console.log(id);
let header = document.querySelector("header");
let button = document.querySelector("button");
const BASE_URL = "https://fakestoreapi.com/products";

header.append(button);
let products = document.querySelector("#products");

async function getData() {
  let response = await axios(`${BASE_URL}/${id}`);
  console.log(response.data);
  drawList(response.data);
}
getData("");

function drawList(arr) {
  products.innerHTML = "";

  products.innerHTML = `
        <div class="card">
                    
        <img src= ${arr.image} alt="">
        
        <p class="category">${arr.category}</p>
        <p class="price">${arr.price}</p>
        
    </div>
        `;
}

button.addEventListener("click", function () {
  window.history.back();
});
