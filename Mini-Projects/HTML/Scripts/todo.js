let input = document.querySelector('.js-input-field');
let btn = document.querySelector('.js-button');
let display = document.querySelector('.js-display');
let todoItem = [''];

btn.addEventListener('click', () => {
   let date = document.querySelector('.js-date-field');
   let dateValue = date.value;
    let inputElement = input.value;
      if (inputElement){
       todoItem.forEach((item) =>{
        let html = `<div class="js-main-container">
        <div class="js-item">${inputElement}</div>
        <div class="js-item">${dateValue}</div>
        <button class="js-delete-btn">Delete</button>
        </div>`;
        display.innerHTML += html;
        input.value = '';
       })
  }
})







