"use strict";
const body = document.getElementsByTagName("body")[0];

function revertBackgColour() {
  setTimeout(() => {
    body.style.backgroundColor = "bisque";
  }, 2000);
}

function addBackgroundColour(colorName) {
  body.style.backgroundColor = colorName;
}

//generate random colour
function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const color = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;
}

//cookie message
const cookies = document.createElement("div");
cookies.classList.add("cookie-msg");
cookies.innerHTML =
  'We use cookies to improve our website.<button class= "btn btn--close-cookie">Got it!</button>';
//get header, in this case container
const container = document.querySelector(".container");
container.prepend(cookies);
//close btn
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  cookies.remove();
});
