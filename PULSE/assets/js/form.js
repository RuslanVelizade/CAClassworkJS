let tBody = document.querySelector("tbody");
let editId = null;
async function getData() {
  let res = await axios.get(`${BASE_URL}/menus`);
  console.log(res.data);

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
                <td>${element.description}</td>
                <td>${element.price}</td>
                <td>${element.category}</td>
                <td><button onclick=deleteMenu("${element.id}",this)>Delete</button>
                <button onclick=editMenu("${element.id}")>Edit</button>
                </td>
               
            </tr>
        
        `;
  });
}

async function deleteMenu(id, btn) {
  if (confirm("Ar u sure???")) {
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
        description: allInputs[1].value,
        price: allInputs[2].value,
        category: allInputs[3].value,
      };

      if(editId){
        const res = await axios.patch(`${BASE_URL}/menus/${editId}`, menu);
      }else{
        const res = await axios.post(`${BASE_URL}/menus`, menu);
      }
    } else {
      alert("Fill all of 'em");
    }
  } catch (error) {
    console.log(error);
  }
});
async function editMenu(id) {
  console.log(id);
  editId = id;
  let res = await axios(`${BASE_URL}/menus/${id}`);
  console.log(res.data);
  allInputs[0].value = res.data.name;
  allInputs[1].value = res.data.description;
  allInputs[2].value = res.data.price;
  allInputs[3].value = res.data.category;
}
