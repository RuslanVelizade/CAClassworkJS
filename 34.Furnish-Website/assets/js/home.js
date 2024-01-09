

const BASE_URL = "http://localhost:4848";

async function getServicesData(endPoint) {
  let response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawServiceCard(response.data);
}

getServicesData("services");

let servicesCardContainer = document.querySelector("#services");

function drawServiceCard(data) {
  data.forEach((element) => {
    let serviceCard = document.createElement("div");
    serviceCard.className = "service-card";
    let serviceIcon = document.createElement("i");
    serviceIcon.className = "service-icon";
    let serviceTitle = document.createElement("h5");
    serviceTitle.className = "service-title";
    serviceTitle.textContent = `${element.title}`;
    let serviceDes = document.createElement("p");
    serviceDes.className = "service-description";
    serviceDes.textContent = `${element.description}`;

    serviceCard.append(serviceIcon, serviceTitle, serviceDes);
    servicesCardContainer.appendChild(serviceCard);
  });
}
