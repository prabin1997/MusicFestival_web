window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add("preload-finish");
});

const homeContent = document.querySelector('.home-content');
const headline = document.querySelector('.headline');
const date = document.querySelector('.date');
const countdown = document.querySelector('.counter-section');


const tl = new TimelineMax();
tl.fromTo(homeContent,1,{height:"0%"}, {height:'100%', ease: Power2.easeInOut })
.fromTo(headline, 1, {opacity:0, x:30}, {opacity:1, x:0}, "-=0.5")
.fromTo(date, 1, {opacity:0, x:30}, {opacity:1, x:0}, "-=0.5")
.fromTo(countdown, 1, {opacity:0, x:30}, {opacity:1, x:0}, "-=0.5");

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });


    
}
navSlide();


$('#init_clock').countdown('2020/07/04', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<div><span class="days">%D</span> </div> '
            + '<div><span class="hours">%H</span> </div> '
            + '<div><span class="minutes">%M</span> </div> '
            + '<div><span class="seconds">%S</span></div> '));
    });

function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.news-title',
        triggerHook: 0
    })
    .setPin('.news-title')
    .addTo(controller);
}
splitScroll();

$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $('.scrollToTop').fadeIn();
        } else{
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function(){
        $('html,body').animate({scrollTop: 0}, 1000)
    })
});

