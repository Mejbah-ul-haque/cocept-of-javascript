//  1. Variable :

var time = "10:15pm"; //Srting variable
var bookPrice = 150; //Neumeric variable
var isWhiteColor = false; //boolean variable

// 2.  Array
var bookList = ["Sonar Tory", "Khoabnama", "Kalbela", "Ekattor", "Lojja"];
console.log(bookList);

// Index Length
var bookCount = bookList.length;
console.log(bookCount);

// Index Position
var kalbelaIndex = bookList.indexOf("Kalbela");
console.log(kalbelaIndex);

// Array indexes start from 0.
// -1 means there is no number or value!

// Index Element
var thirdElement = bookList[2];
console.log(thirdElement);

// Index Changing
bookList[2] = "jogajog";
console.log(bookList);

// Index Adding
bookList.push("Kuhelica");
console.log(bookList);

// Index Remove Element
bookList.pop();
console.log(bookList);

// Remove the first item from the array
bookList.shift();
console.log(bookList);

// Add the first item from the array
bookList = ["Zohra"].concat(bookList);
console.log(bookList);

//  3. Conditional
var bookPrice = 120;

if (bookPrice > 120) {
  console.log("I will buy this book.");
} else {
  console.log("I have no money to buy this...");
}
console.log();

// 4. Loop
var i = 0; // loop variable
while (i <= 17) {
  console.log(i);
  console.log("This very much interesting.");
  i++;
}

for (var i = 0; i < 17; i++) {
  console.log(i);
  console.log("Oh! it's great, awesome.");
}

//  5. Function
function startFan() {
  console.log("Walk towards the switch.");
  console.log("press the switch.");
}
startFan();

// You can call the function one or more times when it needed. But you do not call the loop again and again. This is the focus point or defferance between function and loop.

console.log("Take breakfast.");
console.log("You have to go the market.");
console.log("Oh! it's great!");
startFan();

// Function Parameter, function return (someone call arguments as parameter. )
function bringSingara(taka) {
  console.log("singara-r jonno dise tk.", taka);
  console.log("mama, singara den.");

  var singaraPrice = 10;
  var singaraQuantity = taka / singaraPrice;
  return singaraQuantity;
}
var money = 250;
var singara = bringSingara(money);

console.log(singara);

// Sample of multiple parameter

// Addition of function
function addTowNumbers(number1, number2) {
  console.log(number1, number2);
  var total = number1 + number2;
  return total;
}

var firstNumber = 35;
var secondNumber = 47;

var result = addTowNumbers(firstNumber, secondNumber);
console.log("result value is ", result);

// Multiplication of function
function multiplyTwoNumbers(num1, num2) {
  var result = num1 * num2;
  return result;
}

var total = multiplyTwoNumbers(5, 100);
console.log("taotal after multiplication", total);

// Subtration of function

function subtractTwoNumbers(no1, no2) {
  var result = no2 - no1;
  return result;
}

var total = subtractTwoNumbers(60, 100);
console.log("taotal after subtraction", total);

// Dividation of function

function divideTwoNumbers(num1, num2) {
  var result = num2 / num1;
  return result;
}

var total = divideTwoNumbers(5, 100);
console.log("Total numbers after divedation is : ", total);

// 6. Object
var mobile = {
  color: "black",
  price: 20000,
  screenSize: 5,
  storage: "16GB",
};

// Different ways to changes property value

var computer = {
  price: 20000,
  storage: "156GB",
  color: "silver",
  processor: "intel i7",
};
console.log(computer);

// perticular Object value
console.log(computer.color);

// Another ways...
var computerPrice = computer.price;
console.log(computerPrice);

// set a object property value
computer.price = 18000;
console.log(computer);

// different ways to set a value of an object property
var priceProperty = "price";

computer.price = 22000;
computer["price"] = 23000;
computer[priceProperty] = 15000;
console.log(computer);

// switch is faster than if-else if -else

var color = "black";
if (color == "blue") {
  console.log("color is blue");
} else if (color == "red") {
  console.log("color is red");
} else if (color == "green") {
  console.log("color is green");
} else if (color == "white") {
  console.log("color is white");
} else if (color == "yellow") {
  console.log("color is yellow");
} else {
  console.log("color is black");
}

// switch
switch (color) {
  case "blue":
    console.log("color is blue");
    break;
  case "red":
    console.log("color is red");
    break;
  case "green":
    console.log("color is green");
    break;
  case "yellow":
    console.log("color is yellow");
    break;
  default:
    console.log("color is black");
}

// Break and Continue

var i = 0;
while (i < 10) {
  console.log(i);
  if (i == 5) {
    break;
  }
  i++;
}

for (var i = 0; i <= 20; i++) {
  console.log(i);
  if (i > 8) {
    break;
  }
}

var numbers = [21, 35, 45, 63, 65, 49, 101, 55, 66, 98];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  console.log(number);
  if (number > 60) {
    break;
  }
}

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 60) {
    continue;
  }
  console.log(number);
}

for (let i = 10; i >= 10; i--) {
  console.log(i);
}

// Inch to feet convert by function
function inchToFeet(inches) {
  let feet = inches / 12;
  return feet;
}
let myInches = 132;
let myfeet = inchToFeet(myInches);
console.log(myfeet);
