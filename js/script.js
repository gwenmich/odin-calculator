function add(num1, num2) {
  display.textContent = `${num1} + ${num2}`
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
}

const display = document.querySelector("#display");
const numsDiv = document.querySelector(".number-btns");
const opersDiv = document.querySelector(".operator-btns");
const equalBtnDiv = document.querySelector(".equal-btn");


function buildNumButns() {

  for (let i = 9; i >= 0; i--) {
      const numBtn = document.createElement("button");
      numBtn.classList.add("num");
      numBtn.textContent = i;
      numsDiv.appendChild(numBtn);
  }

  const dotBtn = document.createElement("button");
  dotBtn.classList.add("dot");
  dotBtn.textContent = ".";
  numsDiv.appendChild(dotBtn);

  const clearBtn = document.createElement("button");
  clearBtn.classList.add("clear");
  clearBtn.textContent = "C";
  numsDiv.appendChild(clearBtn);
}



function buildOperatorBtns() {
  const operators = [
    {"+": "plus"},
    {"-": "minus"},
    {"*": "times"},
    {"/": "divide"}
  ]

  for (const operator of operators) {
    const operBtn = document.createElement("button");
    const [[symbol, btnClass]] = Object.entries(operator);
    
    operBtn.textContent = symbol;
    operBtn.classList.add(btnClass);
    
    opersDiv.appendChild(operBtn);
  }

  const equalsBtn = document.createElement("button");
  equalsBtn.classList.add("equals");
  equalsBtn.textContent = "=";
  equalBtnDiv.appendChild(equalsBtn);
}



buildNumButns();
buildOperatorBtns();

console.log(operate("+", 1, 2));