let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}


window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')

}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active')
}

var swiper = new Swiper(".home-slider", {
    slidesPerView: 1,
    spaceBetween: 200,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });

  
var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: {
      enabled: true,
    },
   
   loop:true,
   breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
   },
  });

  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut(){
    setInterval(loader, 3000);
  }

  window.onload = fadeOut;






