

let menuBarHide = document.querySelector('.fa-bars');
let closeBarHide = document.querySelector('.fa-close');
let menuListHaaide = document.querySelector('.menu_list_hide')

menuBarHide.addEventListener('click', function openMenuBar() {
  menuListHaaide.style.opacity = '1'
  closeBarHide.style.transform = 'translateX(1rem)'
  menuBarHide.style.opacity = '0'
  closeBarHide.style.opacity = '1'
})

closeBarHide.addEventListener('click', function closeMenuBar() {
  menuListHaaide.style.opacity = '0'
  menuBarHide.style.opacity = '1'
  closeBarHide.style.opacity = '0'
  closeBarHide.style.transform = 'translateX(0rem)'

})

let mainn = document.querySelector('.close_menu')

mainn.addEventListener('click', function closeMenu() {
  menuListHaaide.style.opacity = '0'
  menuBarHide.style.opacity = '1'
  closeBarHide.style.opacity = '0'
  closeBarHide.style.transform = 'translateX(0rem)'
})

/* --------------------------end main master----------------------- */

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

// <!-- /* --------------------------end container_samples----------------------- */ -->

let scrollIcon = document.querySelector('.scroll')

document.addEventListener("scroll", function scrollData() {
  let scrollLocationTY = document.documentElement.scrollTop;
  if (scrollLocationTY > 300) {
    scrollIcon.style.transform = 'translateY(0rem)';
  } else {
    scrollIcon.style.transform = 'translateY(6rem)';
  }
})



// <!-- /* --------------------------end scroll----------------------- */ -->


function Moon() {
  document.documentElement.style.setProperty('--back-color', '#1F2937');
  document.documentElement.style.setProperty('--color_font-white', 'rgb(0, 0, 0)');
  document.documentElement.style.setProperty('--color_font-black', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--color-gro', '#333');
  
}

function Sun() {
  document.documentElement.style.setProperty('--back-color', '#F3F4F6');
  document.documentElement.style.setProperty('--color_font-white', ' rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--color_font-black', 'rgb(0, 0, 0)');
  document.documentElement.style.setProperty('--color-gro', '#bfc6cfc7');
  
}


