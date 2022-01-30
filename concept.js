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

// Function
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
