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