
function timeCountDown(deadline){
    let today = new Date().getTime();
    let timeLeft = Date.parse(deadline) - today;
    let days = Math.floor(timeLeft / (1000*60*60*24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    console.log(timeLeft, days, hours, minutes, seconds);

    return {
        timeLeft: timeLeft, //IE não aceita associação direta, obriga a ter o ":" na associação
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

const h1 = document.querySelector('h1');

function clock() {
    let tic = setInterval( function() {
        let timeObj = timeCountDown("2020/03/26 11:59 AM"); //Para funcionar no IE, Firefox etc. a data tem que ser no formato YY/MM/DD HH:MM AM/PM;

        if (timeObj.timeLeft <= 0) {
            clearInterval(tic);
        }

        h1.innerText = timeObj.days + "dias - " + timeObj.hours + " horas - " + timeObj.minutes + " minutos - " + timeObj.seconds + " segundos";
        //IE não aceita template literal ``, por isso tive que fazer do jeito "antigo"
    }, 1000);
}

clock();
