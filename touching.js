const hamburger = document.querySelector("#hamburger-menu");
const menu = document.querySelector(".options");
const links = document.querySelector(".links");
const headerHamburger = document.querySelector(".header-hamburger-menu");
const closing = document.querySelector("#closing");

hamburger.addEventListener("click", hamburgerToggle);
closing.addEventListener("click", hamburgerToggleOff);

document.addEventListener("click", (evt) => {
    if(evt.target.alt !== "menu") {
        hamburgerToggleOff();
    }
});

function hamburgerToggle() {
    menu.classList.toggle("options");
    menu.classList.toggle("options-on");
    links.classList.toggle("links-on");
    headerHamburger.classList.toggle("header-hamburger-menu-on");
}

function hamburgerToggleOff() {
    menu.classList.add("options");
    menu.classList.remove("options-on");
    links.classList.remove("links-on");
    headerHamburger.classList.remove("header-hamburger-menu-on");
}

const setaDireita = document.querySelectorAll(".seta-direita");
const setaEsquerda = document.querySelectorAll(".seta-esquerda");

console.log(setaDireita);
console.log(setaEsquerda);

const palestranteOne = document.querySelectorAll(".palestrante-one");
const palestranteTwo = document.querySelectorAll(".palestrante-two");
const palestranteThree = document.querySelectorAll(".palestrante-three");

const speakers = [palestranteOne, palestranteTwo, palestranteThree];
console.log(speakers[0][0].classList)

var pointer = 0;

setaDireita.addEventListener("click", () => console.log("Oi"));
setaEsquerda.addEventListener("click", () => console.log("Oi"));



function switchSpeakers(side){
    if(side === "right"){
        pointer ++;
        if (pointer >= 2) {
            pointer = 0;
        }
    } else if(side === "left"){
        pointer --;
        if (pointer <= 0) {
            pointer = 2;
        }
    }

    switch(pointer) {
        case 0:
            speakers[1][0].classList.toggle("palestrante-on");
            speakers[1][1].classList.toggle("palestrante-on");
            speakers[2][0].classList.toggle("palestrante-on");
            speakers[2][1].classList.toggle("palestrante-on");
            break;

        case 1:
            speakers[0][0].classList.toggle("palestrante-on");
            speakers[0][1].classList.toggle("palestrante-on");
            speakers[2][0].classList.toggle("palestrante-on");
            speakers[2][1].classList.toggle("palestrante-on");
        break;
        case 2:
            speakers[0][0].classList.toggle("palestrante-on");
            speakers[0][1].classList.toggle("palestrante-on");
            speakers[1][0].classList.toggle("palestrante-on");
            speakers[1][1].classList.toggle("palestrante-on");
        break;
        
    }

}