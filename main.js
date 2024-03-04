document.addEventListener("DOMContentLoaded", function() {
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
});
