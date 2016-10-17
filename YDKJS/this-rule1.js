/**
 * Created by bassem on 6/4/16.
 */
function foo() {
   "use strict";
    console.log( this.a );
}
var a = 2;
foo(); /* TypeError: `this` is `undefined`*/