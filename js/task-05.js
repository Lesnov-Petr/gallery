const inputRef = document.querySelector('#name-input');
const isSpanValue = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  isSpanValue.textContent =
    event.target.value !== '' ? event.target.value : 'незнакомец';
});
