"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "outre",
			"path": "outre/outre.js",
			"file": "outre.js",
			"module": "outre",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/outre.git",
			"test": "outre-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Pick unique elements in an array.
	@end-module-documentation

	@include:
		{
			"doubt": "doubt",
			"harden": "harden"
		}
	@end-include
*/

const doubt = require( "doubt" );
const harden = require( "harden" );

const outre = function outre( array ){
	/*;
		@meta-configuration:
			{
				"array:required": "[*]"
			}
		@end-meta-configuration
	*/

	if( !doubt( array ).ARRAY && !doubt( this ).ARRAY ){
		throw new Error( "invalid array" );
	}

	array = array || [ ];

	if( doubt( this ).ARRAY ){
		array = this.concat( array );
	}

	let list = array.filter( function filter( element, index, array ){
		return array.indexOf( element ) === index;
	} );

	harden( "outre", outre.bind( list ), list );

	return list;
};

module.exports = outre;
