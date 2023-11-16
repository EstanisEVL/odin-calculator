const INITIAL_VALUE = 0;
let displayValue = INITIAL_VALUE;
let num1;
let num2;
let operator;

const add = (num1, num2) => {
  return num1 + num2;
};
const substract = (num1, num2) => {
  return num1 - num2;
}
const multiply = (num1, num2) => {
  return num1 * num2;
}
const divide = (num1, num2) => {
  return num1 / num2;
}
const operate = (operator, num1, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);

  switch (operator) {
    case "+":
      return add(num1, num2);
  
    case "-":
      return substract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      if(num2 === 0) return null
      else return divide(num1, num2);
  }
}

// Display:
const clearDisplay = () => {
  num1 = "";
  num2 = "";

  displayValue = INITIAL_VALUE;

  displayDiv.textContent = `${displayValue}`;
}

const display = (e) => {
  let input = e.target.dataset.value;

  if(Number(displayValue) === INITIAL_VALUE) {
    displayValue = input;
    displayDiv.textContent = `${displayValue}`;
  } else {
    displayValue += String(input);
    displayDiv.textContent = `${displayValue}`;
  }
}

// Resolve operation:
const resolveOperation = () => {
  if(!operator || typeof num1 === undefined) {
    return;
  } else if(operator === "/" && num2 === 0) {
    console.log(operator, num1, num2);
    return;
  } else {
    num2 = Number(displayValue);

    let result = operate(operator, num1, num2);
    
    displayValue = result;
    displayDiv.textContent = `${displayValue}`;

    num1 = Number(result);
    operator = null;

    displayValue = INITIAL_VALUE;
    console.log(operator, num1, num2);
    return result;
  }
}

// Set operator:
const setOperator = (e) => {
  if(operator === null) {
    let operation = e.target.dataset.value;

    operator = String(operation);
  } else {
    let operation = e.target.dataset.value;
  
    if(!num1) {
      num1 = Number(displayValue);

      displayValue = INITIAL_VALUE;
  
      operator = String(operation);
    } else {
      num2 = displayValue;

      // POR DEFECTO, SI VUELVO A APRETAR UN OPERADOR EL NUM2 VA A SER 0

      console.log(operator, num1, num2);

      if(String(operation) === String(operator)) {
        console.log("YA HAY OPERADOR");
        return;
      };
  
      num1 = resolveOperation();
  
      displayValue = INITIAL_VALUE;
  
      operator = String(operation);
    }
  }
}

const displayDiv = document.querySelector(".display-container");
displayDiv.textContent = `${displayValue}`;

const digitBtn = document.querySelectorAll(".btn-digit");
digitBtn.forEach(btn => {
  btn.addEventListener("click", display);
})

const operatorBtn = document.querySelectorAll(".btn-operator");
operatorBtn.forEach(btn => {
  btn.addEventListener("click", setOperator);
})

const equalsBtn = document.querySelector(".btn-equals");
equalsBtn.addEventListener("click", resolveOperation);

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearDisplay);

/*
Gotchas: watch out for and fix these bugs if they show up in your code:
  - You should round answers with long decimals so that they don’t overflow the screen.
*/