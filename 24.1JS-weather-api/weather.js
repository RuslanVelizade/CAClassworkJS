const form = document.querySelector("form");
const input = document.querySelector("input");
const overCastDiv = document.querySelector(".overcast");


function getWeather(curCity) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`)
        .then((response) => response.json())
          .then((data) =>
        //console.log(data) 
        {
            overCastDiv.innerHTML = `
            <div>
                <p>${data.location.name}, ${data.location.country}</p>
                <img src="${data.current.condition.icon}" alt="">
                <p>${data.current.condition.text}</p>
                <p>Selsie: ${data.current.temp_c}</p>
                <p>Farenheigth: ${data.current.temp_f}</p>
                <p></p>
            </div>
            `
        }
           )   
    .catch((err)=>console.log(err))
}
getWeather();

form.addEventListener("submit", function(e) {
    e.preventDefault();
    getWeather(input.value);
})
