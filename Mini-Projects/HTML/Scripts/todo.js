let input = document.querySelector('.js-input-field');
let btn = document.querySelector('.js-button');
let display = document.querySelector('.js-display');
let todoItem = [];
let itemHtml = ''

btn.addEventListener('click', () => {
    let inputElement = input.value;
      if (inputElement){
       todoItem.push(inputElement);
       display.innerHTML = todoItem;

       input.value = '';
  }
})





