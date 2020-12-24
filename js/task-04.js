const btnIncrement = document.querySelector(
  'button[data-action = "increment"]',
);
const btnDecrement = document.querySelector(
  'button[data-action = "decrement"]',
);

const valueCounter = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  valueCounter.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  valueCounter.textContent = counterValue;
};

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);
