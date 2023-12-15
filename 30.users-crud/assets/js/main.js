let tBody = document.querySelector("tbody");

const id = new URLSearchParams(window.location.search).get("id");

const BASE_URL = "http://localhost:2020";

async function getData(endPoint) {
  let response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response);
  drawTable(response.data);
}
getData("users")

data = JSON.parse(localStorage.getItem("obj")) || [];

function drawTable(data) {
  tBody.innerHTML = "";

  data.forEach((element) => {
    let trItem = document.createElement("tr");

    trItem.innerHTML = `
        
                <td>${element.id}</td>
                <td><img class= "userphoto" src="${element.userphoto}" alt=""></td>
                <td>${element.name}</td>
                <td>${element.surname}</td>
                <td>${element.email}</td>
                <td>${element.date}</td>
                <td>
                
                <a href="form.html?id=${element.id}" class= "edit">Edit</a>
                <button class="delete" onclick= deleteUserData(${element.id},this)>Delete</button>
                <button class="fav-button" >Add Fav</button>
                
                </td>
        `;
    tBody.append(trItem);
  });
}

drawTable();
let delButton = document.querySelector(".delete");
async function deleteUserData(id, delButton) {
  if (confirm("Are you sure to remove it?")) {
    let del = delButton.closest("tr");
    del.remove();
    try {
      await axios.delete(`${BASE_URL}/users/${id}`);
      const storedData = JSON.parse(localStorage.getItem("obj")) || [];
      const updatedData = storedData.filter((item) => item.id !== id);
      localStorage.setItem("obj", JSON.stringify(updatedData));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
    // delButton.closest("tr").remove();
    // await axios.delete(`${BASE_URL}/${endPoint}/${id}`)

    // tBody.forEach((item) => localStorage.removeItem("obj", item));
  }
}

let allInputs = document.querySelectorAll(".form-control");

async function getUserData() {
  try {
    let response = await axios(`${BASE_URL}/users/${id}`);
    console.log(response.data);
    allInputs[0].value = response.data.name;
    allInputs[1].value = response.data.surname;
    allInputs[2].value = response.data.email;
    allInputs[3].src = response.data.userphoto
  } catch (error) {
    console.log("Error deleting data: ", error);
  }
}

id && getUserData();

getData("users");







  let fav = document.querySelector(".fav-button");
  fav.addEventListener("click", (event)=> {
    var elementInfo = $(event.target).parents()[1].firstElementChild.innerHTML;
  // Bilgileri bir nesne olarak saklıyoruz
  var elementObj = {info: elementInfo};
  // Nesneyi yerel depolama alanına gönderiyoruz
  localStorage.setItem("favorite", JSON.stringify(elementObj));
  });
  
 

