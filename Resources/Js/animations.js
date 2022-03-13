const navSlide = () => {

    const burger = document.querySelector('.burger');
    const headernavlist = document.querySelector('.headernavlist');

    burger.addEventListener('click', () => {
        headernavlist.classList.toggle('slide-active');
    });
}

navSlide();

