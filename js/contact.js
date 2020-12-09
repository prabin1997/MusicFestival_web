const form = document.querySelectorAll('.form');

const tl = new TimelineMax();
tl.fromTo(form, 2, {opacity:0, x:3000}, {opacity:1, x:0}, "-=0.5");

var input = document.getElementsByClassName('form_input');
for (var i=0; i < input.length; i++) {
  input [i].addEventListener('keyup',function() {
  if(this.value.length>=1) {
    this.nextElementSibling.classList.add('contact');
  } else {
    this.nextElementSibling.classList.remove('contact');
  }  
  });
}

document.getElementById('button').addEventListener('click',function()
{
document.querySelector('.popup_bg').style.display = 'block';
});
document.querySelector('.close_popup_div').addEventListener('click', function(){
    document.querySelector('.popup_bg').style.display = 'none';
});

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





