
function timeCountDown(deadline){
    let today = new Date().getTime();
    let timeLeft = Date.parse(deadline) - today;
    let days = Math.floor(timeLeft / (1000*60*60*24));
    let hours = Math.floor((timeLeft / (1000*60*60)) % 60)
    let minutes = Math.floor((timeLeft / (1000*60)) % 60);
    let seconds = Math.floor((timeLeft / 1000) % 60);

    return {
        timeLeft,
        days,
        hours,
        minutes,
        seconds
    };
}

const h1 = document.querySelector('h1');

function clock() {
    let tic = setInterval( () => {
        let timeObj = timeCountDown("Março 26 2020 24:00:00"); //'December 31 2015 23:59:59 GMT+0200';

        if (timeObj.timeLeft <= 0) {
            clearInterval(tic);
        }

        h1.innerText = `${timeObj.days} dias - ${timeObj.hours} horas - ${timeObj.minutes} minutos - ${timeObj.seconds} segundos`;

    }, 1000);
}

clock();
