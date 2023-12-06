const BASE_URL = 'https://fakestoreapi.com/products';

//axios.get(`${BASE_URL}/categories`).then((response)=>console.log(response.data));

async function getData(categoryName) {
    let response = await axios(`${BASE_URL}/${categoryName}`)
     console.log(response.data);
    drawList(response.data)
}
getData("")
let products=document.querySelector("#products")

function drawList(data) {
    products.innerHTML = ""
    data.forEach((element) => {
        products.innerHTML+=`
        <div class="card">
                    
        <img src= ${element.image} alt="">
        <p>${element.description.slice(0, 40)}</p>
        <p class="category">${element.category}</p>
        <p class="price">${element.price}</p>
        <a href="details.html?id=${element.id}">DETAIL</a>
    </div>
        `
    });
}

let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")

let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")

btn1.addEventListener("click",  function() {

  getData("category/electronics")
  btn1.style.backgroundColor = "darkblue"
  btn1.style.color = "white"

});

btn2.addEventListener("click",  function() {

    getData("category/jewelery")
    btn2.style.backgroundColor = "darkblue"
    btn2.style.color = "white"
  });

  btn3.addEventListener("click",  function() {

    getData("category/men's clothing")
    btn3.style.backgroundColor = "darkblue"
    btn3.style.color = "white"
  });

  btn4.addEventListener("click",  function() {

    getData("category/women's clothing")
    btn4.style.backgroundColor = "darkblue"
    btn4.style.color = "white"
  });

// let detail = a.document.querySelector("a");

// detail.addEventListener("click",  function() {

//     getData("category/")
    
//   });

  
  
  
