/**
 * Created by bassem on 6/4/16.
 */
function foo() {
    'use strict';
    var a = 2;
    this.bar();
}
function bar() {
    'use strict';
    console.log( this.a );
}
foo(); //ReferenceError: a is not defined