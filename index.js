

// slider of sheikh mujib

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // centeredSlides: true,
    loop: true,
    // observer: true,
    // observeParents: true,
    // freeMode: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    // slidesPerView: 'auto',
    // direction: 'horizontal',
    // scrollbar: { el: '.swiper-scrollbar' },
    // preloadImages: true,
    // simulateTouch: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    
});




// menu area

const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', function () {
	
	const navUlMain = document.querySelector('.nav-ul-main');
	navUlMain.classList.toggle('active');
})