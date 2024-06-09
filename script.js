const NUMBERS = [1,2,3,4,5,6,7,8,9,0];
const OPERATORS = ["+", "-", "*", "/", "=", "CA"];
let display_value = 0;

function showNumber(e) {
    let area = document.querySelector(".display");
    area.textContent = area.textContent + e.target.textContent; 
    display_value = area.textContent;
}

function makeButtons(NUMBERS, OPERATORS) {
    const numbers_div = document.querySelector(".numbers");
    const operators_div = document.querySelector(".operators");
    
    NUMBERS.forEach(number => {
        let button = document.createElement("button");
        button.classList.toggle("number");
        button.textContent = number;
        button.addEventListener("click", e => {showNumber(e)});
        numbers_div.appendChild(button);
    });

    OPERATORS.forEach(operator => {
        let button = document.createElement("button");
        button.classList.toggle("operator");
        button.id = operator;
        button.textContent = operator;
        button.addEventListener("click", e => {showNumber(e)});
        operators_div.appendChild(button);
    });
}
makeButtons(NUMBERS, OPERATORS);
document.querySelector("#CA").addEventListener("click", (e) => {
    let area = document.querySelector(".display");
    area.textContent = "";
    display_value = area.textContent;
});


function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':{return add(a, b);}
        case '-':{return subtract(a, b);}
        case '*':{return multiply(a, b);}
        case '/':{return divide(a, b);}
    }
}

let a = 0;
let b = 0;