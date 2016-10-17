function foo(bar) {
  "use strict";
  if (bar) {
    console.log(baz);
    var baz = bar;
  }
}

foo("Bar");
