

const galleryDesc = document.querySelector('.gallery-desc');
const highlight = document.querySelector('.gallery-highlight');
const previewImg = document.querySelectorAll('.gallery-preview img');

const tl = new TimelineMax();
tl.fromTo(galleryDesc,0.7,{height:"0%"}, {height:'100%', ease: Power2.easeInOut })
.fromTo(highlight,1.2, {x: "150%"}, {x: '0%', ease: Power2.easeInOut })
.fromTo(previewImg,1, {x: "450%"}, {x: '0%', ease: Power2.easeInOut });




function imageGallery() {
  const highlight = document.querySelector(".gallery-highlight");
  const previews = document.querySelectorAll(".gallery-preview img");

  previews.forEach(preview => {
    preview.addEventListener("click", function() {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach(preview => preview.classList.remove("festival-active"));
      highlight.src = bigSrc;
      preview.classList.add("festival-active");
    });
  });
}

imageGallery();

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





