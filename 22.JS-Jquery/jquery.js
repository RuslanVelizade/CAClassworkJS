let array = JSON.parse(localStorage.getItem("div")) || [];
let div = document.querySelector(".box");

// function drawFilms(arr) {
//     $(".box").html("");
//     let pElem = doc
// }

$("button").on("click", function () {
    let p = document.createElement("p");
    p.textContent = element;
  $(".box").append(p);
  let toAdd = $("input").val();
  $("p").append(toAdd);
  // arr.append(toAdd);
  array.push(toAdd);
  localStorage.setItem("div", JSON.stringify(array));
  $("p").css({
    backgroundColor: "blue",
    color: "white",
    padding: "5px 10px",
    width: "5%",
    cursor: "pointer",
  });

  p.addEventListener("click", function () {
    this.remove();
    array = array.filter((item) => item != element);
    localStorage.setItem("div", JSON.stringify(array));
  });

  $("input").val("");
});
