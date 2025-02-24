document.addEventListener("DOMContentLoaded", function () {
    // Initialize the main slider
    let index = 0;
    const images = document.querySelectorAll(".slider img");
    function changeImage() {
      images.forEach(img => img.classList.remove("active"));
      images[index].classList.add("active");
      index = (index + 1) % images.length;
    }
    changeImage();
    setInterval(changeImage, 3000);
  });
  
  function initializeSlider(sliderClass) {
    document.addEventListener("DOMContentLoaded", function () {
      let index = 0;
      const images = document.querySelectorAll(`.${sliderClass} img`);
      function changeImage() {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
        index = (index + 1) % images.length;
      }
      changeImage();
      setInterval(changeImage, 3000);
    });
  }
  
  initializeSlider("project-slider");
  initializeSlider("service-slider");
  