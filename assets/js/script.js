// SELECT HTML ELEMENTS
const days  = document.querySelector('.days');
const hours  = document.querySelector('.hours');
const minutes  = document.querySelector('.minutes');
const seconds  = document.querySelector('.seconds');

// to this specific date
const toDate = new Date("September 5 2022 00:00:00");


// FUNCTION TO SHOW PRELOADER FOR 5 SECONDS
// function offPreloader()
// {
//     document.getElementById('preloader').classList.add('offPreloader');
//     document.body.classList.add('removeOverflow');
// }

// setTimeout(offPreloader,5000);


// COUNTDOWN TIMER
function countDownTimer()
{
    const currentTime = new Date();
    const timeDifference = toDate - currentTime;

    const days_ = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    const hours_ = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
    const minutes_ = Math.floor(timeDifference / 1000 / 60) % 60;
    const seconds_ = Math.floor(timeDifference / 1000) % 60;

    days.innerHTML = days_;
    hours.innerHTML = hours_ < 10 ? '0' + hours_ : hours_;
    minutes.innerHTML = minutes_ < 10 ? '0' + minutes_ : minutes_;
    seconds.innerHTML = seconds_ < 10 ? '0' + seconds_ : seconds_;
    // console.log(seconds);
}
setInterval(countDownTimer,1000);



