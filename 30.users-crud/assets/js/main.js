let tBody = document.querySelector("tbody");

const BASE_URL = 'http://localhost:2020';

async function getData(endPoint) {
    
    let response = await axios(`${BASE_URL}/${endPoint}`);
    console.log(response);
    drawTable(response.data)
}
getData("users");

function drawTable(data) {
    tBody.innerHTML = "";

    data.forEach(element => {
        let trItem = document.createElement("tr");

        trItem.innerHTML = `
        
                <td>${element.id}</td>
                <td><img class= "userphoto" src="${element.userphoto}" alt=""></td>
                <td>${element.name}</td>
                <td>${element.surname}</td>
                <td>${element.email}</td>
                <td>${element.date}</td>
                <td>
                
                <a href="form.html?id=${element.id}" class= "edit">Edit</a>
                <button class="delete" onclick= deleteUserData(${element.id},this)>Delete</button>
                <button class="fav-button">Add Fav</button>
                
                </td>
        `;
        tBody.append(trItem);
    });
}

drawTable();
 let delButton = document.querySelector(".delete")
async function deleteUserData(id, delButton) {
    if (confirm("Are you sure to remove it?")) {
        delButton.closest("tr").remove();
        await axios.delete(`${BASE_URL}/${endPoint}/${id}`)
        localStorage.removeItem("obj")
    }
}



let allInputs = document.querySelectoraAll(".form-control");

async function getUserData() {
    try {
        let response = await axios(`${BASE_URL}/users/${id}`);
        console.log(response.data);
        allInputs[0].value = response.data.name;
        allInputs[1].value = response.data.surname;
        allInputs[2].value = response.data.email;
        allInputs[3].value = response.data.photo;
    } catch (error) {
        console.log(error);
    }
}

id && getUserData();