"use strict";

const assert = require( "assert" );
const outre = require( "./outre.js" );

assert.deepEqual( outre( [ 1, 2, 3, 1 ] ), [ 1, 2, 3 ] );

console.log( "ok" );
