const sliders = document.querySelectorAll(".slider");

function slideColorBackground(sliderElement) {
  sliderElement.addEventListener("input", () => {
    let value =
      ((sliderElement.value - sliderElement.min) /
        (sliderElement.max - sliderElement.min)) *
      100;
    sliderElement.style.background = `linear-gradient(to right, #4a56c2 0%, #4a56c2 ${value}%, white ${value}%, white 100%)`;
  });
}

sliders.forEach(sliderElement => slideColorBackground(sliderElement));
