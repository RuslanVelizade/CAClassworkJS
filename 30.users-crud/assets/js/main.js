let tBody = document.querySelector("tbody");

const BASE_URL = 'http://localhost:2020';

async function getData(endPoint) {
    
    let response = await axios(`${BASE_URL}/${endPoint}`);
    console.log(response);
    drawTable(response.data)
}
getData("users");

data = JSON.parse(localStorage.getItem("obj")) || [];

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
<<<<<<< HEAD
       let del = delButton.closest("tr");
       del.remove();
       try {
        await axios.delete(`${BASE_URL}/users/${id}`)
        const storedData = JSON.parse(localStorage.getItem("obj")) || [];
            const updatedData = storedData.filter(item => item.id !== id);
            localStorage.setItem("obj", JSON.stringify(updatedData));
       }catch (error) {
        console.error("Error deleting data:", error);
        // If there's an error, you might want to handle it accordingly
    }
=======
        delButton.closest("tr").remove();
        await axios.delete(`${BASE_URL}/${endPoint}/${id}`)
        // for (let i = 0; i < tBody.length; i++) {
        //     localStorage.removeItem("obj", tBody[i]);   
        //     }
        tBody.forEach((item) => localStorage.removeItem("obj", item));
>>>>>>> 96ee952889b769f870f1dc4e72d90b3e5efc00d5
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
        console.log("Error deleting data: ", error);
    }
}

id && getUserData();