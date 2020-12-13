const GiftDay = 'December 13, 2020 18:30:20';
var  totalSeconds = 0;
// const countDown = () => {
//     const GiftDayDate = new Date(GiftDay);
// }

const CountSeconds = document.getElementById("CountSeconds");
const CountDays = document.getElementById("CountDays");
const CountMinutes = document.getElementById("CountMinutes");
const CountHours = document.getElementById("CountHours");


function countDown (){
    const GiftDayDate = new Date(GiftDay);
    const CurrentDate = new Date();

    totalSeconds = (GiftDayDate - CurrentDate)/1000;
    const days    = Math.floor (totalSeconds/ 3600 /24);
    const hours   = Math.floor (totalSeconds/ 3600 )% 24;
    const minutes = Math.floor (totalSeconds/ 60 )% 60;
    const seconds = Math.floor (totalSeconds% 60);

    CountSeconds.innerHTML = seconds;
    CountDays.innerHTML    = days;
    CountMinutes.innerHTML = minutes;
    CountHours.innerHTML   = hours;
    // setInterval(countDown ,1000);
    // var stopIntervalID = setInterval(countDown ,1000);    

    if(totalSeconds <= 1){
        clearInterval(stopIntervalID); 
        console.log(':smile:'); 
    }
}


countDown();
var stopIntervalID = setInterval(countDown ,1000);
// setTimeout(stopInterval, 2000);
// var stopIntervalID = setInterval(countDown ,1000);

// console.log(totalSeconds);
// // clearInterval(stopIntervalID);
// if (totalSeconds < 0)
//     {
//         console.log('Llegue qui');
//         clearInterval(stopIntervalID);
//     }
