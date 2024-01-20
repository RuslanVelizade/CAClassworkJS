


async function getData() {
    let response = await axios.get(`${BASE_URL}/products`)
    console.log(response.data);
    createProductCard(response.data)
}
getData();

let productContainer = document.querySelector(".products-bottom");

function createProductCard(data) {
    productContainer.innerHTML = ""

    data.forEach((element) => {
        productContainer.innerHTML += `
        <div class="product-card">
                <div class="card-img">
                    <img src="${element.imgUrl}" alt="">
                </div>
                <h4>${element.title}</h4>
                <div class="count-div">
                    <span><i class="fa-solid fa-star"></i>${element.point}</span>
                    <span><i class="fa-solid fa-heart"></i>${element.favCount}</span>
                </div>
                <p>${element.description}</p>
                <div class="buttons-div">
                    <a href="#">CART</a>
                    <a href="#">VIEW</a>
                </div>
               </div>
        `

    });
}

// const id = new URLSearchParams(window.location.search).get("id");
