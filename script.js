"use strict";

const greenBtn = document.querySelector(".green");
const blueBtn = document.querySelector(".blue");
const redBtn = document.querySelector(".red");
const randomBtn = document.querySelector(".random");

function revertBackgColour() {
  setTimeout(() => {
    document.body.style.backgroundColor = "bisque";
  }, 2000);
}

greenBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
  revertBackgColour();
});

blueBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightblue";
  revertBackgColour();
});

redBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
  revertBackgColour();
});

randomBtn.addEventListener("click", () => {
  randomColor();
});

//generate random colour
function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const color = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = color;
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
