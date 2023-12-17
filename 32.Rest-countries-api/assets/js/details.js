const country = new URLSearchParams(window.location.search).get("name");
console.log(country);

let detailsCard = document.querySelector(".details-cont");

const BASE_URL = 'https://restcountries.com';

async function getData(endPoint) {
    try {
        let response = await axios.get(`${BASE_URL}/${endPoint}`)
        console.log(response.data);
        drawCard(response.data)
    } catch (error) {
        console.log("Error: ", error);
    }
};

if (country) {
    getData(`v2/name/${country}`);
  }

function drawCard(data) {
    
    detailsCard.innerHTML = "";
    

   let con =  data.forEach((element) => {

        detailsCard.innerHTML += `
        <div class="details-card" >
        <img class="details-flag" src="${element.flags.svg}"></img>
        <div class="details-text">
        <div class="card-left">
        <span>Native Name: ${element.nativeName}</span>
        <span>Population: ${element.population}</span>
        <span>Region: ${element.region}</span>
        <span>Sub Region: ${element.subregion}</span>
        <span>Capital: ${element.capital}</span>
        </div>
        <div class="card-right">
        <span>Top Level Domain: ${element.topLevelDomain}</span>
        <span>Currencies: ${element.currencies[0].name}</span>
        <span>Languages: ${element.languages[0].name}</span>
        
        </div>
        <div class="border-countries">
         Border Countries:  ${element.borders.map(border => `<button onclick="borderDetails('${border}')">${border}</button>`).join(' ')}
        </div>
        </div></div>
         `
    });
       console.log(con);

}


async function getCountryDetails(countryCode) {
    try {
        let response = await axios.get(`${BASE_URL}/v2/alpha/${countryCode}`);
        console.log(`Details for border country ${countryCode}:`, response.data);
        drawBorderCountryDetails(response.data);

    } catch (error) {
        console.error("Error fetching country details:", error);
    }
}

function drawBorderCountryDetails(element) {
    


        detailsCard.innerHTML = `
        <div class="details-card" >
        <img class="details-flag" src="${element.flags.svg}"></img>
        <div class="details-text">
        <div class="card-left">
        <span>Native Name: ${element.nativeName}</span>
        <span>Population: ${element.population}</span>
        <span>Region: ${element.region}</span>
        <span>Sub Region: ${element.subregion}</span>
        <span>Capital: ${element.capital}</span>
        </div>
        <div class="card-right">
        <span>Top Level Domain: ${element.topLevelDomain}</span>
        <span>Currencies: ${element.currencies[0].name}</span>
        <span>Languages: ${element.languages[0].name}</span>
        
        </div>
        <div class="border-countries">
         Border Countries:  ${element.borders.map(border => `<button onclick="borderDetails('${border}')">${border}</button>`).join(' ')}
        </div>
        </div></div>
         `
    

}

 function borderDetails(border) {
   
     getCountryDetails(border);
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