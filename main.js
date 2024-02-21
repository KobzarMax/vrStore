/* SLIDE UP */
let slideUp = (target, duration = 300) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.border = "none";

  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("border");
  }, duration);
};
/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "grid";
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.border = "none";

  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  target.style.removeProperty("border");

  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("border");
  }, duration);
};

function addAccordionFunctionality(container) {
  const items = container.querySelectorAll(".faq-answer-item");
  const headers = container.querySelectorAll(".faq-answer-header");

  headers.forEach((header, index) => {
    header.addEventListener("click", headerClickHandler);
  });
}

function headerClickHandler() {
  const parent = this.parentNode;
  const content = parent.querySelector(".faq-answer-content");

  if (!parent.classList.contains("active")) {
    parent.classList.add("active");
    slideDown(content);
  } else {
    parent.classList.remove("active");
    slideUp(content);
  }

  const items = parent.parentNode.querySelectorAll(".faq-answer-item");
  items.forEach((item, i) => {
    const itemContent = item.querySelector(".faq-answer-content");
    if (item !== parent && item.classList.contains("active")) {
      slideUp(itemContent);
      item.classList.remove("active");
    }
  });
}

const faqTabsAnswers = document.querySelectorAll(".faq-answers-container");

function changeTab(tabIndex) {
  faqTabsAnswers.forEach((container) => {
    container.style.display = "none";
  });

  if (faqTabsAnswers[tabIndex - 1]) {
    faqTabsAnswers[tabIndex - 1].style.display = "block";
    addAccordionFunctionality(faqTabsAnswers[tabIndex - 1]);
  }
}

function initFAQ() {
  changeTab(1);
}

initFAQ();

const header = document.querySelector(".header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 230) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

/* SLIDE UP */
let swiperActiveSlideUp = (target, duration = 500) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = 390 + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;

  window.setTimeout(() => {
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

let swiperNextToActiveSlideUp = (target, duration = 500) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = 360 + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;

  window.setTimeout(() => {
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

let swiperlastSlideUp = (target, duration = 500) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = 320 + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;

  window.setTimeout(() => {
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".pop-games-swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
      372: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      440: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },

    // If we need pagination
    pagination: {
      el: ".pop-games-swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".pop-games-swiper-button-next",
      prevEl: ".pop-games-swiper-button-prev",
    },

    on: {
      slideChange: function () {
        const newActiveSlideIndex = this.activeIndex;
        const newActiveSlide = this.slides[newActiveSlideIndex];
        swiperActiveSlideUp(newActiveSlide);

        // Get the new previous slide
        const newPrevSlide = this.slides[+newActiveSlideIndex - 1];
        if (newPrevSlide) {
          swiperNextToActiveSlideUp(newPrevSlide);
        }

        // Get the new next slide
        const newNextSlide = this.slides[+newActiveSlideIndex + 1];
        if (newNextSlide) {
          swiperNextToActiveSlideUp(newNextSlide);
        }
        // Get the new previous slide
        const newPrevPrevSlide = this.slides[+newActiveSlideIndex - 2];
        if (newPrevPrevSlide) {
          swiperlastSlideUp(newPrevPrevSlide);
        }

        // Get the new next slide
        const newNextNextSlide = this.slides[+newActiveSlideIndex + 2];
        if (newNextNextSlide) {
          swiperlastSlideUp(newNextNextSlide);
        }
      },
    },
  });

  new Swiper(".feedback-swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },

    // If we need pagination
    pagination: {
      el: ".feedback-swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".feedback-swiper-button-next",
      prevEl: ".feedback-swiper-button-prev",
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".header-nav-link");

  const burger = document.querySelector(".menu-icon");
  const mobileNav = document.querySelector(".header-wrapper");

  if (burger) {
    burger.addEventListener("click", function (e) {
      burger.classList.toggle("_active");
      mobileNav.classList.toggle("_active");
      document.body.classList.toggle("_lock");
    });
  }
});

const overlay = document.querySelector(".overlay");
const offerItems = document.querySelectorAll(".offer-list-item");
const closeModal = document.getElementById("close-modal");

offerItems.forEach((offerItem) => {
  offerItem.addEventListener("click", () => {
    overlay.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  });
});

closeModal.addEventListener("click", () => {
  overlay.classList.toggle("_active");
  document.body.classList.toggle("_lock");
});