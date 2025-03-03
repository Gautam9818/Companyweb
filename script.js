

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

// slider upper vala 

document.addEventListener("DOMContentLoaded", function () {
  
  // 🟢 Service Slider (Upper One)
  const serviceSliderWrapper = document.querySelector(".service-sliderone");
  if (serviceSliderWrapper) {
      let serviceSliderIndex = 0;
      const serviceImages = document.querySelectorAll(".service-sliderone img");
      const totalServiceSlides = serviceImages.length;
      const servicePrevBtn = document.querySelector(".slider-containerone .prev");
      const serviceNextBtn = document.querySelector(".slider-containerone .next");

      function updateServiceSlider() {
          serviceSliderWrapper.style.transform = `translateX(-${serviceSliderIndex * 100}%)`;
      }

      function moveServiceSlider(direction) {
          serviceSliderIndex = (serviceSliderIndex + direction + totalServiceSlides) % totalServiceSlides;
          updateServiceSlider();
      }

      // 🟢 Add event listeners only if buttons exist
      if (servicePrevBtn && serviceNextBtn) {
          servicePrevBtn.addEventListener("click", () => moveServiceSlider(-1));
          serviceNextBtn.addEventListener("click", () => moveServiceSlider(1));
      }

      // 🟢 Auto-slide every 3 seconds
      setInterval(() => moveServiceSlider(1), 3000);

      // 🟢 Initialize slider position
      updateServiceSlider();
  }
})
  
  // 🟢 Project Slider (Lower One)
  function openLightbox(imgElement) {
    document.getElementById('lightbox-img').src = imgElement.src;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
