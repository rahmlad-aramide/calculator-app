'use-strict';
const body = document.querySelector('body');
const toggler = document.querySelector('.toggler');
// const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.keypad');
const button = document.querySelector('.button');
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const screen = document.querySelector('.screen-content');
const display = document.querySelector('.screen-content');


keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    // Do something
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent
    const displayedNum = display.textContent
    if (!action) {
      console.log('number key!');
      if (displayedNum === '0') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
    }
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      console.log('operator key!')
    }
    if (action === 'decimal') {
      console.log('decimal key!')
      display.textContent = displayedNum + '.';
    }
    
    if (action === 'reset') {
      console.log('reset key!')
    }

    if (action === 'delete') {
      console.log('delete key!')
    }
    
    if (action === 'calculate') {
      console.log('equal key!')
    }
  }
});


// let input1 = [];
// numbers.forEach((number) => { 
//   number.addEventListener('click', function(){
//     let num = number.innerText;
//     // console.log(Number(num))
//     const value = Number(num)
//      input1.push(value);
    
//      let rawdigit = input1.join('');
//      let digit = Number(rawdigit).toLocaleString();
//     console.log(digit)
//     screen.innerText= digit;
 

// operators.forEach((operator) =>{
//   operator.addEventListener('click', function(digit){
//     let operate = operator.innerText;
//     console.log(operate);
//     screen.innerText = `${(digit)}${operate}`;


//     let input2 = [];
// numbers.forEach((number) => { 
//   number.addEventListener('click', function(){
//     let num = number.innerText;
//     // console.log(Number(num))
//     const value = Number(num)
//      input2.push(value);
    
//      let rawdigit = input2.join('');
//      let digit = Number(rawdigit).toLocaleString();
//     console.log(digit)
//     screen.innerText= digit;
//   })
//   });

//   })
// });

// })
// });



// Toggler Button
button.addEventListener('click', function(){
  if(button.classList.contains('first')){
    button.classList.remove('first')
    button.classList.add('second');
    body.classList.remove('theme3');
    body.classList.remove('theme1');
    body.classList.add('theme2');
  } else
  if(button.classList.contains('second')){
    button.classList.remove('second')
    button.classList.add('third');
    body.classList.remove('theme2');
    body.classList.remove('theme1');
    body.classList.add('theme3');
  }
  else if(button.classList.contains('third')) {
    button.classList.remove('third');
    button.classList.add('first');
    body.classList.remove('theme2');
    body.classList.remove('theme3');
    body.classList.add('theme1');
  }
  else {
    button.classList.remove('first');
    button.classList.remove('second');
    button.classList.remove('third');
    button.classList.remove('theme2');
    button.classList.remove('theme3');
  }
});