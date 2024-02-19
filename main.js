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

$(document).ready(function() {
  // Initialize Slick slider
  var slider = $('.pop-games-slider').slick({
    prevArrow: '<button class="slide-arrow next-arrow"><img src="./asset/arrow.svg" alt=""></button>',
    nextArrow: '<button class="slide-arrow prev-arrow"><img src="./asset/arrow.svg" alt=""></button>',
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
    ],
    arrows: true,
    dots: true
  });

  function addAdditionalClassToClosestSlides() {
    const slides = document.querySelectorAll('.pop-games-slider .slick-slide');

    slides.forEach((slide) => slide.classList.remove('closest-slide'))

    const centerSlideIndex = document.querySelector('.pop-games-slider .slick-current').getAttribute('data-slick-index');

    const prevSlideIndex = Number(centerSlideIndex - 1);
    const prevPrevSlideIndex = Number(prevSlideIndex - 1);

    const prevSlide = Array.from(slides).find((slide) => parseInt(slide.getAttribute('data-slick-index')) === prevSlideIndex);
    const prevPrevSlide = Array.from(slides).find((slide) => parseInt(slide.getAttribute('data-slick-index')) === prevPrevSlideIndex);

    const nextSlideIndex = Number(centerSlideIndex + 1);
    const nextNextSlideIndex = Number(nextSlideIndex + 1);

    const nextSlide = Array.from(slides).find((slide) => parseInt(slide.getAttribute('data-slick-index')) === nextSlideIndex);
    const nextNextSlide = Array.from(slides).find((slide) => parseInt(slide.getAttribute('data-slick-index')) === nextNextSlideIndex);

    console.log(prevSlide, nextSlide, prevPrevSlide, nextNextSlide)

    prevSlide.classList.add('closest-slide');
    nextSlide.classList.add('closest-slide');
    prevPrevSlide.classList.add('farest-slide');
    nextNextSlide.classList.add('farest-slide');
  }

  // Call the function initially
  addAdditionalClassToClosestSlides();

  // Listen to the afterChange event and call the function
  slider.on('afterChange', function() {
    addAdditionalClassToClosestSlides();
  });
});