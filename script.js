//Activate menu button//
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');


menuBtn.onClick =() => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');

}


//Scroll Reveal//
ScrollReveal ({
    reset:true,
    distance: '100px',
    duration : 2000,
    delya:200
});
ScrollReveal().reveal('.home-bio h1, .about-resume', {origin: 'left'} );
ScrollReveal().reveal('.home-bio p', {origin: 'right'});
ScrollReveal().reveal('.home-bio , heading', {origin: 'top'});
ScrollReveal().reveal('.profile-pic , .about-items, .skills-items,.projects-items,.form', {origin: 'bottom'});

// typing animation //
const animText = new Typed ('.animated-text', {
    strings: ['a Computer Science student','an Android Developer','a Software Engineer'],
    backSpeed : 100,
    typeSpeed : 100,
    backDelay: 600,
    loop: true
});