// Variable :

var time = "10:15pm"; //Srting variable
var bookPrice = 150; //Neumeric variable
var isWhiteColor = false; //boolean variable

// Array
var bookList = ["Sonar Tory", "Khoabnama", "Kalbela", "Ekattor", "Lojja"];
console.log(bookList);

// Index Length
var bookCount = bookList.length;
console.log(bookCount);

// Index Position
var kalbelaIndex = bookList.indexOf("Kalbela");
console.log(kalbelaIndex);

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
