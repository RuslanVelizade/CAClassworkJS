let search = document.querySelector("#search");
let meanings = document.querySelector(".meanings");
let form = document.querySelector("form");

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

async function getData(word) {
  let response = await axios.get(`${BASE_URL}/${word}`);
  console.log(response.data);
  createDictionary(response.data[0]);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  getData(search.value);
});

function createDictionary(data) {
  meanings.innerHTML = "";

  meanings.innerHTML = `
        
        <div class= "audio-div">
        <span>${data.word}</span>
        <i class="fa-solid fa-volume-low" onclick="playAudio(this)">
        <audio src="${data.phonetics[0].audio}">
        </audio></i>
        </div>
        <div class="definition">
        <p>Definition (${data.meanings[0].partOfSpeech})</p>
        <p>${data.meanings[0].definitions[0].definition.slice(0, 40)}...</p>
        <div>
        
        </div>
        </div>
        
        
        `;
  console.log(data.phonetics[0].audio);
}

function playAudio(icon) {
  console.log(icon);
//   icon.querySelector("audio").play();
//   icon.className = "fa-solid fa-volume-high";
}
