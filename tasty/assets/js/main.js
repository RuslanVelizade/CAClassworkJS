let menuContainer = document.querySelector(".menu-bottom");
let menuData = [];

async function getData() {
  let res = await axios(`${BASE_URL}/menus`);
  console.log(res.data);
  menuData = res.data;

 
  createMenu(res.data);
}
getData();

function createMenu(data) {
  menuContainer.innerHTML = "";

  data.forEach((element) => {
    menuContainer.innerHTML += `
        <div class="menu-card">
                        <img src="${element.imgUrl}" alt="">
                        <div class="text-div">
                            <h4>${element.name}</h4>
                            <span>${element.ingredients}</span>
                        </div>
                        <p class="price">$${element.price}</p>
                    </div>
        `;
  });
}

let menuIcon = document.querySelector(".fa-img");
let nav = document.querySelector("nav");

console.log(menuIcon);
menuIcon.addEventListener("click", function (event) {
  // console.log(this);
  if (this.src === "http://127.0.0.1:5501/tasty/assets/images/fa-bars.png") {
    this.src = "./assets/images/fa-x.png";
    nav.classList.add("res-nav");
  } else {
    this.src = "./assets/images/fa-bars.png";
    nav.classList.remove("res-nav");
  }
});
