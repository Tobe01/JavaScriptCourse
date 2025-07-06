function calculateCost(){
 
  let inputElement = document.querySelector('.js-input');

  let display = document.querySelector('.js-display');

  let value = Number(inputElement.value);

  let shipping = 10;

  if (value < 40 && shipping === 10){
    display.innerText = `$${value + shipping}`;
  } else {
    display.innerText = `$${value}`;
  }

  if(shipping === 10 && inputElement.value === ''){
    display.innerText = '';
  }

  if(value < 0 && shipping === 10){
    display.innerText = 'Error: cost cannot be less tha $0';

    display.classList.add('js-error-message')
  }

  inputElement.value = '';
}
