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

  decimalBtn.removeAttribute("disabled");
}

const removeValue = () => {
  if(displayValue === 0) {
    return;
  }

  displayValue = displayValue.slice(0, -1);

  if(displayValue.length === 0) {
    displayValue = 0;
  }
  
  displayDiv.textContent = `${displayValue}`;
}

const showDisplay = (e) => {
  let input = e.target.dataset.value;

  if(Number(displayValue) === INITIAL_VALUE) {
    displayValue = input;
    displayDiv.textContent = `${displayValue}`;
  } else {
    displayValue += String(input);
    displayDiv.textContent = `${displayValue}`;
  }
}

const toggleValue = () => {
  if(displayValue === 0) {
    return;
  }

  displayValue = Number(displayValue) * -1;

  displayDiv.textContent = `${displayValue}`;
}

const addDecimal = (e) => {
  let input = e.target.dataset.value;

  displayValue += input;
  displayDiv.textContent = `${displayValue}`;

  e.target.disabled = true;
}

// Resolve operation:
const resolveOperation = () => {
  if(!operator || typeof num1 === undefined) {
    return;
  } else if(operator === "/" && num2 === 0) {
    return;
  } else {
    num2 = Number(displayValue);

    let result = operate(operator, num1, num2);

    if(result % 1 !== 0) {
      result = Number(result.toFixed(5));
    }

    if (result === null) {
      result = "NOPE."
    }
    
    displayValue = result;
    displayDiv.textContent = `${displayValue}`;

    num1 = Number(result);
    operator = null;

    displayValue = INITIAL_VALUE;
    decimalBtn.removeAttribute("disabled");
    return result;
  }
}

// Set operator:
const setOperator = (e) => {
  decimalBtn.removeAttribute("disabled");
  if(operator === null) {
    let operation = e.target.dataset.value;

    operator = String(operation);
  } else {
    let operation = e.target.dataset.value;
  
    if(!num1) {
      num1 = displayValue;

      displayValue = INITIAL_VALUE;
  
      operator = String(operation);
    } else {
      num2 = displayValue;
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
  btn.addEventListener("click", showDisplay);
});

const toggleBtn = document.querySelector(".btn-toggle");
toggleBtn.addEventListener("click", toggleValue);

const decimalBtn = document.querySelector(".btn-decimal");
decimalBtn.addEventListener("click", addDecimal);

const operatorBtn = document.querySelectorAll(".btn-operator");
operatorBtn.forEach(btn => {
  btn.addEventListener("click", setOperator);
});

const equalsBtn = document.querySelector(".btn-equals");
equalsBtn.addEventListener("click", resolveOperation);

const clearBtn = document.querySelector(".btn-clear");
clearBtn.addEventListener("click", clearDisplay);

const deleteBtn = document.querySelector(".btn-delete");
deleteBtn.addEventListener("click", removeValue);

/*
- Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble. Read the MDN documentation for event.preventDefault to help solve this problem.
*/