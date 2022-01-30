var computer = {
  price: 20000,
  storage: "156GB",
  color: "silver",
  processor: "intel i7",
};
console.log(computer);
// perticular Object value
console.log(computer.color);
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
