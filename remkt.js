const body = document.querySelector('body');
body.addEventListener('mouseout', popUp);

function popUp() {
    const h2 = document.querySelector('h2');
    h2.classList.add('popup');
}