function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const backgroundColorSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", function () {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  backgroundColorSpan.textContent = randomColor;
});
