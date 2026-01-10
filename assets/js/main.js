/*-----------------------------------------------------------------

Template Name: RevAuto - Car Dealer & Services Html Template
Author:  namespace-it
Author URI: https://themeforest.net/user/namespace-it/portfolio
Version: 1.0.0
Description: RevAuto - Car Dealer & Services Html Template<

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. header
02. animated text with swiper slider
03. magnificPopup
04. counter up
05. wow animation
06. nice select
07. swiper slider
08. search popup
09. mousecursor 
09. preloader 


------------------------------------------------------------------*/

(function ($) {
  "use strict";

  $(document).ready(function () {
    //>> Mobile Menu Js Start <<//
    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    //>> Sidebar Toggle Js Start <<//
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    //>> Body Overlay Js Start <<//
    $(".body-overlay").on("click", function () {
      $(".offcanvas__area").removeClass("offcanvas-opened");
      $(".df-search-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
    });

    //>> Sticky Header Js Start <<//

    $(window).scroll(function () {
      if ($(this).scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");

        $(".navbar-2-address-bar").addClass("display-none");
      } else {
        $("#header-sticky").removeClass("sticky");
        $(".navbar-2-address-bar").removeClass("display-none");
      }
    });

    $("#currentYear").text(new Date().getFullYear());


    //>> Video Popup Start <<//
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".video-popup").magnificPopup({
      type: "iframe",
      callbacks: {},
    });

    //>> Counterup Start <<//
    $(".count").counterUp({
      delay: 15,
      time: 4000,
    });

    //>> Wow Animation Start <<//
    new WOW().init();

    //>> Nice Select Start <<//
    $("#home-landing-select").niceSelect();

    const heroSlider = new Swiper(".hero-slider", {
      speed: 2500,
      spaceBetween: 30,
      loop: true,
      //slidesPerView: 1,
      autoplay: true,
      // effect: "fade",
      a11y: false,
      pagination: {
        el: ".dot",
        clickable: true,
      },
    });

    const heroSlider2 = new Swiper(".hero-slider-2", {
      speed: 1500,
      loop: true,
      //slidesPerView: 1,
      autoplay: true,
      effect: "fade",
      // breakpoints: {
      //     '1600': {
      //         slidesPerView: 1,
      //     },
      //     '1400': {
      //         slidesPerView: 1,
      //     },
      //     '1200': {
      //         slidesPerView: 1,
      //     },
      //     '992': {
      //         slidesPerView: 1,
      //     },
      //     '768': {
      //         slidesPerView: 1,
      //     },
      //     '576': {
      //         slidesPerView: 1,
      //     },
      //     '0': {
      //         slidesPerView: 1,
      //     },

      a11y: false,
      // },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },
    });

    if ($(".hero-img-slider").length > 0) {
      const heroImgSlider = new Swiper(".hero-img-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
      });
    }

    if ($(".hero-3-slider").length > 0) {
      const hero3Slider = new Swiper(".hero-3-slider", {
        effect: "cards",
        grabCursor: true,
        speed: 2000,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
      });
    }

    // hero 4 slider
    const home4Slicer = new Swiper(".hero-4-swiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-dot",
        clickable: true,
      },
      duration: 3000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    $(".hero-4-thumb").click(function () {
      const slideIndex = $(this).data("slide"); // Get the slide index from the data-slide attribute
      home4Slicer.slideTo(slideIndex); // Navigate to the corresponding slide
    });

    // category 4 slider
    var categorySwiper = new Swiper(".category-4-swiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        350: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
        1380: {
          slidesPerView: 7,
          spaceBetween: 15,
        },
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      loop: true,
    });

    

    //>> Testimonial-slider Slider Start <<//
    if ($(".testimonial-slider").length > 0) {
      const testimonialSlider = new Swiper(".testimonial-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dots",
          clickable: true,
        },

        breakpoints: {
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".testimonial-slider-2").length > 0) {
      const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1399: {
            slidesPerView: 4,
          },
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".testimonial-slider-3").length > 0) {
      const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1399: {
            slidesPerView: 5,
          },
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Testimonial-slider Slider Start <<//
    if ($(".team-slider").length > 0) {
      const teamSlider = new Swiper(".team-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dots",
          clickable: true,
        },

        breakpoints: {
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Brand Slider Start <<//
    if ($(".brand-slider").length > 0) {
      const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },

        breakpoints: {
          1399: {
            slidesPerView: 6,
          },
          1199: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    // Alternative configuration with auto-slide
    // Vehicle Type Swiper Slider - Add to your existing JavaScript
if ($(".vehicle-type-swiper").length > 0) {
  const vehicleTypeSwiper = new Swiper(".vehicle-type-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true, // Changed to true for continuous auto-play
    speed: 800, // Increased speed for smoother transitions
    centeredSlides: false,
    observer: true,
    observeParents: true,
    
    // Auto-play configuration
    autoplay: {
      delay: 3000, // 3 seconds delay between slides
      disableOnInteraction: false, // Continue autoplay after user interaction
      pauseOnMouseEnter: true, // Pause autoplay when mouse enters slider
    },
    
    // Breakpoints for responsive design
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
    
    // Navigation arrows
    navigation: {
      nextEl: ".vehicle-swiper-next",
      prevEl: ".vehicle-swiper-prev",
    },
    
    // Pagination dots
    pagination: {
      el: ".vehicle-swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    
    // Enable grab cursor
    grabCursor: true,
    
    // Prevent auto height
    autoHeight: false,
    
    // Optional: Add some effects
    effect: 'slide', // You can also try 'fade', 'cube', 'coverflow' etc.
    
    // Optional: Add transition effect
    fadeEffect: {
      crossFade: true
    },
  });
  
  // Pause/play on hover (additional control)
  $(".vehicle-type-swiper").hover(
    function() {
      vehicleTypeSwiper.autoplay.stop();
      $(this).addClass("autoplay-paused");
    },
    function() {
      vehicleTypeSwiper.autoplay.start();
      $(this).removeClass("autoplay-paused");
    }
  );
  
  // Add click event handlers for vehicle cards
  $(document).on('click', '.vehicle-type-card', function() {
    // Pause autoplay temporarily on card click
    vehicleTypeSwiper.autoplay.stop();
    
    // Remove active class from all cards
    $(".vehicle-type-card").removeClass("active");
    
    // Add active class to clicked card
    $(this).addClass("active");
    
    // Get vehicle type
    const vehicleType = $(this).data("type");
    const vehicleName = $(this).find(".vehicle-type-name").text().trim();
    
    // Update search results
    $("#resultTitle").text(`${vehicleName} Vehicles`);
    $("#resultDescription").text(`Showing all ${vehicleName.toLowerCase()} vehicles in our inventory.`);
    $("#searchResults").removeClass("hidden");
    
    // Resume autoplay after 5 seconds if user doesn't interact further
    setTimeout(() => {
      if (!vehicleTypeSwiper.autoplay.running) {
        vehicleTypeSwiper.autoplay.start();
      }
    }, 5000);
    
    // Here you can add AJAX call to load actual data
    console.log(`Selected vehicle type: ${vehicleType}`);
  });
  
  // Manual control buttons for autoplay (optional)
  // Add these buttons to your HTML if you want manual control
  /*
  <div class="autoplay-controls">
    <button class="autoplay-pause"><i class="fas fa-pause"></i></button>
    <button class="autoplay-play"><i class="fas fa-play"></i></button>
  </div>
  */
  
  // Uncomment if you add the control buttons
  /*
  $('.autoplay-pause').click(function() {
    vehicleTypeSwiper.autoplay.stop();
    $(this).hide();
    $('.autoplay-play').show();
  });
  
  $('.autoplay-play').click(function() {
    vehicleTypeSwiper.autoplay.start();
    $(this).hide();
    $('.autoplay-pause').show();
  });
  */
  
  // Update Swiper on window resize
  $(window).on('resize', function() {
    vehicleTypeSwiper.update();
  });
  
  // Optional: Add keyboard navigation
  $(document).keydown(function(e) {
    if ($(".vehicle-type-swiper").is(":visible")) {
      switch(e.which) {
        case 37: // left arrow
          vehicleTypeSwiper.slidePrev();
          break;
        case 39: // right arrow
          vehicleTypeSwiper.slideNext();
          break;
        case 32: // space bar - toggle autoplay
          if (vehicleTypeSwiper.autoplay.running) {
            vehicleTypeSwiper.autoplay.stop();
          } else {
            vehicleTypeSwiper.autoplay.start();
          }
          break;
        default:
          return;
      }
      e.preventDefault();
    }
  });
}

    //>> Shop-slider Slider Start <<//
    if ($(".shop-slider").length > 0) {
      const shopSlider = new Swiper(".shop-slider", {
        spaceBetween: 24,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1399: {
            slidesPerView: 6,
          },
          1199: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    // client swiper
    if ($(".client-swiper").length > 0) {
      const clientSwiper = new Swiper(".client-swiper", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1199: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Quantity Cart Js Start <<//
    let quantity = 0;
    let price = 0;
    $(".cart-item-quantity-amount, .product-quant").html(quantity);
    $(".total-price, .product-pri").html(price.toFixed(2));
    $(".cart-increment, .cart-incre").on("click", function () {
      if (quantity <= 4) {
        quantity++;
        $(".cart-item-quantity-amount, .product-quant").html(quantity);
        let basePrice = $(".base-price, .base-pri").text();
        $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
      }
    });

    $(".cart-decrement, .cart-decre").on("click", function () {
      if (quantity >= 1) {
        quantity--;
        $(".cart-item-quantity-amount, .product-quant").html(quantity);
        let basePrice = $(".base-price, .base-pri").text();
        $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
      }
    });

    $(".cart-item-remove>a").on("click", function () {
      $(this).closest(".cart-item").hide(300);
    });

    //>> Quantity Js Start <<//
    $(".quantity").on("click", ".plus", function (e) {
      let $input = $(this).prev("input.qty");
      let val = parseInt($input.val(), 10); // Specify base 10
      $input.val(val + 1).change();
    });

    $(".quantity").on("click", ".minus", function (e) {
      let $input = $(this).next("input.qty");
      let val = parseInt($input.val(), 10); // Specify base 10
      if (val > 0) {
        $input.val(val - 1).change();
      }
    });

    // 11.Range sliger
    function getVals() {
      let parent = this.parentNode;
      let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat(slides[0].value);
      let slide2 = parseFloat(slides[1].value);
      if (slide1 > slide2) {
        let tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
      }

      let displayElement = parent.getElementsByClassName("rangeValues")[0];
      displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
    }

    window.onload = function () {
      let sliderSections = document.getElementsByClassName("range-slider");
      for (let x = 0; x < sliderSections.length; x++) {
        let sliders = sliderSections[x].getElementsByTagName("input");
        for (let y = 0; y < sliders.length; y++) {
          if (sliders[y].type === "range") {
            sliders[y].oninput = getVals;
            sliders[y].oninput();
          }
        }
      }
    };

    progressBar: () => {
      const pline = document.querySelectorAll(".progressbar.line");
      const pcircle = document.querySelectorAll(".progressbar.semi-circle");
      pline.forEach((e) => {
        const line = new ProgressBar.Line(e, {
          strokeWidth: 6,
          trailWidth: 6,
          duration: 3000,
          easing: "easeInOut",
          text: {
            style: {
              color: "inherit",
              position: "absolute",
              right: "0",
              top: "-30px",
              padding: 0,
              margin: 0,
              transform: null,
            },
            autoStyleContainer: false,
          },
          step: (state, line) => {
            line.setText(Math.round(line.value() * 100) + " %");
          },
        });
        let value = e.getAttribute("data-value") / 100;
        new Waypoint({
          element: e,
          handler: function () {
            line.animate(value);
          },
          offset: "bottom-in-view",
        });
      });
      pcircle.forEach((e) => {
        const circle = new ProgressBar.SemiCircle(e, {
          strokeWidth: 6,
          trailWidth: 6,
          duration: 2000,
          easing: "easeInOut",
          step: (state, circle) => {
            circle.setText(Math.round(circle.value() * 100));
          },
        });
        let value = e.getAttribute("data-value") / 100;
        new Waypoint({
          element: e,
          handler: function () {
            circle.animate(value);
          },
          offset: "bottom-in-view",
        });
      });
    };

    const rangeInput = document.querySelectorAll(".range-input input"),
      priceInput = document.querySelectorAll(".price-input input"),
      range = document.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
          if (e.target.className === "input-min") {
            rangeInput[0].value = minPrice;
            range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
          } else {
            rangeInput[1].value = maxPrice;
            range.style.right =
              100 - (maxPrice / rangeInput[1].max) * 100 + "%";
          }
        }
      });
    });

    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
          range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
      });
    });

    // Homepage 3
    // New Arrival
    $(".left-section button").click(function () {
      $(this).animate({ width: "+=5px" }, 200).animate({ width: "-=5px" }, 200);

      $(".left-section button")
        .removeClass("car-section-3-active")
        .css("opacity", "1");

      $(this)
        .addClass("car-section-3-active")
        .animate({ opacity: 0.5 }, 200)
        .animate({ opacity: 1 }, 200);

      var targetId = $(this).text();

      $(".tab-pane").removeClass("show active").hide();

      $("#" + targetId)
        .addClass("show active")
        .fadeIn();
    });

    $(".right-section button").click(function () {
      $(".right-section button")
        .removeClass("car-section-3-active-right")
        .css("opacity", "1");

      $(this)
        .addClass("car-section-3-active-right")
        .animate({ opacity: 0.5 }, 200)
        .animate({ opacity: 1 }, 200);
    });

    // suggested car
    $("#suggested-car-btns-3 button").click(function () {
      $(this).animate({ width: "+=5px" }, 200).animate({ width: "-=5px" }, 200);

      $("#suggested-car-btns-3 button")
        .removeClass("car-section-3-active")
        .css("opacity", "1");

      $(this)
        .addClass("car-section-3-active")
        .animate({ opacity: 0.5 }, 200)
        .animate({ opacity: 1 }, 200);

      var suggest = $(this).data("suggest");

      $(".tab-panel-suggest")
        .removeClass("show active")
        .addClass("hide")
        .hide();

      $(".tab-panel-suggest[data-suggest='" + suggest + "']")
        .addClass("show active")
        .fadeIn();
    });

    // Cart 2
    let cart2ItemData = [];
    const cart2Items = $(".cart-item");
    const cart2ItemsTotal = $("#cart-2-items");
    const cart2ItemsSubtotal = $("#cart-2-items-subtotal");
    const cart2Total = $("#cart-2-total-price");

    cart2Items.each(function (index, item) {
      const id = $(this).data("id");
      const quantity = $(`#cart-2-quantity-${index + 1}`).val();
      const price = $(`#cart-2-price-${index + 1}`).text();
      const priceWithoutDollar = price.replace("$", "");

      cart2ItemData.push({
        id,
        quantity: Number(quantity),
        price: Number(priceWithoutDollar),
      });
    });

    function update2Cart() {
      cart2ItemsTotal.text(
        cart2ItemData.reduce((acc, item) => acc + Number(item.quantity), 0)
      );

      const quantity = cart2ItemData.reduce(
        (acc, item) => acc + Number(item.quantity) * Number(item.price),
        0
      );

      cart2ItemsSubtotal.text(quantity);
      cart2Total.text(
        cart2ItemData.reduce(
          (acc, item) => acc + Number(item.quantity) * Number(item.price),
          0
        ) + 5
      );
    }
    update2Cart();

    $(".cart-2-increase-btn").click(function () {
      const id = $(this).data("id");

      const input = $(`#cart-2-quantity-${id}`);
      let inputVal = parseInt(input.val());

      if (inputVal >= 0) {
        input.val(inputVal + 1);
        cart2ItemData[id - 1].quantity = inputVal + 1;

        update2Cart();
      }
    });

    $(".cart-2-decrease-btn").click(function () {
      const id = $(this).data("id");

      const input = $(`#cart-2-quantity-${id}`);
      let inputVal = parseInt(input.val());

      if (inputVal >= 1) {
        input.val(inputVal - 1);
        cart2ItemData[id - 1].quantity = inputVal - 1;
        update2Cart();
      }
    });

    $(".cart-2-delete-item-btn").click(function () {
      const id = $(this).data("id");

      cart2ItemData = cart2ItemData.filter((item) => item.id !== id);

      $(this).closest(`div.cart-item[data-id='${id}']`).hide(300);

      update2Cart();
    });

    // Cart 3
    let cart3ItemData = [];
    const cart3Items = $(".cart-item-3");
    const cart3ItemsTotal = $("#cart-3-items");
    const cart3ItemsSubtotal = $("#cart-3-items-subtotal");
    const cart3Total = $("#cart-3-total-price");

    function update3Cart(singleSubtotal = null) {
      cart3ItemsTotal.text(
        cart3ItemData.reduce((acc, item) => acc + Number(item.quantity), 0)
      );

      const quantity = cart3ItemData.reduce(
        (acc, item) => acc + Number(item.quantity) * Number(item.price),
        0
      );
      cart3ItemsSubtotal.text(quantity);

      cart3Total.text(
        cart3ItemData.reduce(
          (acc, item) => acc + Number(item.quantity) * Number(item.price),
          0
        ) +
        10 -
        9.99
      );

      if (singleSubtotal) {
        const singleSubtotalElement = $(
          `.cart-3-single-subtotal-${singleSubtotal}`
        );
        const singlePrice = cart3ItemData[singleSubtotal - 1];

        singleSubtotalElement.text(singlePrice.quantity * singlePrice.price);
      }
    }

    cart3Items.each(function (index, item) {
      const id = $(this).data("id");
      const quantity = $(`#cart-3-quantity-${index + 1}`).val();
      const price = $(`#cart-3-price-${index + 1}`).text();

      cart3ItemData.push({
        id,
        quantity: Number(quantity),
        price: Number(price),
      });

      update3Cart(id);
    });

    $(".cart-3-increase-btn").click(function () {
      const id = $(this).data("id");

      const input = $(`#cart-3-quantity-${id}`);
      let inputVal = parseInt(input.val());

      if (inputVal >= 0) {
        input.val(inputVal + 1);
        cart3ItemData[id - 1].quantity = inputVal + 1;

        update3Cart(id);
      }
    });

    $(".cart-3-decrease-btn").click(function () {
      const id = $(this).data("id");

      const input = $(`#cart-3-quantity-${id}`);
      let inputVal = parseInt(input.val());

      if (inputVal >= 1) {
        input.val(inputVal - 1);
        cart3ItemData[id - 1].quantity = inputVal - 1;

        update3Cart(id);
      }
    });

    $(".cart-3-delete-item-btn").click(function () {
      const id = $(this).data("id");
      cart3ItemData = cart3ItemData.filter((item) => item.id !== id);

      $(this).closest(`tr[data-id='${id}']`).hide(300);

      update3Cart();
    });

    // update cart count
    const counterBtns = $(".add-to-cart");
    const counterBtns2 = $(".add-to-cart-2");
    const cartCount = $("#cart-count");
    function updateCartCount() {
      const cartCountValue = cartCount.text();
      cartCount.text(Number(cartCountValue) + 1);
    }

    counterBtns.click(function () {
      updateCartCount();
    });

    counterBtns2.click(function () {
      updateCartCount();
    });

    //>> Back To Top Start <<//
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        $("#back-top").addClass("show");
      } else {
        $("#back-top").removeClass("show");
      }
    });
    $("#back-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
    // Back to top btn area end here ***

    //>> Mouse Cursor Start <<//
    function mousecursor() {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "a, .cursor-pointer", function () {
            ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
                t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
    $(function () {
      mousecursor();
    });
  }); // End Document Ready Function

  function loader() {
    $(window).on("load", function () {
      // Animate loader off screen
      $(".preloader").addClass("loaded");
      $(".preloader").delay(600).fadeOut();
    });
  }

  loader();
})(jQuery); // End jQuery


// Featured Vehicles Swiper
// Initialize Featured Vehicles Swiper
if ($(".featured-vehicles-swiper").length > 0) {
  const featuredVehiclesSwiper = new Swiper(".featured-vehicles-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 800,
    autoplay: false,
    // {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".featured-vehicles-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}