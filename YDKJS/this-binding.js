/**
 * Created by bassem on 6/4/16.
 */

var obj1 = {
    a: 2,
    foo: function foo() {
        "use strict";
        console.log( this.a );
    }
};
var obj2 = {
    a: 3,
    foo: function foo() {
        "use strict";
        console.log( this.a );
    }
};
obj1.foo(); // 2
obj2.foo(); // 3
obj1.foo.call( obj2 ); // 3
obj2.foo.call( obj1 ); // 2


console.log('====================');
obj1 = {};
var bar = function (something) {
    "use strict";
    this.a = something;
}.bind( obj1 );

bar( 2 );
console.log( obj1.a ); // 2
var baz = new bar( 3 );
console.log( obj1.a ); // 2
console.log( baz.a ); // 3