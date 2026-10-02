/* =========================================================
   DRIVELUX INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     CATEGORY CAROUSEL
  ======================================================= */

  const track = document.getElementById("categoryTrack");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (track && nextBtn && prevBtn) {

    let position = 0;

    const getVisibleItems = () => {

      if (window.innerWidth <= 767) {
        return 1;
      }

      if (window.innerWidth <= 991) {
        return 3;
      }

      return 4;
    };


    const getMaxPosition = () => {

      const cards = track.children;

      const visible = getVisibleItems();

      return Math.max(
        0,
        cards.length - visible
      );
    };


    const moveCarousel = () => {

      const cards = track.children;

      if (!cards.length) return;

      const gap = 18;

      const cardWidth =
        cards[0].getBoundingClientRect().width + gap;

      track.style.transform =
        `translateX(-${position * cardWidth}px)`;

      updateButtons();
    };


    const updateButtons = () => {

      prevBtn.disabled = position <= 0;

      nextBtn.disabled =
        position >= getMaxPosition();

      prevBtn.style.opacity =
        position <= 0 ? "0.45" : "1";

      nextBtn.style.opacity =
        position >= getMaxPosition() ? "0.45" : "1";
    };


    nextBtn.addEventListener("click", () => {

      const max =
        getMaxPosition();

      if (position < max) {
        position++;
        moveCarousel();
      }

    });


    prevBtn.addEventListener("click", () => {

      if (position > 0) {
        position--;
        moveCarousel();
      }

    });


    window.addEventListener("resize", () => {

      position =
        Math.min(
          position,
          getMaxPosition()
        );

      moveCarousel();

    });


    moveCarousel();

  }


  /* =======================================================
     HEART BUTTONS
  ======================================================= */

  const heartButtons =
    document.querySelectorAll(".heart-btn");

  heartButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const icon =
        button.querySelector("i");

      icon.classList.toggle("fa-regular");
      icon.classList.toggle("fa-solid");

      button.classList.toggle("liked");

    });

  });


  /* =======================================================
     SEARCH TABS
  ======================================================= */

  const searchTabs =
    document.querySelectorAll(".search-tab");

  searchTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      searchTabs.forEach((item) => {
        item.classList.remove("active");
      });

      tab.classList.add("active");

    });

  });


  /* =======================================================
     SEARCH BUTTON
  ======================================================= */

  const searchButton =
    document.querySelector(".search-button");

  if (searchButton) {

    searchButton.addEventListener("click", () => {

      searchButton.innerHTML =
        `<i class="fa-solid fa-spinner fa-spin"></i> Searching`;

      setTimeout(() => {

        searchButton.innerHTML =
          `<i class="fa-solid fa-magnifying-glass"></i> Search`;

      }, 900);

    });

  }


  /* =======================================================
     NAVBAR SCROLL EFFECT
  ======================================================= */

  const navbar =
    document.querySelector(".main-navbar");

  window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 40) {

      navbar.style.background =
        "rgba(8, 10, 18, 0.92)";

    } else {

      navbar.style.background =
        "rgba(8, 10, 18, 0.35)";

    }

  });


  /* =======================================================
     CAR CARD BUTTON
  ======================================================= */

  const cardArrows =
    document.querySelectorAll(".card-arrow");

  cardArrows.forEach((button) => {

    button.addEventListener("click", () => {

      const card =
        button.closest(".car-card");

      if (!card) return;

      card.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    });

  });

});