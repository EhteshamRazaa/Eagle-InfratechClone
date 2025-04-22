var swiper = new Swiper(".slide-content", {
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  slidesPerView: 3,
  spaceBetween: 25,
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
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

$(".portfolio-menu ul li").click(function () {
  $(".portfolio-menu ul li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".portfolio-item").isotope({
    filter: selector,
  });
  return false;
});
$(document).ready(function () {
  var popup_btn = $(".popup-btn");
  popup_btn.magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// let btn = true;

const show = document
  .querySelector(".show-more")
  .addEventListener("click", function () {
    for (let i = 0; i < 15; i++) {
      document.querySelectorAll(".less")[i].classList.remove("d-none");
      document.querySelector(".show-more").classList.add("d-none");
      // if (btn) {
      //   document.querySelector(".show-more").innerHTML =
      //     "Show Less Projects ...";
      // } else {
      //   document.querySelector(".show-more").innerHTML =
      //     "Show More Projects ...";
      // }
      // btn = !btn;
    }
  });
