
const assert = require( "assert" );
const outre = require( "./outre.js" );

assert.deepEqual( outre( [ 1, 2, 3, 1 ] ), [ 1, 2, 3 ], "should be equal" );

assert.equal( Array.isArray( outre( [ 1, 2, 3, 1, 2 ] ) ), true, "should return true" );

console.log( "ok" );
