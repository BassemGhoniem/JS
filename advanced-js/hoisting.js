var a = b();
console.log(a);
var c = d();
a;
b;

function b() {
  return c;
}

function d() {
  return b();
}
