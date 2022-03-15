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

const imageBlur = () => {

    const image = document.querySelector('.aboutpicture');
    image.style.animation = `imageBlur 3s ease`

}

window.addEventListener('scroll', () => {

    console.log("event");

    let reveals = document.querySelectorAll('.reveal');
    let windowHeight = window.innerHeight;

    reveals.forEach((reveal) => {

        let revealPoint = 150;
        let revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint){

            //Add active class to animate
            reveal.classList.add('active');

            //Line animation
            let lines = reveal.querySelectorAll('.line')
            lineAnimation(lines);

        } else {

            //Remove active class to animate
            reveal.classList.remove('active');
            
            //Reset Line animation
            let lines = reveal.querySelectorAll('.line')
            resetLineWidth(lines);

        }
    });   
});

const lineAnimation = (elementlines) => {

    elementlines.forEach((line) => {
        console.log("add animation" + line);   
        line.classList.forEach((cl) => {
            if (cl === "width_100"){
                line.style.width = "100%"
                line.style.animation = `width100 2s ease`
            }
            if (cl === "width_90"){
                line.style.width = "90%"
                line.style.animation = `width90 2s ease`
            }
            if (cl === "width_80"){
                line.style.width = "80%"
                line.style.animation = `width80 2s ease`
            }
            if (cl === "width_70"){
                line.style.width = "70%"
                line.style.animation = `width70 2s ease`
            }
            if (cl === "width_60"){
                line.style.width = "60%"
                line.style.animation = `width60 2s ease`
            }
            if (cl === "width_50"){
                line.style.width = "50%"
                line.style.animation = `width50 2s ease`
            }
        });
    });
}

const resetLineWidth = (elementlines) => {

    elementlines.forEach((line) => {
        console.log("remove animation" + line);    
        line.style.width = "0%"
        line.style.animation = ``;
    });
}

navSlide();
imageBlur();

