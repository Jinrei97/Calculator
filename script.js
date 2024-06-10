const NUMBERS = [1,2,3,4,5,6,7,8,9,0];
const OPERATORS = ["+", "-", "*", "/"];
const SPECIAL = ["=", "CA"];
let display_value = 0;

function showNumber(e) {
    let area = document.querySelector(".display");
    area.textContent = area.textContent + e.target.textContent; 
    display_value = area.textContent;
}

function makeButtons(NUMBERS, OPERATORS) {
    const numbers_div = document.querySelector(".numbers");
    const operators_div = document.querySelector(".operators");
    let progressive_id = 1;
    
    NUMBERS.forEach(number => {
        let button = document.createElement("button");
        button.classList.toggle("number");
        button.textContent = number;
        button.id = "id" + progressive_id;
        button.addEventListener("click", e => {showNumber(e)});
        numbers_div.appendChild(button);
        progressive_id += 1;
    });

    OPERATORS.forEach(operator => {
        let button = document.createElement("button");
        button.classList.toggle("operator");
        button.textContent = operator;
        button.id = "id" + progressive_id;
        button.addEventListener("click", e => {showNumber(e)});
        operators_div.appendChild(button);
        progressive_id += 1;
    });

    SPECIAL.forEach(special => {
        let button = document.createElement("button");
        button.classList.toggle("operator");
        button.textContent = special;
        button.id = "id" + progressive_id;
        operators_div.appendChild(button);
        progressive_id += 1;
    });
    SPECIAL.forEach(special => {
        switch (special) {
            case "=": {
                document.querySelector("#id15").addEventListener("click", (e) => {
                let area = document.querySelector(".display");
                let regex = new RegExp("([0-9]+)(.)([0-9]+)")
                let values = display_value.match(regex).slice(1); // [a, operator, b]
                area.textContent = operate(values[0], values[2], values[1]);
                display_value = area.textContent;
            });
            }
            case "CA": {
                document.querySelector("#id16").addEventListener("click", (e) => {
                    let area = document.querySelector(".display");
                    area.textContent = "";
                    display_value = area.textContent;
                });
                break;
            }
        }
    });
}
makeButtons(NUMBERS, OPERATORS);


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