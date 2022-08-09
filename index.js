function sumOfSmallerNumbers(num) {
  let result = 0;
  for (var i = 1; i < num; i++) {
    if (i % 3 == 0) {
      result += i;
    } else if (i % 5 == 0) {
      result += i;
    } else {
      continue;
    }
  }
  return result;
}

const num = process.argv.slice(2);
console.log(`The sum of smaller numbers is ${sumOfSmallerNumbers(num)}`);
