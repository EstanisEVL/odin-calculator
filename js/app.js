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
