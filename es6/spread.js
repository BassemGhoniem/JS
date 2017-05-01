function log (level, ...rest) {
  console.log(arguments);
  console.log(rest);
  if (level === 'debug') {
    console.log(rest);
  }
}

var foo = {bar : 'bar'};
var obj = [{a : 'a'}, {b: 'b'}];
obj = [foo, ...obj];
log('debug', 'obj: ' , ...obj);
