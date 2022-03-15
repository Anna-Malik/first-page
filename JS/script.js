console.log("HELLO WORLD!")

let button = document.querySelector(".js-button");
let body = document.querySelector(".container");
let themeName = document.querySelector(".button__themeName");
let article = document.querySelector(".article")

button.addEventListener("click", () => {
    body.classList.toggle("container--dark");

    body.classList.contains("container--dark") ? themeName.innerText = "podstawowa" : themeName.innerText = "kontrastowa";

})
