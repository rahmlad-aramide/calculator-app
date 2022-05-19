"use-strict";
const body = document.querySelector("body");
const toggler = document.querySelector(".toggler");
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".keypad");
const button = document.querySelector(".button");
const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const screen = document.querySelector(".screen-content");
const display = document.querySelector(".screen-content");

const calculate = (n1, operator, n2) => {
  const firstNum = parseFloat(n1);
  const secondNum = parseFloat(n2);
  if (operator === "add") return firstNum + secondNum;
  if (operator === "subtract") return firstNum - secondNum;
  if (operator === "multiply") return firstNum * secondNum;
  if (operator === "divide") return firstNum / secondNum;
};

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    // Do something
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    Array.from(key.parentNode.children).forEach((k) =>
    k.classList.add("pressed")
  );

    if (!action) {
      if (
        displayedNum === "0" ||
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKeyType = "number";
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
     

      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      // Add custom attribute
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;

      if (
        firstValue &&
        operator &&
        previousKeyType !== "operator" &&
        previousKeyType !== "calculate"
      ) {
        const calcValue = calculate(firstValue, operator, secondValue);
        display.textContent = calcValue;
        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = displayedNum;
      }
    }
    if (action === "decimal") {
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
      } else if (
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = "0.";
      }

      calculator.dataset.previousKeyType = "decimal";
    }

    if (action === "reset") {
      display.textContent = 0;
      calculator.dataset.previousKeyType = "reset";

      calculator.dataset.firstValue = "";
      calculator.dataset.modValue = "";
      calculator.dataset.operator = "";
      calculator.dataset.previousKeyType = "";
    }

    if (action === "delete") {
      if (!display.textContent) {
        display.textContent = "0";
        calculator.dataset.modValue = "";
      } else {
        curr = displayedNum;
        newVal = curr.slice(0, -1);
        display.textContent = Number(newVal);
        calculator.dataset.modValue = Number(newVal);
      }
    }

    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue) {
        // if (previousKeyType === 'calculate') {
        //   firstValue = displayedNum
        //   secondValue = calculator.dataset.modValue
        // }
        display.textContent = calculate(firstValue, operator, secondValue);
      }
      // Set modValue attribute
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = "calculate";
    }
    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("pressed")
    );
  }
});

// Toggler Button to switch themes
button.addEventListener("click", function () {
  if (button.classList.contains("first")) {
    button.classList.remove("first");
    button.classList.add("second");
    body.classList.remove("theme3");
    body.classList.remove("theme1");
    body.classList.add("theme2");
  } else if (button.classList.contains("second")) {
    button.classList.remove("second");
    button.classList.add("third");
    body.classList.remove("theme2");
    body.classList.remove("theme1");
    body.classList.add("theme3");
  } else if (button.classList.contains("third")) {
    button.classList.remove("third");
    button.classList.add("first");
    body.classList.remove("theme2");
    body.classList.remove("theme3");
    body.classList.add("theme1");
  } else {
    button.classList.remove("first");
    button.classList.remove("second");
    button.classList.remove("third");
    button.classList.remove("theme2");
    button.classList.remove("theme3");
  }
});
