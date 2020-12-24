const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', event => {
  if (
    event.target.value.length === Number(inputRef.getAttribute('data-length'))
  ) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
});
