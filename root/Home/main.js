document.addEventListener("DOMContentLoaded", function() {
  // Codice per la galleria delle immagini
  const galleryContainer = document.querySelector(".gallery-container");
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");
  const galleryImages = document.querySelector(".gallery-images");
  const imageWidth = galleryImages.firstElementChild.clientWidth;
  let currentIndex = 0;

  prevButton.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + galleryImages.children.length) % galleryImages.children.length;
    updateGallery();
  });

  nextButton.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % galleryImages.children.length;
    updateGallery();
  });

  function updateGallery() {
    const translateValue = -currentIndex * imageWidth;
    galleryContainer.style.transform = `translateX(${translateValue}px)`;
  }

  // Codice per animare la sezione "IL NOSTRO STRUMENTO"
  const mainTitle = document.getElementById("main-title");

  mainTitle.addEventListener("animationend", function() {
    const subtitle = document.getElementById("subtitle");
    subtitle.style.animationDelay = "0.5s"; // Ritardo di 0.5 secondi

    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      section.removeAttribute("hidden");
    });

    const footer = document.querySelector("footer");
    footer.removeAttribute("hidden");
  });
});
