const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}
function createAndWriteOutput(operator, initialResult, enteredNumber) {
  const calcDescription = `${initialResult} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operation, prevResult, number, result) {
  logEntries.push({
    operation,
    prevResult,
    number,
    result
  });
  console.log(logEntries);
}

function calculatedResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}
function add() {
  calculatedResult("ADD");
  // const enteredNumber = getUserNumberInput();
  // const initialResult = currentResult;
  // currentResult += enteredNumber;
  // createAndWriteOutput("+", initialResult, enteredNumber);
  // writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
  calculatedResult("SUBTRACT");
  // const enteredNumber = getUserNumberInput();
  // const initialResult = currentResult;
  // currentResult -= enteredNumber;
  // createAndWriteOutput("-", initialResult, enteredNumber);
  // writeToLog("subtract", initialResult, enteredNumber, currentResult);
}

function multiply() {
  calculatedResult("MULTIPLY");
  //   const enteredNumber = getUserNumberInput();
  //   const initialResult = currentResult;
  //   currentResult *= enteredNumber;
  //   createAndWriteOutput("*", initialResult, enteredNumber);
  //   writeToLog("multiply", initialResult, enteredNumber, currentResult);
}

function divide() {
  calculatedResult("DIVIDE");
  // const enteredNumber = getUserNumberInput();
  // const initialResult = currentResult;
  // currentResult /= enteredNumber;
  // createAndWriteOutput("/", initialResult, enteredNumber);
  // writeToLog("divide", initialResult, enteredNumber, currentResult);
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
