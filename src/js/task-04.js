
let counterValue = 0;

const counter = document.querySelector("#counter");

const downCounter = document.querySelector('[data-action="decrement"]')

const upCounter = document.querySelector('[data-action="increment"]');

downCounter.addEventListener('click', () => {
    counterValue -= 1;
    updateCounterView();
  });
  
  upCounter.addEventListener('click', () => {
    counterValue += 1;
    updateCounterView();
  });

  const counterView = document.getElementById('value');

  function updateCounterView() {
    counterView.textContent = counterValue;
  }