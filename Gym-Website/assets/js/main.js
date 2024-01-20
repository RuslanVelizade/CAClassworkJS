let cardContainer = document.querySelector(".top-courses-bottom");


// const favoritedCards = getDataFromLocalStorage();
async function getData() {
  let response = await axios.get(`${BASE_URL}/courses`);
  console.log(response.data);
  createCourseCard(response.data);
}

getData();

function createCourseCard(data) {
  cardContainer.innerHTML = "";

  data.forEach((element) => {
    cardContainer.innerHTML += `
        <div class="top-courses-card">
        <div class="card-img">
            <img src="${element.imgUrl}" alt="">
            <span>${element.status}</span>
        </div>
        <a href="#" class="card-text">
            <h4>${element.title}</h4>
            <span>$${element.price}</span>
            
            <a href="details.html?id=${element.id}">Details</a>
            
            </a>   
            <i class="fa-regular fa-heart" onclick=""></i>    
            <button class="delBtn" onclick="deleteCard(${element.id},this)">Delete</button>
            // <button class="editBtn" onclick="editCourse(${element.id})">Edit</button>
         </div>
        `;
        

  });
}


// function editCourse(id) {
//   // Assuming you have a form.html with a form and each input has a corresponding id
//   window.location.href = `form.html?id=${id}`;
// }



async function deleteCard(id, btn) {
  if (confirm("Are you sure?")) {
    btn.closest(".top-courses-card").remove();
    await axios.delete(`${BASE_URL}/courses/${id}`);
  }
}

let search = document.querySelector("#search");

search.addEventListener("input", async function (event) {
  let response = await axios.get(`${BASE_URL}/courses`);
  let filtered = response.data.filter((item) =>
    item.title
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  if (event.target.value === "") {
    createCourseCard(response.data);
  } else {
    createCourseCard(filtered);
  }
});

const id = new URLSearchParams(window.location.search).get("id");

let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");

async function getCourseData() {
  try {
    let response = await axios.get(`${BASE_URL}/courses/${id}`);
    allInputs[0] = response.data.title;
    allInputs[1] = response.data.status;
    allInputs[2] = response.data.price;
    allInputs[3] = response.data.imgUrl;
  } catch (error) {
    console.log(error);
  }
}

id && getCourseData();



// function setDataToLocalStorage(card) {
//   localStorage.setItem("favs", JSON.stringify(card))
// }


// function getDataFromLocalStorage() {
//   return JSON.parse(localStorage.getItem("favs")) ?? [];
// }






