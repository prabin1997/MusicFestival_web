const box = document.querySelectorAll('.imgBox');
const heading = document.querySelector('.heading');


const tl = new TimelineMax();
tl.fromTo(box,1,{height:"0%"}, {height:'80%', ease: Power2.easeInOut })
.fromTo(heading, 2, {opacity:0, x:30}, {opacity:1, x:0}, "-=0.5");

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
  



var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement: '.lineup2',
    triggerHook: 1.5
})
.setClassToggle('.lineup2', 'fade')
.addTo(controller);