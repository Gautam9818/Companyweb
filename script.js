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

  // Initialize other sliders
  function initializeSlider(sliderClass) {
    let index = 0;
    const images = document.querySelectorAll(`.${sliderClass} img`);
    function changeImage() {
      images.forEach(img => img.classList.remove("active"));
      images[index].classList.add("active");
      index = (index + 1) % images.length;
    }
    changeImage();
    setInterval(changeImage, 3000);
  }
  
  initializeSlider("project-slider");
  initializeSlider("service-slider");

  // Contact form event listener
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
      };

      fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      .then(response => response.text())
      .then(data => {
        document.getElementById("response-message").textContent = data;
      })
      .catch(error => console.error("Error:", error));
    });
  } else {
    console.error('Contact form not found!');
  }
});
