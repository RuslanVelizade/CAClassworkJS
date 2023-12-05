let product = document.querySelector(".products-div");
let form = document.querySelector("form");
let allInputs = document.querySelector(".input");

let BASE_URL = `https://northwind.vercel.app/api/suppliers`;

fetch(`${BASE_URL}/suppliers`)
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
                    <div><button class="deleteBtn" onclick=deleteProduct("${element.id}",this)>Delete</button></div>
                </div>
            </div>
            `
        });
}
    
function deleteProduct(id) {
    fetch(`${BASE_URL}/suppliers/${id}`, {
    method: "DELETE",
    }).then(() => {
        fetch(`${BASE_URL}/suppliers`)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            drawCards(data);
        }).catch((err) => console.log(err));
})
};

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let object = {
        title: allInputs.querySelector('input[name="title"]').value,
        description: allInputs.querySelector('input[name="description"]').value,
        price: allInputs.querySelector('input[name="price"]').value,
        category: {
            name: allInputs.querySelector('input[name="category"]').value
        }
    }

    fetch(`${BASE_URL}/suppliers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    }
).then(() => {
    fetch(`${BASE_URL}/suppliers`)
      .then((response) => response.json())
      .then((data) => {
        drawCards(data);
      })
      .catch((err) => console.log(err));
      
  });
   
  allInputs.forEach((item) => (item.value = ""))
});