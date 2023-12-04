let product = document.querySelector(".product");
let form = document.querySelector("form");
let allInputs = document.querySelector("input");

let BASE_URL = `https://api.escuelajs.co/api`;

fetch(`${BASE_URL}/v1/products`)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data);
        drawCards(data);
    }).catch((err) => console.log(err));

    function drawCards(array) {
        product.innerHTML = "";
        array.forEach(element => {
            product.innerHTML += `
            <div class="product">
                <div class="product-image">
                    <img src="${element.images[0]}" alt="">
                </div>
                <div class="product-heading">
                    <p class="title">title: ${element.title}</p>
                    <p class="description">description: ${element.description}</p>
                    <span>Price:${element.price}</span>
                    <div><button class="deleteBtn" onclick=deleteProduct("${element.id}">Delete</button></div>
                </div>
            </div>
            `
        });
}
    
function deleteProduct(id) {
    fetch(`${BASE_URL}/v1/products/${id}`, {
    method: "DELETE",
    }).then(() => {
        fetch(`${BASE_URL}/v1/products`)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            drawCards(data);
        }).catch((err) => console.log(err));
})
}