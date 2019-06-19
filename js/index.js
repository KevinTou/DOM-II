// Your code goes here
const headerImage = document.querySelector(".intro img");
const button = document.querySelectorAll(".btn");
const nav = document.querySelector("nav");
const imgs = document.querySelectorAll("img");
const title = document.querySelector("h1");
const header = document.querySelector(".nav-container");
const paragraph = document.querySelectorAll("p");
const secret = document.querySelector("footer p");
const subTitle = document.querySelectorAll("h2");
const subHeader = document.querySelectorAll("h4");

window.addEventListener("scroll", event => {
  subTitle.forEach(h2 => {
    let colors = ["Red", "Green", "Blue", "Pink", "Black"];
    h2.style.color = colors[Math.round(Math.random() * 5)];
  });
});

// Images
imgs.forEach(img => {
  img.addEventListener("drag", event => {
    let size = Math.random() * 100;
    img.style.width = `${size}px`;
  });

  img.addEventListener("dragend", event => {
    img.style.width = `100%`;
  });
});

// SubHeader
subHeader.forEach(subHead => {
  subHead.addEventListener("wheel", event => {
    subHead.style.fontFamily = "Lato";
  });
});

// Paragraph
paragraph.forEach(p => {
  p.addEventListener("mousedown", event => {
    p.style.fontSize = "4rem";
  });

  p.addEventListener("mouseup", event => {
    p.style.fontSize = "1.6rem";
  });
});

// Header
title.addEventListener("click", event => {
  title.style.backgroundColor = "brown";
  event.stopPropagation();
});

header.addEventListener("click", event => {
  header.style.backgroundColor = "grey";
});

// Nav
nav.addEventListener("click", event => {
  event.preventDefault();
});

// Header Image
headerImage.addEventListener("mouseover", event => {
  headerImage.style.opacity = "0";
});

headerImage.addEventListener("mouseout", event => {
  headerImage.style.opacity = "1";
});

// Buttons
button[0].addEventListener("click", event => {
  alert("You clicked me!");
});

button[1].addEventListener("click", event => {
  document.querySelector("body").style.backgroundColor = "black";
});

button[2].addEventListener("click", event => {
  document.querySelector("body").style.backgroundColor = "white";
});

// SECRET EVENT - DON'T TOGGLE
secret.addEventListener("dblclick", mayhem);

const getAll = document.getElementsByTagName("*");

function mayhem() {
  // console.log(getAll);
  setInterval(removeItem, 300);
}

function removeItem() {
  let random = Math.floor(Math.random() * (getAll.length - 8 + 1)) + 8;
  getAll[random].style.display = "none";
}
