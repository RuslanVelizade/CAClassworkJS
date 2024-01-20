let tBody = document.querySelector("tbody");
let editId = null;
async function getData() {
  let res = await axios(`${BASE_URL}/menus`);
  console.log(res.data);
  menuData = res.data;

  createTable(res.data);
}
getData();

function createTable(data) {
  tBody.innerHTML = "";

  data.forEach((element) => {
    tBody.innerHTML += `
        <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.ingredients}</td>
                <td>${element.price}</td>
                <td>${element.imgUrl}</td>
                <td><button onclick= deleteMenu("${element.id}",this)>DELETE</button>
                <button onclick= editMenu("${element.id}")>EDIT</button>
                </td>
            </tr>
        `;
  });
}

async function deleteMenu(id, btn) {
  if (confirm("SURE??")) {
    btn.closest("tr").remove();
    await axios.delete(`${BASE_URL}/menus/${id}`);
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
      let menu = {
        name: allInputs[0].value,
        ingredients: allInputs[1].value,
        price: allInputs[2].value,
        imgUrl: allInputs[3].value
      };

      if (editId) {
        const res = await axios.patch(`${BASE_URL}/menus/${editId}`, menu);
      } else {
        const res = await axios.post(`${BASE_URL}/menus`, menu);
      }
    } else {
      alert("Fill all input field!!");
    }
  } catch (error) {
    console.log(error);
  }
});

async function editMenu(id) {
  // console.log(id);
  editId = id;
  let res = await axios(`${BASE_URL}/menus/${id}`);
  allInputs[0].value = res.data.name;
  allInputs[1].value = res.data.ingredients;
  allInputs[2].value = res.data.price;
  allInputs[3].value = res.data.imgUrl;
}

let searchInput = document.querySelector("#search");

searchInput.addEventListener("input", async function (event) {
  let res = await axios.get(`${BASE_URL}/menus`);
  let filtered = res.data.filter((item) =>
    item.name
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  if (event.target.value==="") {
    createTable(res.data)
  } else {
    createTable(filtered)
  }
});
