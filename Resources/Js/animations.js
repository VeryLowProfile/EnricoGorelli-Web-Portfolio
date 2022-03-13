const navSlide = () => {

    const burger = document.querySelector('.burger');
    const headernavlist = document.querySelector('.headernavlist');
    const navLinks = document.querySelectorAll('.headernavlist li');

    burger.addEventListener('click', () => {

        //animate nav
        headernavlist.classList.toggle('slide-active');

        //animate links
        navLinks.forEach((navLink, index) => {
            if (navLink.style.animation) {
                navLink.style.animation = '';
            } else {
                navLink.style.animation = `slideFade 0.5s ease forwards ${index/7+ 0.2}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle')

    });
}

navSlide();

