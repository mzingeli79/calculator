const calculator = document.querySelector('.wrapper');
const keys = document.querySelector('.buttons');
const display = document.querySelector('#display');


keys.addEventListener('click', event =>{
    const key = event.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayNum = display.textContent; 
    if(event.target.matches('.number')||event.target.matches('.operator')){
       display.textContent = event.target.textContent;
    }

    if(!action){
        if(displayNum === '0'){
            display.textContent = keyContent
        }else {
            display.textContent = displayNum + keyContent
        }
    }
    if(action === 'decimal') {
        display.textContent = displayNum + '.'
    }
    if(action === 'clear'){
        display.textContent = 0;
    }
});
