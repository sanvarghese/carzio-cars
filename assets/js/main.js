
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

    //>> CAR SEARCH FORM FUNCTIONALITY - ADDED HERE <<//
    function initializeCarSearchForm() {
      // Price Range Slider
      const priceMin = document.getElementById('priceMin');
      const priceMax = document.getElementById('priceMax');
      const priceDisplay = document.getElementById('priceRangeDisplay');

      function updatePriceDisplay() {
        if (!priceMin || !priceMax || !priceDisplay) return;

        let minVal = parseInt(priceMin.value);
        let maxVal = parseInt(priceMax.value);

        // Ensure min is always less than max
        if (minVal > maxVal) {
          [minVal, maxVal] = [maxVal, minVal];
          priceMin.value = minVal;
          priceMax.value = maxVal;
        }

        priceDisplay.textContent = `${minVal.toLocaleString()} - ${maxVal.toLocaleString()}`;
      }

      if (priceMin && priceMax && priceDisplay) {
        priceMin.addEventListener('input', updatePriceDisplay);
        priceMax.addEventListener('input', updatePriceDisplay);
        // Initialize display
        updatePriceDisplay();
      }

      // Year Range Slider
      const yearMin = document.getElementById('yearMin');
      const yearMax = document.getElementById('yearMax');
      const yearDisplay = document.getElementById('yearRangeDisplay');

      function updateYearDisplay() {
        if (!yearMin || !yearMax || !yearDisplay) return;

        let minVal = parseInt(yearMin.value);
        let maxVal = parseInt(yearMax.value);

        // Ensure min is always less than max
        if (minVal > maxVal) {
          [minVal, maxVal] = [maxVal, minVal];
          yearMin.value = minVal;
          yearMax.value = maxVal;
        }

        yearDisplay.textContent = `${minVal} - ${maxVal}`;
      }

      if (yearMin && yearMax && yearDisplay) {
        yearMin.addEventListener('input', updateYearDisplay);
        yearMax.addEventListener('input', updateYearDisplay);
        // Initialize display
        updateYearDisplay();
      }

      // Form submission handler
      const carSearchForm = document.getElementById('carSearchForm');
      if (carSearchForm) {
        carSearchForm.addEventListener('submit', function (e) {
          e.preventDefault();

          const formData = {
            make: document.getElementById('carMake')?.value || '',
            model: document.getElementById('carModel')?.value || '',
            bodyType: document.getElementById('bodyType')?.value || '',
            searchQuery: document.getElementById('searchInput')?.value || '',
            priceMin: priceMin?.value || '',
            priceMax: priceMax?.value || '',
            yearMin: yearMin?.value || '',
            yearMax: yearMax?.value || ''
          };

          console.log('Search Parameters:', formData);

          // Add your search logic here
          alert('Searching for cars with your criteria...');
        });
      }
    }

    // Initialize car search form when DOM is ready
    initializeCarSearchForm();

    // Continue with existing slider code...
    const heroSlider = new Swiper(".hero-slider", {
      speed: 2500,
      spaceBetween: 30,
      loop: true,
      autoplay: true,
      a11y: false,
      pagination: {
        el: ".dot",
        clickable: true,
      },
    });

    const heroSlider2 = new Swiper(".hero-slider-2", {
      speed: 1500,
      loop: true,
      autoplay: true,
      effect: "fade",
      a11y: false,
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
      const slideIndex = $(this).data("slide");
      home4Slicer.slideTo(slideIndex);
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

    // Vehicle Type Swiper Slider
    if ($(".vehicle-type-swiper").length > 0) {
      const vehicleTypeSwiper = new Swiper(".vehicle-type-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 800,
        centeredSlides: false,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
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
        navigation: {
          nextEl: ".vehicle-swiper-next",
          prevEl: ".vehicle-swiper-prev",
        },
        pagination: {
          el: ".vehicle-swiper-pagination",
          clickable: true,
          dynamicBullets: false,
        },
        grabCursor: true,
        autoHeight: false,
        effect: 'slide',
        fadeEffect: {
          crossFade: true
        },
      });

      $(".vehicle-type-swiper").hover(
        function () {
          vehicleTypeSwiper.autoplay.stop();
          $(this).addClass("autoplay-paused");
        },
        function () {
          vehicleTypeSwiper.autoplay.start();
          $(this).removeClass("autoplay-paused");
        }
      );

      $(document).on('click', '.vehicle-type-card', function () {
        vehicleTypeSwiper.autoplay.stop();
        $(".vehicle-type-card").removeClass("active");
        $(this).addClass("active");

        const vehicleType = $(this).data("type");
        const vehicleName = $(this).find(".vehicle-type-name").text().trim();

        $("#resultTitle").text(`${vehicleName} Vehicles`);
        $("#resultDescription").text(`Showing all ${vehicleName.toLowerCase()} vehicles in our inventory.`);
        $("#searchResults").removeClass("hidden");

        setTimeout(() => {
          if (!vehicleTypeSwiper.autoplay.running) {
            vehicleTypeSwiper.autoplay.start();
          }
        }, 5000);

        console.log(`Selected vehicle type: ${vehicleType}`);
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
      let val = parseInt($input.val(), 10);
      $input.val(val + 1).change();
    });

    $(".quantity").on("click", ".minus", function (e) {
      let $input = $(this).next("input.qty");
      let val = parseInt($input.val(), 10);
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


  // adde finance page functions

  //>> CAR SEARCH FORM FUNCTIONALITY - ADDED HERE <<//
  function initializeCarSearchForm() {
    // Price Range Slider
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    const priceDisplay = document.getElementById('priceRangeDisplay');

    function updatePriceDisplay() {
      if (!priceMin || !priceMax || !priceDisplay) return;

      let minVal = parseInt(priceMin.value);
      let maxVal = parseInt(priceMax.value);

      // Ensure min is always less than max
      if (minVal > maxVal) {
        [minVal, maxVal] = [maxVal, minVal];
        priceMin.value = minVal;
        priceMax.value = maxVal;
      }

      priceDisplay.textContent = `${minVal.toLocaleString()} - ${maxVal.toLocaleString()}`;
    }

    if (priceMin && priceMax && priceDisplay) {
      priceMin.addEventListener('input', updatePriceDisplay);
      priceMax.addEventListener('input', updatePriceDisplay);
      // Initialize display
      updatePriceDisplay();
    }

    // Year Range Slider
    const yearMin = document.getElementById('yearMin');
    const yearMax = document.getElementById('yearMax');
    const yearDisplay = document.getElementById('yearRangeDisplay');

    function updateYearDisplay() {
      if (!yearMin || !yearMax || !yearDisplay) return;

      let minVal = parseInt(yearMin.value);
      let maxVal = parseInt(yearMax.value);

      // Ensure min is always less than max
      if (minVal > maxVal) {
        [minVal, maxVal] = [maxVal, minVal];
        yearMin.value = minVal;
        yearMax.value = maxVal;
      }

      yearDisplay.textContent = `${minVal} - ${maxVal}`;
    }

    if (yearMin && yearMax && yearDisplay) {
      yearMin.addEventListener('input', updateYearDisplay);
      yearMax.addEventListener('input', updateYearDisplay);
      // Initialize display
      updateYearDisplay();
    }

    // Form submission handler
    const carSearchForm = document.getElementById('carSearchForm');
    if (carSearchForm) {
      carSearchForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
          make: document.getElementById('carMake')?.value || '',
          model: document.getElementById('carModel')?.value || '',
          bodyType: document.getElementById('bodyType')?.value || '',
          searchQuery: document.getElementById('searchInput')?.value || '',
          priceMin: priceMin?.value || '',
          priceMax: priceMax?.value || '',
          yearMin: yearMin?.value || '',
          yearMax: yearMax?.value || ''
        };

        console.log('Search Parameters:', formData);

        // Add your search logic here
        alert('Searching for cars with your criteria...');
      });
    }
  }

  // added financial page functions

  // Finance Page Wizard Functionality
  function initializeFinanceWizard() {
    // Only run on finance page
    if (!document.querySelector('.finace-section')) return;

    // Form type toggle functionality
    const fullAppBtn = document.getElementById('fullApplicationBtn');
    const quickAppBtn = document.getElementById('quickApplicationBtn');
    const fullForm = document.getElementById('fullApplicationForm');
    const quickForm = document.getElementById('quickApplicationForm');

    if (!fullAppBtn || !quickAppBtn || !fullForm || !quickForm) return;

    // Initialize with full form active
    fullAppBtn.classList.add('active');
    fullForm.classList.add('active');
    quickForm.classList.remove('active');

    // Full Application button click
    fullAppBtn.addEventListener('click', function () {
      this.classList.add('active');
      quickAppBtn.classList.remove('active');
      fullForm.classList.add('active');
      quickForm.classList.remove('active');

      // Reset wizard to step 1 when switching to full form
      if (typeof goToStep === 'function') {
        goToStep(1);
      }
    });

    // Quick Application button click
    quickAppBtn.addEventListener('click', function () {
      this.classList.add('active');
      fullAppBtn.classList.remove('active');
      quickForm.classList.add('active');
      fullForm.classList.remove('active');
    });

    // Wizard Variables
    let currentStep = 1;
    const totalSteps = 7;
    let isJointApplication = false;

    // Get DOM elements for wizard
    const progressSteps = document.querySelectorAll('.step');
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    const fillLaterButtons = document.querySelectorAll('.fill-later');
    const jointApplicationRadios = document.querySelectorAll('input[name="jointApplication"]');
    const jointApplicantSections = document.querySelectorAll('.joint-applicant-section');

    // Initialize wizard
    updateProgress();

    // Handle joint application toggle
    jointApplicationRadios.forEach(radio => {
      radio.addEventListener('change', function () {
        isJointApplication = this.value === 'yes';
        toggleJointApplicantSections(isJointApplication);
      });
    });

    // Next button functionality
    nextButtons.forEach(button => {
      button.addEventListener('click', function () {
        const nextStep = parseInt(this.dataset.next);
        if (validateStep(currentStep)) {
          goToStep(nextStep);
        }
      });
    });

    // Previous button functionality
    prevButtons.forEach(button => {
      button.addEventListener('click', function () {
        const prevStep = parseInt(this.dataset.prev);
        goToStep(prevStep);
      });
    });

    // Fill later button functionality
    fillLaterButtons.forEach(button => {
      button.addEventListener('click', function () {
        alert('This section will be saved and can be completed later.');
        // You can implement AJAX save functionality here
      });
    });

    // Apply for Finance button in full form
    const applyButton = document.querySelector('.apply-finance');
    if (applyButton) {
      applyButton.addEventListener('click', function () {
        if (validateStep(7)) {
          // Open privacy declaration popup for full form
          $.magnificPopup.open({
            items: {
              src: '#privacy-declaration-popup',
              type: 'inline'
            },
            callbacks: {
              open: function () {
                // Reset checkbox when popup opens
                document.getElementById('privacyAgreement').checked = false;
                document.getElementById('confirmPrivacyBtn').disabled = true;

                // Change confirm button to handle full form submission
                const confirmBtn = document.getElementById('confirmPrivacyBtn');
                confirmBtn.onclick = function () {
                  if (document.getElementById('privacyAgreement').checked) {
                    submitFullApplication();
                  }
                };
              }
            }
          });
        }
      });
    }

    // Quick Apply button
    const quickApplyBtn = document.getElementById('quickApplyBtn');
    if (quickApplyBtn) {
      quickApplyBtn.addEventListener('click', function () {
        if (validateQuickForm()) {
          // Open privacy declaration popup
          $.magnificPopup.open({
            items: {
              src: '#privacy-declaration-popup',
              type: 'inline'
            },
            callbacks: {
              open: function () {
                // Reset checkbox when popup opens
                document.getElementById('privacyAgreement').checked = false;
                document.getElementById('confirmPrivacyBtn').disabled = true;
              }
            }
          });
        }
      });
    }

    // Privacy agreement checkbox change handler
    const privacyCheckbox = document.getElementById('privacyAgreement');
    if (privacyCheckbox) {
      privacyCheckbox.addEventListener('change', function () {
        const confirmBtn = document.getElementById('confirmPrivacyBtn');
        if (confirmBtn) {
          confirmBtn.disabled = !this.checked;
        }
      });
    }

    // Confirm Privacy button
    const confirmPrivacyBtn = document.getElementById('confirmPrivacyBtn');
    if (confirmPrivacyBtn) {
      confirmPrivacyBtn.addEventListener('click', function () {
        if (document.getElementById('privacyAgreement').checked) {
          // Check which form is active
          if (fullForm.classList.contains('active')) {
            submitFullApplication();
          } else {
            submitQuickApplication();
          }
        }
      });
    }

    // Close popup buttons
    document.querySelectorAll('.close-popup').forEach(button => {
      button.addEventListener('click', function () {
        $.magnificPopup.close();
      });
    });

    // Finance Calculator Button
    const showCalculatorBtn = document.getElementById('showCalculatorBtn');
    if (showCalculatorBtn) {
      showCalculatorBtn.addEventListener('click', function () {
        $.magnificPopup.open({
          items: {
            src: '#finance-calculator-modal',
            type: 'inline'
          },
          mainClass: 'mfp-fade',
          removalDelay: 300
        });
      });
    }

    // Function to navigate to specific step
    function goToStep(step) {
      // Hide current step
      document.getElementById(`step${currentStep}`)?.classList.remove('active');

      // Update progress steps
      progressSteps.forEach((progressStep, index) => {
        if (index + 1 < step) {
          progressStep.classList.add('completed');
          progressStep.classList.remove('active');
        } else if (index + 1 === step) {
          progressStep.classList.add('active');
          progressStep.classList.remove('completed');
        } else {
          progressStep.classList.remove('active', 'completed');
        }
      });

      // Show new step
      document.getElementById(`step${step}`)?.classList.add('active');
      currentStep = step;

      // Scroll to top of form
      const wizardForms = document.querySelector('.wizard-forms');
      if (wizardForms) {
        wizardForms.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      updateProgress();
    }

    // Function to validate current step
    function validateStep(step) {
      const currentStepElement = document.getElementById(`step${step}`);
      if (!currentStepElement) return true;

      // Remove any existing invalid classes
      const fields = currentStepElement.querySelectorAll('.is-invalid');
      fields.forEach(field => {
        field.classList.remove('is-invalid');
        const errorDiv = field.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('invalid-feedback')) {
          errorDiv.remove();
        }
      });

      // Always return true since fields are not required
      return true;
    }

    // Function to toggle joint applicant sections
    function toggleJointApplicantSections(show) {
      jointApplicantSections.forEach(section => {
        section.style.display = show ? 'block' : 'none';
      });
    }

    // Function to update progress bar
    function updateProgress() {
      const progressBar = document.querySelector('.progress-bar');
      const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
      if (progressBar) {
        progressBar.style.background = `linear-gradient(to right, var(--theme) ${percentage}%, var(--border) ${percentage}%)`;
      }
    }

    // Function to validate quick form
    function validateQuickForm() {
      const quickForm = document.getElementById('quickApplicationForm');
      if (!quickForm) return false;

      const requiredFields = quickForm.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('is-invalid');

          // Add validation message if not exists
          if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('invalid-feedback')) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'invalid-feedback';
            errorDiv.textContent = 'This field is required';
            field.parentNode.appendChild(errorDiv);
          }
        } else {
          field.classList.remove('is-invalid');
          const errorDiv = field.nextElementSibling;
          if (errorDiv && errorDiv.classList.contains('invalid-feedback')) {
            errorDiv.remove();
          }
        }
      });

      // Validate email format
      const emailField = quickForm.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          isValid = false;
          emailField.classList.add('is-invalid');
          if (!emailField.nextElementSibling || !emailField.nextElementSibling.classList.contains('invalid-feedback')) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'invalid-feedback';
            errorDiv.textContent = 'Please enter a valid email address';
            emailField.parentNode.appendChild(errorDiv);
          }
        }
      }

      // Validate date fields
      const dateFields = quickForm.querySelectorAll('input[type="date"]');
      dateFields.forEach(field => {
        if (field.hasAttribute('required') && !field.value) {
          isValid = false;
          field.classList.add('is-invalid');
          if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('invalid-feedback')) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'invalid-feedback';
            errorDiv.textContent = 'Please select a date';
            field.parentNode.appendChild(errorDiv);
          }
        }
      });

      if (!isValid) {
        // Scroll to first invalid field
        const firstInvalid = quickForm.querySelector('.is-invalid');
        if (firstInvalid) {
          firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return false;
      }

      return true;
    }

    // Function to submit quick application
    function submitQuickApplication() {
      // Collect form data
      const formData = new FormData();
      const quickForm = document.getElementById('quickApplicationForm');
      const formFields = quickForm.querySelectorAll('input, select, textarea');

      formFields.forEach(field => {
        if (field.name && field.name.startsWith('quick_')) {
          if (field.type === 'file' && field.files.length > 0) {
            formData.append(field.name, field.files[0]);
          } else {
            formData.append(field.name, field.value);
          }
        }
      });

      // Add privacy agreement to form data
      formData.append('privacy_agreed', 'yes');

      // Show loading state
      const confirmBtn = document.getElementById('confirmPrivacyBtn');
      const originalText = confirmBtn.innerHTML;
      confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processing...';
      confirmBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        // Close privacy popup
        $.magnificPopup.close();

        // Show success popup
        setTimeout(() => {
          $.magnificPopup.open({
            items: {
              src: '#success-popup',
              type: 'inline'
            }
          });
        }, 300);

        // Reset quick form
        quickForm.querySelectorAll('input, select, textarea').forEach(field => {
          if (field.type !== 'submit' && field.type !== 'button' && field.type !== 'file') {
            field.value = '';
          }
          if (field.type === 'file') {
            field.value = '';
          }
        });

        // Reset button state
        confirmBtn.innerHTML = originalText;
        confirmBtn.disabled = false;
      }, 1500);
    }

    // Function to submit full application
    function submitFullApplication() {
      // Collect form data
      const formData = new FormData();

      // Add all form fields from full form
      const formFields = document.querySelectorAll('#fullApplicationForm input, #fullApplicationForm select, #fullApplicationForm textarea');
      formFields.forEach(field => {
        if (field.name) {
          if (field.type === 'file' && field.files.length > 0) {
            formData.append(field.name, field.files[0]);
          } else {
            formData.append(field.name, field.value);
          }
        }
      });

      // Add privacy agreement to form data
      formData.append('privacy_agreed', 'yes');

      // Show loading state
      const confirmBtn = document.getElementById('confirmPrivacyBtn');
      const originalText = confirmBtn.innerHTML;
      confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processing...';
      confirmBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        // Close privacy popup
        $.magnificPopup.close();

        // Show success popup
        setTimeout(() => {
          $.magnificPopup.open({
            items: {
              src: '#success-popup',
              type: 'inline'
            }
          });
        }, 300);

        // Reset full form after success
        setTimeout(() => {
          window.location.reload();
        }, 3000);

        // Reset button state
        confirmBtn.innerHTML = originalText;
        confirmBtn.disabled = false;
      }, 1500);
    }

    // Add event listeners for dynamic form elements
    document.addEventListener('click', function (e) {
      // Add income row
      if (e.target.classList.contains('btn-outline-theme') && e.target.textContent.includes('Add Income')) {
        e.preventDefault();
        const table = e.target.closest('.table-responsive')?.querySelector('tbody');
        if (table && table.rows.length > 0) {
          const newRow = table.rows[0].cloneNode(true);
          table.appendChild(newRow);
        }
      }

      // Add expense row
      if (e.target.classList.contains('btn-outline-theme') && e.target.textContent.includes('Add Expense')) {
        e.preventDefault();
        const expenseSection = e.target.closest('.expenditure-section');
        const expenseRow = expenseSection.querySelector('.row').cloneNode(true);
        expenseSection.insertBefore(expenseRow, e.target);
      }

      // Add reference
      if (e.target.classList.contains('btn-outline-theme') && e.target.textContent.includes('Add Reference')) {
        e.preventDefault();
        const referenceSection = e.target.closest('.reference-section');
        const referenceClone = referenceSection.cloneNode(true);
        referenceSection.parentNode.insertBefore(referenceClone, referenceSection.nextSibling);
      }
    });

    // Function to switch from quick to full form
    window.switchToFullForm = function () {
      if (fullAppBtn) {
        fullAppBtn.click();
      }
    };

    // Make goToStep function available globally
    window.goToStep = goToStep;
  }


  // Functionalities for car details page
  function initCarDetailsPage() {
    // Early exit if we're not on a car details page
    if (!document.querySelector('.car-thumbnails-vertical') &&
      !document.getElementById('mainCarImage')) {
      return;
    }

    // 1. Magnific Popup for image gallery (with your custom arrow + zoom)
    $('.image-popup-gallery').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
        arrowMarkup: '<button title="%title%" type="button" class="swiper mfp-arrow mfp-arrow-%dir%"><i class="fa-solid fa-chevron-%dir%"></i></button>',
        tPrev: 'Previous (Left arrow key)',
        tNext: 'Next (Right arrow key)',
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out'
      },
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = 'mfp-zoom-in';
        }
      }
    });

    // 2. Thumbnail → main image switching
    const mainCarImage = document.getElementById('mainCarImage');
    const mainImageLink = document.querySelector('.main-car-image');
    const thumbnailItems = document.querySelectorAll('.car-thumbnails-vertical .thumbnail-item');

    if (!mainCarImage || !thumbnailItems.length) return;

    thumbnailItems.forEach(thumb => {
      thumb.addEventListener('click', function (e) {
        // Let Magnific Popup handle navigation/zoom — we just update preview

        // Remove active from all
        thumbnailItems.forEach(item => item.classList.remove('active'));

        // Activate clicked one
        this.classList.add('active');

        // Update main preview image
        const newSrc = this.getAttribute('href');
        if (newSrc) {
          mainCarImage.src = newSrc;
          if (mainImageLink) mainImageLink.href = newSrc;
        }

        // Smooth scroll thumbnail into view (nice UX)
        this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });

    // 3. Enquiry form (very basic version – enhance later with fetch/axios if needed)
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
      enquiryForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // ← Here you can later add real validation + AJAX/fetch
        // For now: simple feedback
        alert('Enquiry submitted successfully!');

        // Close modal (assuming Bootstrap modal)
        const modalEl = document.getElementById('enquiryModal');
        if (modalEl) {
          bootstrap.Modal.getInstance(modalEl)?.hide();
        }
      });
    }

    // 4. Optional: tooltips (already using Bootstrap)
    $('[data-bs-toggle="tooltip"]').tooltip();
  }

  // Functionalities for car stock page
  function initMobileFiltersToggle() {
    // Early return if elements don't exist (not on car-stock page)
    const toggleBtn = document.getElementById('mobileFiltersToggle');
    const hiddenPanel = document.querySelector('.mobile-hidden-filters');

    if (!toggleBtn || !hiddenPanel) {
      return;
    }

    const textSpan = toggleBtn.querySelector('span');
    const icon = toggleBtn.querySelector('i');

    // Safety check — if text/icon missing → still allow toggle, but no text/icon change
    if (!textSpan || !icon) {
      console.warn('Mobile filters toggle: span or icon element missing');
    }

    toggleBtn.addEventListener('click', function () {
      hiddenPanel.classList.toggle('active');

      const isOpen = hiddenPanel.classList.contains('active');

      // Update text
      if (textSpan) {
        textSpan.textContent = isOpen ? 'Hide Filters' : 'Filters';
      }

      // Update icon (Font Awesome classes)
      if (icon) {
        icon.className = isOpen
          ? 'fas fa-times'
          : 'fas fa-filter';
      }

      // Optional: accessibility improvement
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Optional: set initial ARIA state
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-controls', 'mobile-hidden-filters'); // if it has an id
  }

  // Initialize finance wizard when document is ready
  $(document).ready(function () {

    initializeFinanceWizard();

    // Car details page
    initCarDetailsPage();

    // Car stock listing page
    initMobileFiltersToggle();

  });


  loader();
})(jQuery); // End jQuery

// Featured Vehicles Swiper
if ($(".featured-vehicles-swiper").length > 0) {
  const featuredVehiclesSwiper = new Swiper(".featured-vehicles-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
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