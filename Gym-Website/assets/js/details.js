let id = new URLSearchParams(window.location.search).get("id");
console.log(id);

let detailsCardContainer = document.querySelector(".top-courses-bottom");

async function getData() {
  let response = await axios.get(`${BASE_URL}/courses/${id}`);
  console.log(response.data);
  createCourseCard(response.data);
}

getData();

function createCourseCard(data) {
  detailsCardContainer.innerHTML = "";

  detailsCardContainer.innerHTML = `
        <div class="top-courses-card">
            <div class="card-img">
                <img src="${data.imgUrl}" alt="">
                <span>${data.status}</span>
            </div>
            <a href="#" class="card-text">
                <h4>${data.title}</h4>
                <span>$${data.price}</span>
                <i class="fa-regular fa-heart"></i>
            </a>       
            <button onclick=goBack()>Go Back</button>
        </div>
          `;
}

function goBack() {
  window.history.back();
}
