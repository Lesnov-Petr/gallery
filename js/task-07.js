const fontSizeControleRef = document.querySelector('#font-size-control');
const fontSizeTextRef = document.querySelector('#text');

fontSizeControleRef.addEventListener('input', event => {
  fontSizeTextRef.style.fontSize = event.target.value + 'px';
});
