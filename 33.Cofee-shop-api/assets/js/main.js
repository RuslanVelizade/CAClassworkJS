const BASE_URL = 'http://localhost:5555';

let tBody = document.querySelector("tbody");

async function getData(endPoint) {
    let response = await axios(`${BASE_URL}/${endPoint}`)
    console.log(response.data);
    createTable(response.data)
}

getData("coffe_products");

function createTable(data) {
    tBody.innerHTML = "";

    data.forEach((element) => {
        let trItem = document.createElement("tr");
        tBody.appendChild(trItem);
        tBody.innerHTML += `
        <tr>
                <td>${element.id}</td>
                <td><img class="coffee-img" src="${element.image}"></img></td>
                <td>${element.name}</td>
                <td>${element.description}</td>
                <td>${element.price}</td>
                <td>${element.rating}</td>
                <td onclick="deleteCoffee()" class="icon-td"><i class="fa-solid fa-trash"></i><i class="fa-solid fa-pencil"></i></td>
              </tr>
        `
    });
}

function deleteCoffee(params) {
    
}