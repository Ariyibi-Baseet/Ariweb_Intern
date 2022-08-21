function offPreloader()
{
    document.getElementById('preloader').classList.add('offPreloader');
    document.body.classList.add('removeOverflow');
}

setTimeout(offPreloader,5000);