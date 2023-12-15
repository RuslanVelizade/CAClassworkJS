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

let cardContainer = document.querySelector(".card-cont");

function drawCard(data) {
    cardContainer.innerHTML = "";

    data.forEach((element) => {
        cardContainer.innerHTML += `
   <a class="card" href = "details.html">
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

// let search = document.querySelector("#search");

// let test = search.addEventListener("input", async function (event) {
    
//     let endPoint = `v3.1/name/${nameValue} ||
//     v2/region/${region}
//     `
//     drawCard(endPoint)
// })
// console.log(test);

let select = document.querySelector("#select");

select.addEventListener("change", async function (event) {
      
})

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