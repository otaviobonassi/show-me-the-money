document.addEventListener("mouseleave", showRemkt, {once: "true"}); //Garantindo uma experiência melhor, sem disparar o evento toda hora que o mouse sair da window

function showRemkt() {
    let remkt = document.querySelector('.remkt');
    let content = document.querySelector('.content');

    remkt.classList.toggle('off');

    remkt.addEventListener('click', (evt) => {
        console.log(evt.target.classList[0]);
        if(evt.target.classList[0] === "remkt") {   
            remkt.classList.toggle('off');
        }
    })
    
}

