const Mode = document.querySelector(".mode");
const Main = document.querySelector("main");
const header = document.querySelector("header");
const logo = document.querySelector(".left h1");
const ModeText = document.querySelector(".right h4");
const ModeLogo= document.querySelector(".right p");






Mode.addEventListener('click', () => {

    Main.classList.toggle("bgBlack");
    header.classList.toggle("bgBlack");
    header.classList.toggle("borderWhite");
    logo.classList.toggle("whiteText");
    ModeText.classList.toggle("whiteText");
    ModeLogo.classList.toggle("whiteText");


});