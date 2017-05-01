function sum(x = 7, y = 8) {
  return x + y;
}

console.log(sum(0));
console.log(sum(2, 1));

function product(x, y = x) {
  return x * y;
}

console.log(product(2));
