// Get references to the DOM elements
const result = document.getElementById("result");
const clearButton = document.getElementById("clear");
const calculateButton = document.getElementById("calculate");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const buttons = document.querySelectorAll("#calculator-button");
const divform = document.getElementById("div-form")
const nightModeButton = document.getElementById('night-mode');
const body = document.body;


// Set up the calculator object to keep track of state
const calculator = {
  currentOperand: '',
  previousOperand: '',
  operation: undefined,
  updateDisplay: function() {
    result.value = this.currentOperand;
  },
  clear: function() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
    this.updateDisplay();
  },
  appendNumber: function(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString();
  },
  chooseOperation: function(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.calculate();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  },
  calculate: function() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        
        break;
      case '-':
        computation = prev - current;
        
        break;
      case '*':
        computation = prev * current;
        
        break;
      case '/':
        computation = prev / current;
        
        break;
      case '.':
        computation = prev + '.' + current 
        break;
      default:
        return;
    }
    this.currentOperand = parseFloat(computation);
    this.operation = undefined;
    this.previousOperand = '';
    this.updateDisplay();
  },
};

let calculation = "";

// Add event listeners to number buttons
numbers.forEach((number) => {
    number.addEventListener("click", () => {
      calculation += number.value;
      result.value = calculation;
    });
  });

// Add event listeners to operator buttons
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      calculation += operator.value;
      result.value = calculation;
    });
  });

// Add event listener to clear button
clearButton.addEventListener("click", () => {
    calculation = "";
    result.value = "";
  });

// Add event listener to calculate button
calculateButton.addEventListener("click", () => {
    result.value = eval(calculation);
  });




nightModeButton.addEventListener('click', () => {
  body.classList.toggle('night-mode');
  result.classList.toggle('night-mode');
  clearButton.classList.toggle('night-mode');
  calculateButton.classList.toggle('night-mode');
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.classList.toggle('night-mode');
    }
  divform.classList.toggle('night-mode');
  nightModeButton.classList.toggle('night-mode');
});