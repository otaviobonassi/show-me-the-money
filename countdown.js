
function timeCountDown(deadline){
    let timeLeft = Date.parse(deadline) - Date.now();
    let days = Math.floor(timeLeft / (1000*60*60*24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // console.log(timeLeft, days, hours, minutes, seconds);

    return {
        timeLeft: timeLeft, //IE não aceita associação direta, obriga a ter o ":" na associação
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

const days = document.querySelector('#dias');
const hours = document.querySelector('#horas');
const minutes = document.querySelector('#minutos');
const seconds = document.querySelector('#segundos');

function clock() {
    let tic = setInterval( function() {
        let timeObj = timeCountDown("2020/03/26 11:59 AM"); //Para funcionar no IE, Firefox etc. a data tem que ser no formato YY/MM/DD HH:MM AM/PM;

        if (timeObj.timeLeft <= 0) {
            clearInterval(tic);
        }

        days.innerText = timeObj.days;
        hours.innerText = timeObj.hours;
        minutes.innerText = timeObj.minutes;
        seconds.innerText = timeObj.seconds;
        //IE não aceita template literal ``, por isso tive que fazer do jeito "antigo"
    }, 1000);
}

clock();
