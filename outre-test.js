
const assert = require( "assert" );
const outre = require( "./outre.js" );

assert.equal( Array.isArray( outre( [ 1, 2, 3, 1, 2 ] ) ), true, "should be equal to true" );

assert.deepEqual( outre( [ 1, 2, 3, 1 ] ), [ 1, 2, 3 ], "should be equal to [ 1, 2, 3 ]" );

assert.deepEqual( outre( [ 1, 2, 3, 3, 2, 4 ] ), [ 1, 2, 3, 4 ], "should be equal to [ 1, 2, 3, 4 ]" );

console.log( "ok" );
