let tBody = document.querySelector("tbody");

let productData = [];

async function getData() {
  let response = await axios.get(`${BASE_URL}/products`);
  console.log(response.data);
  productData = response.data;
  createTable(response.data);
}
getData();

function createTable(data) {
  tBody.innerHTML = "";

  data.forEach((element) => {
    tBody.innerHTML += `
        <tr>
                <td>${element.id}</td>
                <td><img src="${element.imgUrl}"></img></td>
                <td>${element.title}</td>
                <td>${element.description}</td>
                <td><i class="fa-solid fa-trash" onclick = deleteProduct(${element.id},this)></i></td>
            </tr>
        `;
  });
}

async function deleteProduct(id, icon) {
  if (confirm("SURE???")) {
    icon.closest("tr").remove();
    await axios.delete(`${BASE_URL}/products/${id}`);
  }
}

let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  try {
    if (
      allInputs[0].value.trim() &&
      allInputs[1].value.trim() &&
      allInputs[2].value.trim() &&
      allInputs[3].value.trim()
    ) {
      let product = {
        title: allInputs[0].value,
        description: allInputs[1].value,

        imgUrl: allInputs[2].value,
      };

      const response = await axios.post(`${BASE_URL}/products`, product);
    } else {
      alert("Fill all of 'em!");
    }
  } catch (error) {
    console.log(error);
  }
});

let search = document.querySelector("#search");

search.addEventListener("input", function (event) {
  let filtered = productData.filter((item) =>
    item.title
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );

  if (event.target.value === "") {
    createTable(productData);
  } else {
    createTable(filtered);
  }
});

document.getElementById("sortBtn").addEventListener("click", function () {
  productData.sort((a, b) => a.title.localeCompare(b.title));

  createTable(productData)
});

document.getElementById("sortZABtn").addEventListener("click", function () {
   
    productData.sort((a, b) => b.title.localeCompare(a.title));
    

    createTable(productData);
  });
