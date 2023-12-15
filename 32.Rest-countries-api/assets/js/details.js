let detailsCard = document.querySelector(".details-cont");

const BASE_URL = 'https://restcountries.com/';

async function getData(endPoint) {
    try {
        let response = await axios.get(`${BASE_URL}/${endPoint}`)
        console.log(response.data);
        drawCard(response.data)
    } catch (error) {
        console.log("Error tapildi: ", error);
    }
};
getData("v2/all");

function drawCard(data) {
    detailsCard.innerHTML = "";

    data.forEach((element) => {
        detailsCard.innerHTML = `
   <div class="details-card" >
   <img class="details-flag" src="${element.flags.svg}"></img>
   <div class="details-text">
   <div class="card-left">
   <b>Native Name: ${element.altSpellings}</b>
   <b>Population: ${element.population}</b>
   <b>Region: ${element.region}</b>
   <b>Sub Region: ${element.subregion}</b>
   <b>Capital: ${element.capital}</b>
   </div>
   <div class="card-right">
   <b>Top Level Domain: ${element.topLevelDomain}</b>
   <b>Currencies: ${element.currencies[0].name}</b>
   <b>Languages: ${element.languages[0].name}</b>
   
   </div>
   <div class="border-countries">
   Border Countries: 
   </div>
   </div></div>
    `
    });
}















let lightButton = document.querySelector(".theme-button");
let body = document.querySelector("body");

let isDarkMode = localStorage.getItem("dark-mode") === "true";

if (isDarkMode) {
    body.classList.add("dark")
} 
lightButton.addEventListener("click", function (event) {
    event.preventDefault();
    body.classList.toggle("dark");
    localStorage.setItem("dark-mode", body.classList.contains("dark"));
    
});