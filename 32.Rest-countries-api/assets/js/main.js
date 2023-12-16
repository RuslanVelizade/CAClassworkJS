


const BASE_URL = 'https://restcountries.com';

let countriesData = [];

async function getData(endPoint) {
    try {
        let response = await axios.get(`${BASE_URL}/${endPoint}`)
        countriesData = response.data;
        console.log(countriesData);
        drawCard(response.data)
    } catch (error) {
        console.log("Error tapildi: ", error);
    }
};
getData("v2/all");

let cardContainer = document.querySelector(".card-cont");

function drawCard(countriesData) {
    cardContainer.innerHTML = "";

    countriesData.forEach((element) => {
        cardContainer.innerHTML += `
   <a class="card" href = "details.html?v3.1/name=${element.name}">
   <img class="flag" src="${element.flags.svg}"></img>
   <div class="text">
   <h5>${element.name}</h5>
   <span>Population: ${element.population}</span>
   <span>Region: ${element.region}</span>
   <span>Capital: ${element.capital}</span>
   </div></a>
    `
    });
}

 let search = document.querySelector("#search");



let select = document.querySelector("#select");



let lightButton = document.querySelector(".theme-button");
let body = document.querySelector("body");

let isDarkMode = localStorage.getItem("dark-mode") === "true";

if (isDarkMode) {
    body.classList.add("dark");
};
lightButton.addEventListener("click", function (event) {
    event.preventDefault();
    body.classList.toggle("dark");
    localStorage.setItem("dark-mode", body.classList.contains("dark"));
    
});


if (search) {
    search.addEventListener("input", function (event) {
        event.preventDefault();
        let searchText = event.target.value.toLowerCase();
        let filteredData = countriesData.filter((country) =>
            country.name.toLowerCase().includes(searchText)
        );
        drawCard(filteredData);
    });
}


if (select) {
    select.addEventListener("change", function (event) {
        let selectedRegion = event.target.value;
        if (selectedRegion === "All") {
            drawCard(countriesData);
        } else {
            let filteredData = countriesData.filter(
                (country) => country.region === selectedRegion
            );
            drawCard(filteredData);
        }
    });
}


