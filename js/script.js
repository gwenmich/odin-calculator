function add(num1, num2) {
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
display.textContent = "0";
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


let firstNum = "";
let secondNum = "";
let currOperator = null;
let reset = false;


numsDiv.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;
  const choice = event.target.textContent;
  const nums = "0123456789";

  if (nums.includes(choice) || choice == ".") {
    if (reset || display.textContent === "0") {
      display.textContent = "";
      reset = false;
    }

    if (choice === "." && display.textContent.includes(".")) return;

    display.textContent += choice;
  }

  if (choice === "C") {
    display.textContent = "0";
    firstNum = "";
    secondNum = "";
    currOperator = null;
    reset = false;
  }
})


opersDiv.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;
  const choice = event.target.textContent;
  
  firstNum = display.textContent;
  currOperator = choice;
  reset = true;  
})


equalBtnDiv.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;

  if (currOperator) {
    secondNum = display.textContent;
    const result = operate(currOperator, parseFloat(firstNum), parseFloat(secondNum));
    display.textContent = result;
    firstNum = result;
    reset = true;
    currOperator = null;
  }
 })

