/**
 * Created by bassem on 6/4/16.
 */

var obj = {
    a: 2,
    foo: function foo() {
        'use strict';
        console.log( this.a );
    }
};
obj.foo(); // 2


var obj2 = {
    a: 42,
    foo: function foo() {
        'use strict';
        console.log( this.a );
    }
};
var obj1 = {
    a: 2,
    obj2: obj2
};
obj1.obj2.foo(); // 42




var obj = {
    a: 2,
    foo: function foo() {
        "use strict";
        console.log( this.a );
    }
};
var bar = obj.foo; // function reference/alias!
var a = "oops, global"; // `a` also property on global object
bar(); // "oops, global"