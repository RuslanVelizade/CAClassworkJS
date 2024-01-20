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

async function getRecentData(endPoint) {
  let response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);

  drawRecentCard(response.data);
}
getRecentData("recent");
let recent = document.querySelector(".recent-bottom");

function drawRecentCard(data) {
  data.forEach((element) => {
    
    let recentCard = document.createElement("div");
    recentCard.className = "recent-card";
    let recentCardImage = document.createElement("img");
    recentCardImage.className = "recent-card-img";
    recentCardImage.src = `${element.imgUrl}`;
    let recentCardText = document.createElement("div");
    recentCardText.className = "recent-card-text";
    let recentText = document.createElement("div");
    recentText.className = "recent-text";
    let recentIcon1 = document.createElement("i");
    recentIcon1.className = "fa-solid fa-user";
    let recentIcon2 = document.createElement("i");
    recentIcon2.className = "fa-regular fa-calendar-days";
    let recentIcon3 = document.createElement("i");
    recentIcon3.className = "fa-solid fa-comment";
    let span1 = document.createElement("span");
    span1.className = "recent-source";
    span1.textContent = `${element.source}`;
    let span2 = document.createElement("span");
    span2.className = "recent-date";
    span2.textContent = `${element.date}`;
    let span3 = document.createElement("span");
    span3.className = "recent-comment";
    span3.textContent = `${element.commentCount} COMMENT`;
    let recentTitle = document.createElement("h5");
    recentTitle.className = "recent-title";
    recentTitle.textContent = `${element.title}`;
    let recentDescription = document.createElement("p");
    recentDescription.className = "recent-des";
    recentDescription.textContent = `${element.description}`;

    span1.appendChild(recentIcon1);
    span2.appendChild(recentIcon2);
    span3.appendChild(recentIcon3);
    recentText.append(span1, span2, span3);
    recentCardText.append(recentText, recentTitle, recentDescription);
    recentCard.append(recentCardImage, recentCardText);
   
    recent.appendChild(recentCard);
  });
}
