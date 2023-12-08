const id = new URLSearchParams(window.location.search).get("id");
let form = document.querySelector("form")
const allInputs = document.querySelector(".blog-input");
const BASE_URL = "http://localhost:9090/blogs";

let select = document.querySelector("#select")

async function getNewBlog() {
  try {
    let response = await axios(`${BASE_URL}/${id}`);

    console.log(response.data);

    allInputs[0].value = response.data.title;
    allInputs[1].value = response.data.body;
    select.value = response.data.author;
  } catch (error) {
    console.log(error);
  }
}

id && getNewBlog();

let newBlog = document.querySelector(".new-blog");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const blog = {
    title: allInputs[0].value,
    body: allInputs[1].value,
    author: select.value
  };

  if (allInputs[0] && allInputs[1]) {
    if (!id) {
      addBlog(blog);
    } else {
      updateBlog(blog);
    }
  } else {
    alert("Butun saheleri doldurun");
  }

  allInputs.forEach((element) => (element.value = ""));
});

async function addBlog(obj) {
   await axios.post(`${BASE_URL}`, obj)
   window.location = "home.html"
}

async function updateBlog(obj) {
    await axios.patch(`${BASE_URL}/${id}`, obj)
    window.location = "home.html"
 }