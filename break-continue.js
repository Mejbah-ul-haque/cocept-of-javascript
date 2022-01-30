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
