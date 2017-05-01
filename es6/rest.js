function log (level, ...rest) {
  console.log(arguments);
  console.log(rest);
  if (level === 'debug') {
    console.log(rest);
  }
}

var obj = {a : 'a', b: 'b'};
log('debug', 'obj: ' + obj);
