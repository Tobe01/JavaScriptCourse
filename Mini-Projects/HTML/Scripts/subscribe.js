function updateBtn(){
  let buttonElement = document.querySelector('.js-btn');

    if (buttonElement.innerText === 'Subscribe'){
      buttonElement.innerText = 'Subscribed';
    } else {
      buttonElement.innerText = 'Subscribe';
    }
}
