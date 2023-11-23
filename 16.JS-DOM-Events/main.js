let ul = document.querySelector("#list");
let btn = document.querySelector("button");
let input = document.querySelector("input");
let span = document.querySelector("span");

// let div = document.createElement("div");
// div.appendChild(ul);


btn.addEventListener("click", function () {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  let span = document.createElement("span");

  span.innerText = input.value;
  li.appendChild(span);
  li.appendChild(btn);    
  btn.innerText = "Delete";
  ul.appendChild(li);

  btn.addEventListener("click", function () {
    this.parentElement.remove();
  });

  input.value = "";
});
