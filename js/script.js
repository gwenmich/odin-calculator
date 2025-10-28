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


function buildNumButns() {

  for (let i = 0; i < 10; i++) {
      const numBtn = document.createElement("button");
      numBtn.classList.add("num");
      numBtn.textContent = i;
      numsDiv.appendChild(numBtn);
  }

  const dotBtn = document.createElement("button");
  dotBtn.classList.add("dot");
  dotBtn.textContent = ".";
  numsDiv.appendChild(dotBtn);
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
}



buildNumButns();
buildOperatorBtns();

console.log(operate("+", 1, 2));