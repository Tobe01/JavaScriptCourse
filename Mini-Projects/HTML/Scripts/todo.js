let input = document.querySelector('.js-input-field');
let btn = document.querySelector('.js-button');
let display = document.querySelector('.js-display');
let todoItem = ['make dinner', 'wash dishes'];


btn.addEventListener('click', () => {
   let date = document.querySelector('.js-date-field');
   let dateValue = date.value;
    let inputElement = input.value;
      if (inputElement){
       todoItem.forEach((item) =>{
        let html = `<p>${inputElement} ${dateValue}<button class="js-delete-btn" data-index="${index}>Delete</button></p>`;
        display.innerHTML += html;
        input.value = '';
       })
  }
})





