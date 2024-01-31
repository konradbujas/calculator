const currentNumber = document.querySelector('.currentNumber');
console.log(currentNumber);
const previousNumber = document.querySelector('.previousNumber p');
console.log(previousNumber);

const mathSign = document.querySelector('.mathSign');

const operatorsButtons = document.querySelectorAll('.operator');

const numbersButtons = document.querySelectorAll('.number');

const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');

const calculatorHistory = document.querySelector('.history');

const historyBtn = document.querySelector('.history-btn');



function displayNumbers () {
    if(this.textContent === "," && currentNumber.innerHTML.includes(',')) return;
    if(this.textContent === "," && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0,'
    currentNumber.innerHTML += this.textContent;
}




function operate () {
    if(currentNumber.innerHTML === '' && this.textContent === '-'){currentNumber.innerHTML = '-';
    return;
    }

    else if (currentNumber.innerHTML === '') {
        return;
    }

    if (mathSign.innerHTML !== '') {
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}




function showResult () {
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;
    
    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTM);
    let operator = Number(mathSign.innerHTML);
    console.log(`zmienna b jest typu ${typeof b}`);
    console.log(`operator jest typu ${typeof operator} i jest to ${mathSign.innerHTML}`);

    const c = 2 + 6 ;
    console.log(c);
    switch(operator) {
        case '+':
            result = a + b;
        break;
        case '-':
            result = b - a;
        break;
        case ':':
            result = b / a;
        break;
        case 'x':
            result = b * a;
        break;
        case '2^':
            result = b ** a;
        break;
        
    }
    console.log(typeof result);
    currentNumber.innerHTML = Number(result);
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}





function clearScreen () {
    return currentNumber.innerHTML = '';
}




function clearHistory () {}












// Nasłuchiwanie przycisków

operatorsButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResult);

clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => button.addEventListener('click', displayNumbers));

historyBtn.addEventListener('click', clearHistory);