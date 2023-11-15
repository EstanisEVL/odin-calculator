const INITIAL_VALUE = 0;
let displayValue = INITIAL_VALUE;
let num1;
let num2;
let operator;

console.log(num1, num2, operator);

const add = (num1, num2) => {
  // VER SI HACE FALTA DEJAR UNA VEZ IMPLEMENTADA LA GUI:
  if(typeof num1 !== "number" || typeof num2 !== "number") return "Please input valid numbers";

  return num1 + num2;
};

const substract = (num1, num2) => {
  // VER SI HACE FALTA DEJAR UNA VEZ IMPLEMENTADA LA GUI:
  if(typeof num1 !== "number" || typeof num2 !== "number") return "Please input valid numbers";

  return num1 - num2;
}

const multiply = (num1, num2) => {
  // VER SI HACE FALTA DEJAR UNA VEZ IMPLEMENTADA LA GUI:
  if(typeof num1 !== "number" || typeof num2 !== "number") return "Please input valid numbers";

  return num1 * num2;
}

const divide = (num1, num2) => {
  // VER SI HACE FALTA DEJAR UNA VEZ IMPLEMENTADA LA GUI:
  if(typeof num1 !== "number" || typeof num2 !== "number") return "Please input valid numbers";

  return num1 / num2;
}

const operate = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
  
    case "-":
      return substract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);
  }
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

const clearDisplay = () => {
  displayValue = INITIAL_VALUE;

  displayDiv.textContent = `${displayValue}`;
}

const setNum = (e) => {
  let operation = e.target.dataset.value;
  if(!num1) {
    let value = displayValue;
    num1 = Number(value);

    console.log(num1);

    displayValue = 0;
    displayDiv.textContent = `${displayValue}`;
  } else if(!num2) {
    let value = displayValue;
    num2 = Number(value);

    console.log(num2);

    displayValue = 0;
    displayDiv.textContent = `${displayValue}`;
  } else {
    displayValue = 0;
    displayDiv.textContent = `${displayValue}`;
  }

  operator = String(operation);
  console.log(operator);
}

const getResult = () => {
  if(!num2) {
    let value = displayValue;
    num2 = Number(value);
  }

  let result = operate(operator, num1, num2);

  console.log(operator, num1, num2);

  displayValue = result;
  displayDiv.textContent = `${displayValue}`;

  return result;
}

const displayDiv = document.querySelector(".display-container");
displayDiv.textContent = `${displayValue}`;

const digitBtn = document.querySelectorAll(".btn-digit");
digitBtn.forEach(btn => {
  btn.addEventListener("click", display);
})

const operatorBtn = document.querySelectorAll(".btn-operator");
operatorBtn.forEach(btn => {
  btn.addEventListener("click", setNum)
})

const equalsBtn = document.querySelector(".btn-equals");
equalsBtn.addEventListener("click", getResult);

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearDisplay);