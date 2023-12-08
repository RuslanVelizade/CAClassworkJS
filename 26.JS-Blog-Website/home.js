let added = document.querySelector(".added");

const BASE_URL = "http://localhost:9090/blogs";

async function getData(endPoint) {
  let response = await axios(`${BASE_URL}/${endPoint}`);
    console.log(response.data);
    drawJson(response.data)
}

getData("");

function drawJson(data) {
    added.innerHTML = "";
    data.forEach(element => {
        added.innerHTML += `
        <div class="add">
            <p>${element.title}</p>
            <div class = "read">
            <p>${element.body}...</p>
            <a href="details.html?id=${element.id}">Read More</a>
            </div>
            <p>${element.author}</p>
            <button>Delete</button>
            <a href="">Edit</a>
        `
    });
}
