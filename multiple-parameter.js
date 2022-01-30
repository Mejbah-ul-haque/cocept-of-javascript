function addTowNumbers(number1, number2) {
  console.log(number1, number2);
  var total = number1 + number2;
  return total;
}

var firstNumber = 35;
var secondNumber = 47;

var result = addTowNumbers(firstNumber, secondNumber);
console.log("result value is ", result);

function multiplyTwoNumbers(num1, num2) {
  var result = num1 * num2;
  return result;
}

var total = multiplyTwoNumbers(5, 100);
console.log("taotal after multiplication", total);

function subtractTwoNumbers(no1, no2) {
  var result = no2 - no1;
  return result;
}

var total = subtractTwoNumbers(60, 100);
console.log("taotal after subtraction", total);

function divideTwoNumbers(num1, num2) {
  var result = num2 / num1;
  return result;
}

var total = divideTwoNumbers(5, 100);
console.log("Total numbers after divedation is : ", total);
