let formSection = document.querySelector("#form-section");

const id = new URLSearchParams(window.location.search).get("id");

let form = document.querySelector("form");
let inputFirst = document.querySelector("#firstName");
let inputLast = document.querySelector("#lastName");
let inputEmail = document.querySelector("#email");
let inputPhoto = document.querySelector("#inputGroupFile04");

let allInputs = document.querySelectorAll(".form-control");

const BASE_URL = "http://localhost:2020";

async function getData(users) {
  let response = await axios(`${BASE_URL}/${users}`);
  console.log(response);
}
getData("users");

data = JSON.parse(localStorage.getItem("obj")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let dateValue = new Date();




        let bool = data.some(
          (item) =>
              item.firstName === inputFirst.value || item.email === inputEmail.value
      );
      if (!bool) {
        let object = {
          firstName: inputFirst.value,
          lastName: inputLast.value,
          email: inputEmail.value,
          date: dateValue.toLocaleString(),
          userphoto: `./assets/img/${allInputs[3].value.split("\\")[2]}`
        };
         
          data.push(object);
        localStorage.setItem("obj", JSON.stringify(data));
        
        if (
          allInputs[0].value &&
          allInputs[1].value &&
          allInputs[2].value &&
          `./assets/img/${allInputs[3].value.split("\\")[2]}`
          ) {
          if (!id) {
            addBlog(object);
          } else {
            updateBlog(object);
          }
        } else {
          alert("You must fill in all fields.");
        }
      
        allInputs.forEach((item) => (item.value = " "));
          
      } else {
        // Eğer bool true ise (yani aynı isim veya email'e sahip başka bir kullanıcı varsa) kullanıcıya bir uyarı verilebilir.
        alert("A user with the same name or email already exists.");
      }
      
        
  
  
});

async function addBlog(obj) {
  try {
    await axios.post(`${BASE_URL}/users`, obj);
  window.location = "index.html";
  } catch (error) {
    console.log(error);
  }
}
async function updateBlog(obj) {
  try {
    await axios.patch(`${BASE_URL}/users/${id}`, obj);
  window.location = "index.html";
  } catch (error) {
    console.log(error);
  }
}

  


// if (id) {
//   axios(`${BASE_URL}/users/${id}`).then((response) => {
//     console.log(response.data);
//     allInputs[0].value = response.data.name;
//     allInputs[1].value = response.data.surname;
//     allInputs[2].value = response.data.email;
//   });
// }

async function getUserData() {
    try {
        let response = await axios(`${BASE_URL}/users/${id}`);
        console.log(response.data);
        allInputs[0].value = response.data.name;
        allInputs[1].value = response.data.surname;
        allInputs[2].value = response.data.email;
        
    } catch (error) {
        console.log(error);
    }
}

id && getUserData();




