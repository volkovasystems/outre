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

var doubt = require("doubt");
var harden = require("harden");

var outre = function outre(array) {
	/*;
 	@meta-configuration:
 		{
 			"array:required": "[*]"
 		}
 	@end-meta-configuration
 */

	if (!doubt(array).ARRAY && !doubt(this).ARRAY) {
		throw new Error("invalid array");
	}

	array = array || [];

	if (doubt(this).ARRAY) {
		array = this.concat(array);
	}

	var list = array.filter(function filter(element, index, array) {
		return array.indexOf(element) === index;
	});

	harden("outre", outre.bind(list), list);

	return list;
};

module.exports = outre;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91dHJlLmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsImhhcmRlbiIsIm91dHJlIiwiYXJyYXkiLCJBUlJBWSIsIkVycm9yIiwiY29uY2F0IiwibGlzdCIsImZpbHRlciIsImVsZW1lbnQiLCJpbmRleCIsImluZGV4T2YiLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7O0FBRUEsSUFBTUUsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNwQzs7Ozs7Ozs7QUFRQSxLQUFJLENBQUNKLE1BQU9JLEtBQVAsRUFBZUMsS0FBaEIsSUFBeUIsQ0FBQ0wsTUFBTyxJQUFQLEVBQWNLLEtBQTVDLEVBQW1EO0FBQ2xELFFBQU0sSUFBSUMsS0FBSixDQUFXLGVBQVgsQ0FBTjtBQUNBOztBQUVERixTQUFRQSxTQUFTLEVBQWpCOztBQUVBLEtBQUlKLE1BQU8sSUFBUCxFQUFjSyxLQUFsQixFQUF5QjtBQUN4QkQsVUFBUSxLQUFLRyxNQUFMLENBQWFILEtBQWIsQ0FBUjtBQUNBOztBQUVELEtBQUlJLE9BQU9KLE1BQU1LLE1BQU4sQ0FBYyxTQUFTQSxNQUFULENBQWlCQyxPQUFqQixFQUEwQkMsS0FBMUIsRUFBaUNQLEtBQWpDLEVBQXdDO0FBQ2hFLFNBQU9BLE1BQU1RLE9BQU4sQ0FBZUYsT0FBZixNQUE2QkMsS0FBcEM7QUFDQSxFQUZVLENBQVg7O0FBSUFULFFBQVEsT0FBUixFQUFpQkMsTUFBTVUsSUFBTixDQUFZTCxJQUFaLENBQWpCLEVBQXFDQSxJQUFyQzs7QUFFQSxRQUFPQSxJQUFQO0FBQ0EsQ0ExQkQ7O0FBNEJBTSxPQUFPQyxPQUFQLEdBQWlCWixLQUFqQiIsImZpbGUiOiJvdXRyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwib3V0cmVcIixcblx0XHRcdFwicGF0aFwiOiBcIm91dHJlL291dHJlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJvdXRyZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJvdXRyZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL291dHJlLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwib3V0cmUtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRQaWNrIHVuaXF1ZSBlbGVtZW50cyBpbiBhbiBhcnJheS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuXG5jb25zdCBvdXRyZSA9IGZ1bmN0aW9uIG91dHJlKCBhcnJheSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IFwiWypdXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhZG91YnQoIGFycmF5ICkuQVJSQVkgJiYgIWRvdWJ0KCB0aGlzICkuQVJSQVkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBhcnJheVwiICk7XG5cdH1cblxuXHRhcnJheSA9IGFycmF5IHx8IFsgXTtcblxuXHRpZiggZG91YnQoIHRoaXMgKS5BUlJBWSApe1xuXHRcdGFycmF5ID0gdGhpcy5jb25jYXQoIGFycmF5ICk7XG5cdH1cblxuXHRsZXQgbGlzdCA9IGFycmF5LmZpbHRlciggZnVuY3Rpb24gZmlsdGVyKCBlbGVtZW50LCBpbmRleCwgYXJyYXkgKXtcblx0XHRyZXR1cm4gYXJyYXkuaW5kZXhPZiggZWxlbWVudCApID09PSBpbmRleDtcblx0fSApO1xuXG5cdGhhcmRlbiggXCJvdXRyZVwiLCBvdXRyZS5iaW5kKCBsaXN0ICksIGxpc3QgKTtcblxuXHRyZXR1cm4gbGlzdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gb3V0cmU7XG4iXX0=
