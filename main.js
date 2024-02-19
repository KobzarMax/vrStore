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

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    centeredSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
