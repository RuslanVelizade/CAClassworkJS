const id = new URLSearchParams(window.location.search).get("id");

let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");

async function getCourseData() {
  try {
    let response = await axios.get(`${BASE_URL}/courses/${id}`);
    allInputs[0].value = response.data.title;
    allInputs[1].value = response.data.status;
    allInputs[2].value = response.data.price;
    allInputs[3].value = response.data.imgUrl;
  } catch (error) {
    console.log(error);
  }
}

id && getCourseData();

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    try {
        if (allInputs[0].value.trim() &&
        allInputs[1].value.trim() &&
        allInputs[2].value.trim() &&
        allInputs[3].value.trim() 
        ) {
           
            let course  = {
                title: allInputs[0].value,
                status: allInputs[1].value,
                price: allInputs[2].value,
                imgUrl: allInputs[3].value
            };

            const response = await axios.post(`${BASE_URL}/courses`, course);
            window.location = "home.html"
        } else {
            alert("Fill all of 'em!")
        }
    } catch (error) {
        
    }
})



// async function patchCourse(id, updatedData) {
//   try {
//     const response = await axios.patch(`${BASE_URL}/courses/${id}`, updatedData);
//     console.log("Course updated successfully:", response.data);
//   } catch (error) {
//     console.error("Error updating course:", error);
//   }
// }


// form.addEventListener("submit", async function (event) {
//   event.preventDefault();
//   try {
//     if (
//       allInputs[0].value.trim() &&
//       allInputs[1].value.trim() &&
//       allInputs[2].value.trim() &&
//       allInputs[3].value.trim()
//     ) {
//       let updatedCourse = {
//         title: allInputs[0].value,
//         status: allInputs[1].value,
//         price: allInputs[2].value,
//         imgUrl: allInputs[3].value,
//       };

//       // Kurs güncelleme fonksiyonunu çağır
//       await patchCourse(id, updatedCourse);

//       // Yönlendirme
//       window.location = "home.html";
//     } else {
//       alert("Tüm alanları doldurun!");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });
