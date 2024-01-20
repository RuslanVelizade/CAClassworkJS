let menuContainer = document.querySelector(".menu-bottom");

let menuData = [];

async function getData() {
  let res = await axios.get(`${BASE_URL}/menus`);
  console.log(res.data);
  menuData = res.data;

  let filtered = res.data.filter(
    (item) => item.category.toLocaleLowerCase() === "breakfast"
  );

  console.log(filtered);
  createMenuCard(filtered);
}

getData();

function createMenuCard(data) {
  menuContainer.innerHTML = "";

  data.forEach((element) => {
    menuContainer.innerHTML += `
        <div class="menu-card">
        <h4>${element.name}</h4>
        <p>${element.description} .................<span> $${element.price}</span></p>
    </div>
        `;
  });
}

let filterMenuBtn = document.querySelectorAll(".filterBtn");
let categoryName = null;
filterMenuBtn.forEach((btn) => {
  btn.addEventListener("click", function () {

    filterMenuBtn.forEach((otherBtn) => {
      otherBtn.classList.remove("active");
    });
   
    categoryName = this.innerText;
    let filtered = menuData.filter(
      (item) =>
        item.category.toLocaleLowerCase() === categoryName.toLocaleLowerCase()
    );
    createMenuCard(filtered);

    this.classList.add("active");
    
  });
});
