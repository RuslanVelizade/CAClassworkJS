const id = new URLSearchParams(window.location.search).get("id");

// Yerel depolama alanından favori elementin nesnesini alıyoruz
var favorite = JSON.parse(localStorage.getItem("favorite"));
// Nesnenin bilgisini bir değişkene atıyoruz
var elementInfo = favorite.info;
// Bir card elementi oluşturuyoruz
var card = document.createElement("div");
card.className = "card";
card.innerHTML = elementInfo;

var deleteButton = document.createElement("button");
deleteButton.className = "delete";
deleteButton.innerHTML = "Delete";
card.appendChild(deleteButton);
// Card elementini sayfaya ekliyoruz
var cardContainer = document.getElementById(".product");
cardContainer.appendChild(card);

deleteButton.addEventListener("click", function() {
  // Card elementinin bilgisini yerel depolama alanından silmek için, nesneyi tekrar stringe çeviriyoruz
  var elementString = JSON.stringify(favorite);
  // Yerel depolama alanından removeItem() metodu ile silme işlemini gerçekleştiriyoruz
  localStorage.removeItem(elementString);
  // Card elementini sayfadan kaldırmak için, removeChild() metodu ile silme işlemini gerçekleştiriyoruz
  cardContainer.removeChild(card);
});

