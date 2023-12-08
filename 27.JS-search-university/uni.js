let tBody = document.querySelector("tbody");
let loader = document.querySelector(".loader")
let search = document.querySelector("#search");

const loading = document.querySelector(".loading");
const loadingOverlay = document.querySelector("#loading-div");

const BASE_URL = 'http://universities.hipolabs.com/search?country=Azerbaijan';

async function getTableData(endPoint) {
    loadingOverlay.classList.add("start");
    let response = await axios(`${BASE_URL}${endPoint}`);
    console.log(response.data);
    loadingOverlay.classList.remove("start");
    
    createTable(response.data);
    
}

getTableData("");



function createTable(data) {

    tBody.innerHTML = "";
    
    data.forEach(element => {
        const trElement = document.createElement("tr");

        trElement.innerHTML = `
        
                  
                  <td>${element.name}</td>
                  <td>${element.country}</td>
                  <td>${element.domains}</td>
                  <td><a href = "${element.web_pages}">${element.web_pages}</a></td>
                
                
        `;

        tBody.append(trElement);
    });
}

search.addEventListener("input", async function(event) {
      
    let endPoint = `&name=${event.target.value}`
    getTableData(endPoint);

    
});

