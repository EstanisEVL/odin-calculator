const INITIAL_VALUE = 0;
let displayValue = INITIAL_VALUE;
let num1 = 100;
let num2 = 3;
let operator = "/";

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
  // RECIBE UN VALOR DE CADA BOTÓN, LO VA GUARDANDO EN EL DISPLAYVALUE Y LO DEVUELVE
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

const displayDiv = document.querySelector(".display-container");
displayDiv.textContent = `${displayValue}`;

const digitBtn = document.querySelectorAll(".btn-digit");
digitBtn.forEach(btn => {
  btn.addEventListener("click", display);
})

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearDisplay);

/*
Create the functions that populate the display when you click the number buttons.

You should be storing the ‘display value’ in a variable somewhere for use in the next step.
*/