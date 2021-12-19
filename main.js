/**
* Template Name: FlexStart - v1.9.0
* Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;

        for(var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }

      }
});
var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', function () {
  // do something...
})

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

/**
   * Testimonials slider
   */
 new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },

    1200: {
      slidesPerView: 3,
    }
  }
});

window.addEventListener('scroll', function()  {
let elements = document.getElementsByClassName('scroll-content');
let screenSize = window.innerHeight;

      for(var i = 0; i < elements.length; i++) {
      var element = elements[i];

      if(element.getBoundingClientRect().top < screenSize) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }

    }
});