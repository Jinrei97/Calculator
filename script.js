const NUMBERS = [1,2,3,4,5,6,7,8,9,0];
const OPERATORS = ["+", "-", "*", "/"];
const SPECIAL = [".", "=", "CA", "Back"];
let display_value = "";

function showNumber(e) {
    let area = document.querySelector(".display");
    area.value = area.value + e.target.textContent; 
    display_value = area.value;
}

function isDecimal(number){
    stringNumber = String(number);
    let regex = new RegExp(".[0-9]+");
    return (stringNumber.match(regex) !== null); 
}

function roundDecimals(number) {
    stringNumber = String(number);
    let regex = new RegExp(".[0-9]+");
    if (stringNumber.match(regex) !== null) {
        return Math.round(number * 100) / 100;
    } else {
        return number;
    }
}



function makeButtons(NUMBERS, OPERATORS) {
    const numbers_div = document.querySelector(".numbers");
    const operators_div = document.querySelector(".operators");
    let progressive_id = 1;

    function makeGroup(arr, classe, clickEvent, div) {
        arr.forEach(element => {
                let button = document.createElement("button");
                button.classList.toggle(classe);
                button.textContent = element;
                button.id = "id" + progressive_id;
                if (clickEvent) {
                    button.addEventListener("click", e => {clickEvent(e)});
                }
                div.appendChild(button);
                progressive_id += 1;
            });
    }
    
    makeGroup(NUMBERS, "number", showNumber, numbers_div);
    makeGroup(OPERATORS, "operator", showNumber, operators_div);
    makeGroup(SPECIAL, "operator", null, operators_div);

    SPECIAL.forEach(special => {
        switch (special) {
            case "=": {
                document.querySelector("#id16").addEventListener("click", (e) => {
                let area = document.querySelector(".display");
                display_value = area.value;
                let regex = new RegExp("([0-9\\.]+)([\\+\\-\\*\\/])([0-9\\.]+)")
                let values = display_value.match(regex).slice(1); // [a, operator, b]
                console.log(values);
                area.value = roundDecimals(operate(values[0], values[2], values[1]));
                display_value = area.value;
                });
            }
            case "CA": {
                document.querySelector("#id17").addEventListener("click", (e) => {
                    let area = document.querySelector(".display");
                    area.value = "";
                    display_value = area.value;
                });
                break;
            }
            case ".": {
                document.querySelector("#id15").addEventListener("click", (e) => {
                    let area = document.querySelector(".display");
                    let numbers = display_value.split(RegExp("[\\+\\-\\*\\/]"));
                    if (numbers[numbers.length - 1].indexOf(".") === -1) {
                        area.value = area.value + e.target.textContent;
                        display_value = area.value;
                    }
                });
                break;
            }
            case "Back": {
                document.querySelector("#id18").addEventListener("click", (e) => {
                    let area = document.querySelector(".display");
                    area.value = area.value.slice(0, -1);
                    display_value = area.value;
                });
            }
        }});
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
    return (b === 0) ? "Error" : a/b;
}

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':{return add(a, b);}
        case '-':{return subtract(a, b);}
        case '*':{return multiply(a, b);}
        case '/':{return divide(a, b);}
    }
}

// keyboard
let area = document.querySelector(".display");
area.addEventListener("keyup", (e) => {
    switch (e.key) {
    case "Enter": {
        document.querySelector("#id16").click();
        break;
    }
    case ".": {
        document.querySelector("#id15").click();
        break;
    }
    default: {
        display_value = area.value;
        console.log(display_value);
    }
};
});

area.addEventListener("keydown", (e) => {
    if (e.key === ".") {
        e.preventDefault();
    }
})