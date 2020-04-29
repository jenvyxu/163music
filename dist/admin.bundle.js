/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/page/admin/admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/admin.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/admin.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\nul,\r\nol {\r\n  list-style: none;\r\n}\r\na {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\ninput {\r\n  font-size: inherit;\r\n}\r\nbody {\r\n  font-size: 14px;\r\n  height: 100vh;\r\n  line-height: 1.5;\r\n  background: #aa3663;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: tahoma, arial, \"Hiragino Sans GB\", sans-serif;\r\n}\r\n/* layout */\r\n.page {\r\n  display: flex;\r\n}\r\n\r\n.page aside {\r\n  background: #091c2a;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-bottom: 40px;\r\n  position: relative;\r\n  height: 595px;\r\n}\r\naside .uploadMask {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  display: none;\r\n}\r\n\r\n/* aside */\r\n.newSong {\r\n  box-shadow: 0px 0px 2px 0px #00d89a;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  margin: 40px auto 40px auto;\r\n  padding: 8px;\r\n  font-size: 12px;\r\n  background: #00d89a;\r\n  width: 95px;\r\n  border-radius: 40px;\r\n  cursor: pointer;\r\n}\r\n.newSong.active {\r\n  background: #00d89a;\r\n}\r\n\r\n#songList-containner {\r\n  flex-grow: 1;\r\n  width: 280px;\r\n  overflow: auto;\r\n  padding: 10px 0;\r\n  background: #122430;\r\n  overflow: -moz-scrollbars-none;\r\n}\r\n\r\n#songList-containner::-webkit-scrollbar {\r\n  /*滚动条整体样式*/\r\n  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/\r\n  height: 1px;\r\n}\r\n#songList-containner::-webkit-scrollbar-thumb {\r\n  /*滚动条里面小方块*/\r\n  border-radius: 6px;\r\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\r\n  background: #122430;\r\n}\r\n#songList-containner::-webkit-scrollbar-track {\r\n  /*滚动条里面轨道*/\r\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\r\n  border-radius: 10px;\r\n  background: #091c2a;\r\n}\r\n\r\n.songList {\r\n  text-align: left;\r\n  height: 100%;\r\n}\r\n.songList > li {\r\n  color: #dedddf;\r\n  background: #122430;\r\n  border-left: 3px solid transparent;\r\n  font-size: 13px;\r\n  width: 250px;\r\n  margin: 0 5px 0 0;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  padding: 6px 20px;\r\n  cursor: pointer;\r\n}\r\n.songList > li.active {\r\n  border-left: 3px solid #31c0f7;\r\n  background: #122430;\r\n  border-radius: 1px;\r\n}\r\n.uploadArea {\r\n  background: #ffffff;\r\n  border-radius: 11px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding: 20px 0 24px 0;\r\n  transition: 0.4s;\r\n}\r\n.uploadArea input[type=\"file\"] {\r\n  /* display: block; */\r\n  width: 70px;\r\n  line-height: 68px;\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n\r\n.uploadArea .icon {\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n.uploadArea .selectSong,\r\n.uploadArea .selectCover {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.uploadArea .selectSong:hover::after {\r\n  content: \"请选择mp3文件\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 100%;\r\n  width: 84px;\r\n  color: orange;\r\n  font-size: 12px;\r\n}\r\n.uploadArea .selectCover:hover::after {\r\n  content: \"请选择jpg/png/jepg/gif格式图片\";\r\n  display: block;\r\n  position: absolute;\r\n  width: 171px;\r\n  top: 100%;\r\n  color: orange;\r\n  font-size: 12px;\r\n}\r\n\r\n.uploadArea .selectSong .addBtn,\r\n.uploadArea .selectCover .addBtn,\r\n.uploadArea .uploadBtn {\r\n  text-align: center;\r\n  border: 1px dashed #aaa;\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  padding: 6px;\r\n  cursor: pointer;\r\n}\r\n.uploadArea .uploadBtn {\r\n  position: relative;\r\n}\r\n.uploadArea .selectSong .addBtn::before,\r\n.uploadArea .selectCover .addBtn::before,\r\n.uploadArea .uploadBtn::before {\r\n  content: \"2\";\r\n  display: block;\r\n  background: #aaa;\r\n  color: #fff;\r\n  text-align: center;\r\n  line-height: 20px;\r\n  font-size: 12px;\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  left: -34px;\r\n  top: 24px;\r\n}\r\n\r\n.uploadArea .selectCover .addBtn::before {\r\n  content: \"1\";\r\n}\r\n.uploadArea .uploadBtn::before {\r\n  content: \"3\";\r\n}\r\n.uploadArea .uploadBar {\r\n  position: absolute;\r\n  top: 72px;\r\n  height: 6px;\r\n  width: 100%;\r\n  border: 1px solid #aaa;\r\n  border-radius: 2px;\r\n  opacity: 0;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.uploadArea .uploadBar.ready {\r\n  opacity: 1;\r\n}\r\n.uploadArea .uploadBar .progress {\r\n  height: 100%;\r\n  width: 0;\r\n  background: #bbb;\r\n}\r\n/* main */\r\n\r\n.page main {\r\n  flex-grow: 1; /*自适应*/\r\n  background: #f4f4f4;\r\n  padding: 10px 20px;\r\n  width: 640px;\r\n  height: 595px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n.songMessage {\r\n  border-radius: 7px;\r\n  box-shadow: 0 0 1px 1px #ffffff;\r\n  padding: 20px;\r\n  color: #4a4b4c;\r\n  background: #ffffff;\r\n  position: relative;\r\n}\r\n.songMessage > h3 {\r\n  color: #848484;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.songMessage .cover {\r\n  width: 130px;\r\n  height: 130px;\r\n  position: absolute;\r\n  top: 64px;\r\n  right: 50px;\r\n}\r\n.songMessage .message {\r\n  position: absolute;\r\n  color: #00d89a;\r\n  bottom: 40px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  border: 1px solid #00d89a;\r\n  border-radius: 6px;\r\n  padding: 4px 8px;\r\n  opacity: 0.6;\r\n  display: none;\r\n}\r\n.form {\r\n  font-size: 14px;\r\n  padding-top: 10px;\r\n}\r\n.form > .row {\r\n  margin-bottom: 10px;\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n\r\n.form > .row label {\r\n  display: flex;\r\n  color: #aaa;\r\n  align-items: center; /*label和inut无任何空隙*/\r\n  width: 4em;\r\n  padding: 2px 0;\r\n}\r\n.form input[type=\"text\"] {\r\n  padding: 4px 10px;\r\n  font-size: 13px;\r\n  color: #848484;\r\n  border-radius: 6px;\r\n  border: 1px solid #ddd;\r\n  outline: none;\r\n  width: 300px;\r\n}\r\n\r\n.form textarea {\r\n  font-size: 14px;\r\n  font-family: Arial;\r\n  color: #848484;\r\n  width: 500px;\r\n  height: 122px;\r\n  resize: none;\r\n  padding: 5px;\r\n  outline: none;\r\n  border: 1px solid #ddd;\r\n  border-radius: 6px;\r\n}\r\n.form > .row.actions {\r\n  margin-left: 460px;\r\n  margin-top: 30px;\r\n}\r\n.form button {\r\n  box-shadow: 0px 0px 2px 0px #00d89a;\r\n  background: #00d89a;\r\n  color: #ffffff;\r\n  border: none;\r\n  width: 96px;\r\n  padding: 8px 10px;\r\n  border-radius: 20px;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/*--loading---*/\r\n@keyframes loading {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(720deg);\r\n  }\r\n}\r\n.uploadArea.active .icon {\r\n  animation: loading 3s infinite linear;\r\n}\r\n\r\n/* hide firefox/ie scrollbar */\r\n#songList-containner,\r\ntextarea {\r\n  /* scrollbar-width: none; */\r\n  -ms-overflow-style: none;\r\n  overflow: -moz-scrollbars-none;\r\n}\r\n\r\n/* set chrome scrollbar style */\r\ntextarea::-webkit-scrollbar {\r\n  /*滚动条整体样式*/\r\n  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/\r\n  height: 1px;\r\n}\r\ntextarea::-webkit-scrollbar-thumb {\r\n  /*滚动条里面小方块*/\r\n  border-radius: 6px;\r\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\r\n  background: #f4f4f4;\r\n}\r\ntextarea::-webkit-scrollbar-track {\r\n  /*滚动条里面轨道*/\r\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\r\n  border-radius: 10px;\r\n  background: #ffffff;\r\n}\r\n\r\n.icon {\r\n  width: 4em;\r\n  height: 4em;\r\n  vertical-align: -0.15em;\r\n  fill: currentColor;\r\n  overflow: hidden;\r\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/leancloud-storage/dist/av-min.js":
/*!*******************************************************!*\
  !*** ./node_modules/leancloud-storage/dist/av-min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=35)}([function(t,e,n){var r,i;(function(){function n(t){function e(e,n,r,i,s,o){for(;s>=0&&s<o;s+=t){var a=i?i[s]:s;r=n(r,e[a],a,e)}return r}return function(n,r,i,s){r=S(r,s,4);var o=!x(n)&&O.keys(n),a=(o||n).length,u=t>0?0:a-1;return arguments.length<3&&(i=n[o?o[u]:u],u+=t),e(n,r,i,o,u,a)}}function s(t){return function(e,n,r){n=A(n,r);for(var i=j(e),s=t>0?0:i-1;s>=0&&s<i;s+=t)if(n(e[s],s,e))return s;return-1}}function o(t,e,n){return function(r,i,s){var o=0,a=j(r);if("number"==typeof s)t>0?o=s>=0?s:Math.max(s+a,o):a=s>=0?Math.min(s+1,a):s+a+1;else if(n&&s&&a)return s=n(r,i),r[s]===i?s:-1;if(i!==i)return s=e(p.call(r,o,a),O.isNaN),s>=0?s+o:-1;for(s=t>0?o:a-1;s>=0&&s<a;s+=t)if(r[s]===i)return s;return-1}}function a(t,e){var n=P.length,r=t.constructor,i=O.isFunction(r)&&r.prototype||h,s="constructor";for(O.has(t,s)&&!O.contains(e,s)&&e.push(s);n--;)(s=P[n])in t&&t[s]!==i[s]&&!O.contains(e,s)&&e.push(s)}var u=this,c=u._,l=Array.prototype,h=Object.prototype,f=Function.prototype,d=l.push,p=l.slice,_=h.toString,v=h.hasOwnProperty,y=Array.isArray,m=Object.keys,g=f.bind,b=Object.create,w=function(){},O=function(t){return t instanceof O?t:this instanceof O?void(this._wrapped=t):new O(t)};void 0!==t&&t.exports&&(e=t.exports=O),e._=O,O.VERSION="1.8.3";var S=function(t,e,n){if(void 0===e)return t;switch(null==n?3:n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,s){return t.call(e,n,r,i,s)}}return function(){return t.apply(e,arguments)}},A=function(t,e,n){return null==t?O.identity:O.isFunction(t)?S(t,e,n):O.isObject(t)?O.matcher(t):O.property(t)};O.iteratee=function(t,e){return A(t,e,1/0)};var C=function(t,e){return function(n){var r=arguments.length;if(r<2||null==n)return n;for(var i=1;i<r;i++)for(var s=arguments[i],o=t(s),a=o.length,u=0;u<a;u++){var c=o[u];e&&void 0!==n[c]||(n[c]=s[c])}return n}},E=function(t){if(!O.isObject(t))return{};if(b)return b(t);w.prototype=t;var e=new w;return w.prototype=null,e},T=function(t){return function(e){return null==e?void 0:e[t]}},N=Math.pow(2,53)-1,j=T("length"),x=function(t){var e=j(t);return"number"==typeof e&&e>=0&&e<=N};O.each=O.forEach=function(t,e,n){e=S(e,n);var r,i;if(x(t))for(r=0,i=t.length;r<i;r++)e(t[r],r,t);else{var s=O.keys(t);for(r=0,i=s.length;r<i;r++)e(t[s[r]],s[r],t)}return t},O.map=O.collect=function(t,e,n){e=A(e,n);for(var r=!x(t)&&O.keys(t),i=(r||t).length,s=Array(i),o=0;o<i;o++){var a=r?r[o]:o;s[o]=e(t[a],a,t)}return s},O.reduce=O.foldl=O.inject=n(1),O.reduceRight=O.foldr=n(-1),O.find=O.detect=function(t,e,n){var r;if(void 0!==(r=x(t)?O.findIndex(t,e,n):O.findKey(t,e,n))&&-1!==r)return t[r]},O.filter=O.select=function(t,e,n){var r=[];return e=A(e,n),O.each(t,function(t,n,i){e(t,n,i)&&r.push(t)}),r},O.reject=function(t,e,n){return O.filter(t,O.negate(A(e)),n)},O.every=O.all=function(t,e,n){e=A(e,n);for(var r=!x(t)&&O.keys(t),i=(r||t).length,s=0;s<i;s++){var o=r?r[s]:s;if(!e(t[o],o,t))return!1}return!0},O.some=O.any=function(t,e,n){e=A(e,n);for(var r=!x(t)&&O.keys(t),i=(r||t).length,s=0;s<i;s++){var o=r?r[s]:s;if(e(t[o],o,t))return!0}return!1},O.contains=O.includes=O.include=function(t,e,n,r){return x(t)||(t=O.values(t)),("number"!=typeof n||r)&&(n=0),O.indexOf(t,e,n)>=0},O.invoke=function(t,e){var n=p.call(arguments,2),r=O.isFunction(e);return O.map(t,function(t){var i=r?e:t[e];return null==i?i:i.apply(t,n)})},O.pluck=function(t,e){return O.map(t,O.property(e))},O.where=function(t,e){return O.filter(t,O.matcher(e))},O.findWhere=function(t,e){return O.find(t,O.matcher(e))},O.max=function(t,e,n){var r,i,s=-1/0,o=-1/0;if(null==e&&null!=t){t=x(t)?t:O.values(t);for(var a=0,u=t.length;a<u;a++)(r=t[a])>s&&(s=r)}else e=A(e,n),O.each(t,function(t,n,r){((i=e(t,n,r))>o||i===-1/0&&s===-1/0)&&(s=t,o=i)});return s},O.min=function(t,e,n){var r,i,s=1/0,o=1/0;if(null==e&&null!=t){t=x(t)?t:O.values(t);for(var a=0,u=t.length;a<u;a++)(r=t[a])<s&&(s=r)}else e=A(e,n),O.each(t,function(t,n,r){((i=e(t,n,r))<o||i===1/0&&s===1/0)&&(s=t,o=i)});return s},O.shuffle=function(t){for(var e,n=x(t)?t:O.values(t),r=n.length,i=Array(r),s=0;s<r;s++)e=O.random(0,s),e!==s&&(i[s]=i[e]),i[e]=n[s];return i},O.sample=function(t,e,n){return null==e||n?(x(t)||(t=O.values(t)),t[O.random(t.length-1)]):O.shuffle(t).slice(0,Math.max(0,e))},O.sortBy=function(t,e,n){return e=A(e,n),O.pluck(O.map(t,function(t,n,r){return{value:t,index:n,criteria:e(t,n,r)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(n<r||void 0===r)return-1}return t.index-e.index}),"value")};var U=function(t){return function(e,n,r){var i={};return n=A(n,r),O.each(e,function(r,s){var o=n(r,s,e);t(i,r,o)}),i}};O.groupBy=U(function(t,e,n){O.has(t,n)?t[n].push(e):t[n]=[e]}),O.indexBy=U(function(t,e,n){t[n]=e}),O.countBy=U(function(t,e,n){O.has(t,n)?t[n]++:t[n]=1}),O.toArray=function(t){return t?O.isArray(t)?p.call(t):x(t)?O.map(t,O.identity):O.values(t):[]},O.size=function(t){return null==t?0:x(t)?t.length:O.keys(t).length},O.partition=function(t,e,n){e=A(e,n);var r=[],i=[];return O.each(t,function(t,n,s){(e(t,n,s)?r:i).push(t)}),[r,i]},O.first=O.head=O.take=function(t,e,n){if(null!=t)return null==e||n?t[0]:O.initial(t,t.length-e)},O.initial=function(t,e,n){return p.call(t,0,Math.max(0,t.length-(null==e||n?1:e)))},O.last=function(t,e,n){if(null!=t)return null==e||n?t[t.length-1]:O.rest(t,Math.max(0,t.length-e))},O.rest=O.tail=O.drop=function(t,e,n){return p.call(t,null==e||n?1:e)},O.compact=function(t){return O.filter(t,O.identity)};var k=function(t,e,n,r){for(var i=[],s=0,o=r||0,a=j(t);o<a;o++){var u=t[o];if(x(u)&&(O.isArray(u)||O.isArguments(u))){e||(u=k(u,e,n));var c=0,l=u.length;for(i.length+=l;c<l;)i[s++]=u[c++]}else n||(i[s++]=u)}return i};O.flatten=function(t,e){return k(t,e,!1)},O.without=function(t){return O.difference(t,p.call(arguments,1))},O.uniq=O.unique=function(t,e,n,r){O.isBoolean(e)||(r=n,n=e,e=!1),null!=n&&(n=A(n,r));for(var i=[],s=[],o=0,a=j(t);o<a;o++){var u=t[o],c=n?n(u,o,t):u;e?(o&&s===c||i.push(u),s=c):n?O.contains(s,c)||(s.push(c),i.push(u)):O.contains(i,u)||i.push(u)}return i},O.union=function(){return O.uniq(k(arguments,!0,!0))},O.intersection=function(t){for(var e=[],n=arguments.length,r=0,i=j(t);r<i;r++){var s=t[r];if(!O.contains(e,s)){for(var o=1;o<n&&O.contains(arguments[o],s);o++);o===n&&e.push(s)}}return e},O.difference=function(t){var e=k(arguments,!0,!0,1);return O.filter(t,function(t){return!O.contains(e,t)})},O.zip=function(){return O.unzip(arguments)},O.unzip=function(t){for(var e=t&&O.max(t,j).length||0,n=Array(e),r=0;r<e;r++)n[r]=O.pluck(t,r);return n},O.object=function(t,e){for(var n={},r=0,i=j(t);r<i;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n},O.findIndex=s(1),O.findLastIndex=s(-1),O.sortedIndex=function(t,e,n,r){n=A(n,r,1);for(var i=n(e),s=0,o=j(t);s<o;){var a=Math.floor((s+o)/2);n(t[a])<i?s=a+1:o=a}return s},O.indexOf=o(1,O.findIndex,O.sortedIndex),O.lastIndexOf=o(-1,O.findLastIndex),O.range=function(t,e,n){null==e&&(e=t||0,t=0),n=n||1;for(var r=Math.max(Math.ceil((e-t)/n),0),i=Array(r),s=0;s<r;s++,t+=n)i[s]=t;return i};var I=function(t,e,n,r,i){if(!(r instanceof e))return t.apply(n,i);var s=E(t.prototype),o=t.apply(s,i);return O.isObject(o)?o:s};O.bind=function(t,e){if(g&&t.bind===g)return g.apply(t,p.call(arguments,1));if(!O.isFunction(t))throw new TypeError("Bind must be called on a function");var n=p.call(arguments,2),r=function(){return I(t,r,e,this,n.concat(p.call(arguments)))};return r},O.partial=function(t){var e=p.call(arguments,1),n=function(){for(var r=0,i=e.length,s=Array(i),o=0;o<i;o++)s[o]=e[o]===O?arguments[r++]:e[o];for(;r<arguments.length;)s.push(arguments[r++]);return I(t,n,this,this,s)};return n},O.bindAll=function(t){var e,n,r=arguments.length;if(r<=1)throw new Error("bindAll must be passed function names");for(e=1;e<r;e++)n=arguments[e],t[n]=O.bind(t[n],t);return t},O.memoize=function(t,e){var n=function(r){var i=n.cache,s=""+(e?e.apply(this,arguments):r);return O.has(i,s)||(i[s]=t.apply(this,arguments)),i[s]};return n.cache={},n},O.delay=function(t,e){var n=p.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},O.defer=O.partial(O.delay,O,1),O.throttle=function(t,e,n){var r,i,s,o=null,a=0;n||(n={});var u=function(){a=!1===n.leading?0:O.now(),o=null,s=t.apply(r,i),o||(r=i=null)};return function(){var c=O.now();a||!1!==n.leading||(a=c);var l=e-(c-a);return r=this,i=arguments,l<=0||l>e?(o&&(clearTimeout(o),o=null),a=c,s=t.apply(r,i),o||(r=i=null)):o||!1===n.trailing||(o=setTimeout(u,l)),s}},O.debounce=function(t,e,n){var r,i,s,o,a,u=function(){var c=O.now()-o;c<e&&c>=0?r=setTimeout(u,e-c):(r=null,n||(a=t.apply(s,i),r||(s=i=null)))};return function(){s=this,i=arguments,o=O.now();var c=n&&!r;return r||(r=setTimeout(u,e)),c&&(a=t.apply(s,i),s=i=null),a}},O.wrap=function(t,e){return O.partial(e,t)},O.negate=function(t){return function(){return!t.apply(this,arguments)}},O.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},O.after=function(t,e){return function(){if(--t<1)return e.apply(this,arguments)}},O.before=function(t,e){var n;return function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=null),n}},O.once=O.partial(O.before,2);var R=!{toString:null}.propertyIsEnumerable("toString"),P=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];O.keys=function(t){if(!O.isObject(t))return[];if(m)return m(t);var e=[];for(var n in t)O.has(t,n)&&e.push(n);return R&&a(t,e),e},O.allKeys=function(t){if(!O.isObject(t))return[];var e=[];for(var n in t)e.push(n);return R&&a(t,e),e},O.values=function(t){for(var e=O.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=t[e[i]];return r},O.mapObject=function(t,e,n){e=A(e,n);for(var r,i=O.keys(t),s=i.length,o={},a=0;a<s;a++)r=i[a],o[r]=e(t[r],r,t);return o},O.pairs=function(t){for(var e=O.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=[e[i],t[e[i]]];return r},O.invert=function(t){for(var e={},n=O.keys(t),r=0,i=n.length;r<i;r++)e[t[n[r]]]=n[r];return e},O.functions=O.methods=function(t){var e=[];for(var n in t)O.isFunction(t[n])&&e.push(n);return e.sort()},O.extend=C(O.allKeys),O.extendOwn=O.assign=C(O.keys),O.findKey=function(t,e,n){e=A(e,n);for(var r,i=O.keys(t),s=0,o=i.length;s<o;s++)if(r=i[s],e(t[r],r,t))return r},O.pick=function(t,e,n){var r,i,s={},o=t;if(null==o)return s;O.isFunction(e)?(i=O.allKeys(o),r=S(e,n)):(i=k(arguments,!1,!1,1),r=function(t,e,n){return e in n},o=Object(o));for(var a=0,u=i.length;a<u;a++){var c=i[a],l=o[c];r(l,c,o)&&(s[c]=l)}return s},O.omit=function(t,e,n){if(O.isFunction(e))e=O.negate(e);else{var r=O.map(k(arguments,!1,!1,1),String);e=function(t,e){return!O.contains(r,e)}}return O.pick(t,e,n)},O.defaults=C(O.allKeys,!0),O.create=function(t,e){var n=E(t);return e&&O.extendOwn(n,e),n},O.clone=function(t){return O.isObject(t)?O.isArray(t)?t.slice():O.extend({},t):t},O.tap=function(t,e){return e(t),t},O.isMatch=function(t,e){var n=O.keys(e),r=n.length;if(null==t)return!r;for(var i=Object(t),s=0;s<r;s++){var o=n[s];if(e[o]!==i[o]||!(o in i))return!1}return!0};var D=function(t,e,n,r){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return t===e;t instanceof O&&(t=t._wrapped),e instanceof O&&(e=e._wrapped);var i=_.call(t);if(i!==_.call(e))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:0==+t?1/+t==1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e}var s="[object Array]"===i;if(!s){if("object"!=typeof t||"object"!=typeof e)return!1;var o=t.constructor,a=e.constructor;if(o!==a&&!(O.isFunction(o)&&o instanceof o&&O.isFunction(a)&&a instanceof a)&&"constructor"in t&&"constructor"in e)return!1}n=n||[],r=r||[];for(var u=n.length;u--;)if(n[u]===t)return r[u]===e;if(n.push(t),r.push(e),s){if((u=t.length)!==e.length)return!1;for(;u--;)if(!D(t[u],e[u],n,r))return!1}else{var c,l=O.keys(t);if(u=l.length,O.keys(e).length!==u)return!1;for(;u--;)if(c=l[u],!O.has(e,c)||!D(t[c],e[c],n,r))return!1}return n.pop(),r.pop(),!0};O.isEqual=function(t,e){return D(t,e)},O.isEmpty=function(t){return null==t||(x(t)&&(O.isArray(t)||O.isString(t)||O.isArguments(t))?0===t.length:0===O.keys(t).length)},O.isElement=function(t){return!(!t||1!==t.nodeType)},O.isArray=y||function(t){return"[object Array]"===_.call(t)},O.isObject=function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},O.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){O["is"+t]=function(e){return _.call(e)==="[object "+t+"]"}}),O.isArguments(arguments)||(O.isArguments=function(t){return O.has(t,"callee")}), true&&"object"!=typeof Int8Array&&(O.isFunction=function(t){return"function"==typeof t||!1}),O.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},O.isNaN=function(t){return O.isNumber(t)&&t!==+t},O.isBoolean=function(t){return!0===t||!1===t||"[object Boolean]"===_.call(t)},O.isNull=function(t){return null===t},O.isUndefined=function(t){return void 0===t},O.has=function(t,e){return null!=t&&v.call(t,e)},O.noConflict=function(){return u._=c,this},O.identity=function(t){return t},O.constant=function(t){return function(){return t}},O.noop=function(){},O.property=T,O.propertyOf=function(t){return null==t?function(){}:function(e){return t[e]}},O.matcher=O.matches=function(t){return t=O.extendOwn({},t),function(e){return O.isMatch(e,t)}},O.times=function(t,e,n){var r=Array(Math.max(0,t));e=S(e,n,1);for(var i=0;i<t;i++)r[i]=e(i);return r},O.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},O.now=Date.now||function(){return(new Date).getTime()};var F={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},L=O.invert(F),q=function(t){var e=function(e){return t[e]},n="(?:"+O.keys(t).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,e):t}};O.escape=q(F),O.unescape=q(L),O.result=function(t,e,n){var r=null==t?void 0:t[e];return void 0===r&&(r=n),O.isFunction(r)?r.call(t):r};var M=0;O.uniqueId=function(t){var e=++M+"";return t?t+e:e},O.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var B=/(.)^/,J={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Q=/\\|'|\r|\n|\u2028|\u2029/g,V=function(t){return"\\"+J[t]};O.template=function(t,e,n){!e&&n&&(e=n),e=O.defaults({},e,O.templateSettings);var r=RegExp([(e.escape||B).source,(e.interpolate||B).source,(e.evaluate||B).source].join("|")+"|$","g"),i=0,s="__p+='";t.replace(r,function(e,n,r,o,a){return s+=t.slice(i,a).replace(Q,V),i=a+e.length,n?s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?s+="'+\n((__t=("+r+"))==null?'':__t)+\n'":o&&(s+="';\n"+o+"\n__p+='"),e}),s+="';\n",e.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{var o=new Function(e.variable||"obj","_",s)}catch(t){throw t.source=s,t}var a=function(t){return o.call(this,t,O)};return a.source="function("+(e.variable||"obj")+"){\n"+s+"}",a},O.chain=function(t){var e=O(t);return e._chain=!0,e};var W=function(t,e){return t._chain?O(e).chain():e};O.mixin=function(t){O.each(O.functions(t),function(e){var n=O[e]=t[e];O.prototype[e]=function(){var t=[this._wrapped];return d.apply(t,arguments),W(this,n.apply(O,t))}})},O.mixin(O),O.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=l[t];O.prototype[t]=function(){var n=this._wrapped;return e.apply(n,arguments),"shift"!==t&&"splice"!==t||0!==n.length||delete n[0],W(this,n)}}),O.each(["concat","join","slice"],function(t){var e=l[t];O.prototype[t]=function(){return W(this,e.apply(this._wrapped,arguments))}}),O.prototype.value=function(){return this._wrapped},O.prototype.valueOf=O.prototype.toJSON=O.prototype.value,O.prototype.toString=function(){return""+this._wrapped},r=[],void 0!==(i=function(){return O}.apply(e,r))&&(t.exports=i)}).call(this)},function(t,e,n){"use strict";var r=(n(0),n(46).Promise);r._continueWhile=function(t,e){return t()?e().then(function(){return r._continueWhile(t,e)}):r.resolve()},t.exports=r},function(t,e,n){"use strict";var r=n(0),i=n(50),s=n(0),o=s.extend,a=n(1),u=n(5),c=n(3),l=c.getSessionToken,h=c.ajax,f=function(t,e){var n=(new Date).getTime(),r=i(n+t);return e?r+","+n+",master":r+","+n},d=function(t,e){e?t["X-LC-Sign"]=f(u.applicationKey):t["X-LC-Key"]=u.applicationKey},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1],n={"X-LC-Id":u.applicationId,"Content-Type":"application/json;charset=UTF-8"},r=!1;return"boolean"==typeof t.useMasterKey?r=t.useMasterKey:"boolean"==typeof u._config.useMasterKey&&(r=u._config.useMasterKey),r?u.masterKey?e?n["X-LC-Sign"]=f(u.masterKey,!0):n["X-LC-Key"]=u.masterKey+",master":(console.warn("masterKey is not set, fall back to use appKey"),d(n,e)):d(n,e),u.hookKey&&(n["X-LC-Hook-Key"]=u.hookKey),null!==u._config.production&&(n["X-LC-Prod"]=String(u._config.production)),n["X-LC-UA"]=u._sharedConfig.userAgent,a.resolve().then(function(){var e=l(t);if(e)n["X-LC-Session"]=e;else if(!u._config.disableCurrentUser)return u.User.currentAsync().then(function(t){return t&&t._sessionToken&&(n["X-LC-Session"]=t._sessionToken),n});return n})},_=function(t){var e=t.service,n=void 0===e?"api":e,r=t.version,i=void 0===r?"1.1":r,s=t.path,o=u._config.serverURLs[n];if(!o)throw new Error("undefined server URL for "+n);return"/"!==o.charAt(o.length-1)&&(o+="/"),o+=i,s&&(o+=s),o},v=function(t){var e=t.service,n=t.version,i=t.method,s=t.path,o=t.query,a=t.data,c=void 0===a?{}:a,l=t.authOptions,f=t.signKey,d=void 0===f||f;if(!u.applicationId||!u.applicationKey&&!u.masterKey)throw new Error("Not initialized");u._appRouter.refresh();var v=u._config.requestTimeout,y=_({service:e,path:s,version:n});return p(l,d).then(function(t){return h({method:i,url:y,query:o,data:c,headers:t,timeout:v}).catch(function(t){var e={code:t.code||-1,error:t.message||t.responseText};if(t.response&&t.response.code)e=t.response;else if(t.responseText)try{e=JSON.parse(t.responseText)}catch(t){}e.rawMessage=e.rawMessage||e.error,u._sharedConfig.keepErrorRawMessage||(e.error+=" ["+(t.statusCode||"N/A")+" "+i+" "+y+"]");var n=new Error(e.error);throw delete e.error,r.extend(n,e)})})},y=function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments[5],a=arguments[6],u="";if(t&&(u+="/"+t),e&&(u+="/"+e),n&&(u+="/"+n),i&&i._fetchWhenSave)throw new Error("_fetchWhenSave should be in the query");if(i&&i._where)throw new Error("_where should be in the query");return r&&"get"===r.toLowerCase()&&(a=o({},a,i),i=null),v({method:r,path:u,query:a,data:i,authOptions:s})};u.request=v,t.exports={_request:y,request:v}},function(t,e,n){"use strict";function r(t){var e=new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),n=e.exec(t);if(!n)return null;var r=n[1]||0,i=(n[2]||1)-1,s=n[3]||0,o=n[4]||0,a=n[5]||0,u=n[6]||0,c=n[8]||0;return new Date(Date.UTC(r,i,s,o,a,u,c))}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=n(0),o=n(7),a=n(6),u=a("leancloud:request"),c=a("leancloud:request:error"),l=n(1),h=0,f=function(t){var e=t.method,n=t.url,r=t.query,s=t.data,f=t.headers,d=void 0===f?{}:f,p=t.onprogress,_=t.timeout,v=h++;u("request("+v+")",e,n,r,s,d);var y={};if(r)for(var m in r)"object"===i(r[m])?y[m]=JSON.stringify(r[m]):y[m]=r[m];return new l(function(t,i){var l=o(e,n).set(d).query(y).send(s);p&&l.on("progress",p),_&&l.timeout(_),l.end(function(o,l){return o?(l&&(a.enabled("leancloud:request")||c("request("+v+")",e,n,r,s,d),c("response("+v+")",l.status,l.body||l.text,l.header),o.statusCode=l.status,o.responseText=l.text,o.response=l.body),i(o)):(u("response("+v+")",l.status,l.body||l.text,l.header),t(l.body))})})},d=function(t){return s.isNull(t)||s.isUndefined(t)},p=function(t){return s.isArray(t)?t:void 0===t||null===t?[]:[t]},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.keys,n=t.include,r=t.includeACL,i={};return e&&(i.keys=p(e).join(",")),n&&(i.include=p(n).join(",")),r&&(i.returnACL=r),i},v=function(t){return t.sessionToken?t.sessionToken:t.user&&"function"==typeof t.user.getSessionToken?t.user.getSessionToken():void 0},y=function(t){return function(e){return t(e),e}},m=function(){},g=function(t,e,n){var r;return r=e&&e.hasOwnProperty("constructor")?e.constructor:function(){t.apply(this,arguments)},s.extend(r,t),m.prototype=t.prototype,r.prototype=new m,e&&s.extend(r.prototype,e),n&&s.extend(r,n),r.prototype.constructor=r,r.__super__=t.prototype,r},b=function(t,e,n){var r=e.split("."),i=r.pop(),s=t;return r.forEach(function(t){void 0===s[t]&&(s[t]={}),s=s[t]}),s[i]=n,t},w=function(t,e){for(var n=e.split("."),r=n.pop(),i=t,s=0;s<n.length;s++)if(void 0===(i=i[n[s]]))return[void 0,void 0,r];return[i[r],i,r]};t.exports={ajax:f,isNullOrUndefined:d,ensureArray:p,transformFetchOptions:_,getSessionToken:v,tap:y,inherits:g,parseDate:r,setValue:b,findValue:w}},function(t,e,n){"use strict";function r(t,e){var n=new Error(e);return n.code=t,n}n(0).extend(r,{OTHER_CAUSE:-1,INTERNAL_SERVER_ERROR:1,CONNECTION_FAILED:100,OBJECT_NOT_FOUND:101,INVALID_QUERY:102,INVALID_CLASS_NAME:103,MISSING_OBJECT_ID:104,INVALID_KEY_NAME:105,INVALID_POINTER:106,INVALID_JSON:107,COMMAND_UNAVAILABLE:108,NOT_INITIALIZED:109,INCORRECT_TYPE:111,INVALID_CHANNEL_NAME:112,PUSH_MISCONFIGURED:115,OBJECT_TOO_LARGE:116,OPERATION_FORBIDDEN:119,CACHE_MISS:120,INVALID_NESTED_KEY:121,INVALID_FILE_NAME:122,INVALID_ACL:123,TIMEOUT:124,INVALID_EMAIL_ADDRESS:125,MISSING_CONTENT_TYPE:126,MISSING_CONTENT_LENGTH:127,INVALID_CONTENT_LENGTH:128,FILE_TOO_LARGE:129,FILE_SAVE_ERROR:130,FILE_DELETE_ERROR:153,DUPLICATE_VALUE:137,INVALID_ROLE_NAME:139,EXCEEDED_QUOTA:140,SCRIPT_FAILED:141,VALIDATION_ERROR:142,INVALID_IMAGE_DATA:150,UNSAVED_FILE_ERROR:151,INVALID_PUSH_TIME_ERROR:152,USERNAME_MISSING:200,PASSWORD_MISSING:201,USERNAME_TAKEN:202,EMAIL_TAKEN:203,EMAIL_MISSING:204,EMAIL_NOT_FOUND:205,SESSION_MISSING:206,MUST_CREATE_USER_THROUGH_SIGNUP:207,ACCOUNT_ALREADY_LINKED:208,LINKED_ID_MISSING:250,INVALID_LINKED_SESSION:251,UNSUPPORTED_SERVICE:252,X_DOMAIN_REQUEST:602}),t.exports=r},function(t,e,n){"use strict";(function(e){var r=n(0),i=n(37),s=n(3),o=s.inherits,a=s.parseDate,u=e.AV||{};u._config={serverURLs:{},useMasterKey:!1,production:null,realtime:null,requestTimeout:null},u._sharedConfig={userAgent:i,liveQueryRealtime:null},u._getAVPath=function(t){if(!u.applicationId)throw new Error("You need to call AV.initialize before using AV.");if(t||(t=""),!r.isString(t))throw new Error("Tried to get a localStorage path that wasn't a String.");return"/"===t[0]&&(t=t.substring(1)),"AV/"+u.applicationId+"/"+t};var c=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},l=function(){return""+c()+c()+"-"+c()+"-"+c()+"-"+c()+"-"+c()+c()+c()};u._installationId=null,u._getInstallationId=function(){if(u._installationId)return u.Promise.resolve(u._installationId);var t=u._getAVPath("installationId");return u.localStorage.getItemAsync(t).then(function(e){return u._installationId=e,u._installationId?e:(u._installationId=e=l(),u.localStorage.setItemAsync(t,e).then(function(){return e}))})},u._subscriptionId=null,u._refreshSubscriptionId=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u._getAVPath("subscriptionId"),e=u._subscriptionId=l();return u.localStorage.setItemAsync(t,e).then(function(){return e})},u._getSubscriptionId=function(){if(u._subscriptionId)return u.Promise.resolve(u._subscriptionId);var t=u._getAVPath("subscriptionId");return u.localStorage.getItemAsync(t).then(function(e){return u._subscriptionId=e,u._subscriptionId||(e=u._refreshSubscriptionId(t)),e})},u._parseDate=a,u._extend=function(t,e){var n=o(this,t,e);return n.extend=this.extend,n},u._encode=function(t,e,n){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(t instanceof u.Object){if(n)throw new Error("AV.Objects not allowed here");return e&&!r.include(e,t)&&t._hasData?t._toFullJSON(e.concat(t),i):t._toPointer()}if(t instanceof u.ACL)return t.toJSON();if(r.isDate(t))return i?{__type:"Date",iso:t.toJSON()}:t.toJSON();if(t instanceof u.GeoPoint)return t.toJSON();if(r.isArray(t))return r.map(t,function(t){return u._encode(t,e,n,i)});if(r.isRegExp(t))return t.source;if(t instanceof u.Relation)return t.toJSON();if(t instanceof u.Op)return t.toJSON();if(t instanceof u.File){if(!t.url()&&!t.id)throw new Error("Tried to save an object containing an unsaved file.");return t._toFullJSON(e,i)}return r.isObject(t)?r.mapObject(t,function(t,r){return u._encode(t,e,n,i)}):t},u._decode=function(t,e){if(!r.isObject(t)||r.isDate(t))return t;if(r.isArray(t))return r.map(t,function(t){return u._decode(t)});if(t instanceof u.Object)return t;if(t instanceof u.File)return t;if(t instanceof u.Op)return t;if(t instanceof u.GeoPoint)return t;if(t instanceof u.ACL)return t;if("ACL"===e)return new u.ACL(t);if(t.__op)return u.Op._decode(t);var n;if("Pointer"===t.__type){n=t.className;var i=u.Object._create(n);if(Object.keys(t).length>3){var s=r.clone(t);delete s.__type,delete s.className,i._finishFetch(s,!0)}else i._finishFetch({objectId:t.objectId},!1);return i}if("Object"===t.__type){n=t.className;var o=r.clone(t);delete o.__type,delete o.className;var a=u.Object._create(n);return a._finishFetch(o,!0),a}if("Date"===t.__type)return u._parseDate(t.iso);if("GeoPoint"===t.__type)return new u.GeoPoint({latitude:t.latitude,longitude:t.longitude});if("Relation"===t.__type){if(!e)throw new Error("key missing decoding a Relation");var c=new u.Relation(null,e);return c.targetClassName=t.className,c}if("File"===t.__type){var l=new u.File(t.name),h=r.clone(t);return delete h.__type,l._finishFetch(h),l}return r.mapObject(t,u._decode)},u.parseJSON=u._decode,u._encodeObjectOrArray=function(t){var e=function(t){return t&&t._toFullJSON&&(t=t._toFullJSON([])),r.mapObject(t,function(t){return u._encode(t,[])})};return r.isArray(t)?t.map(function(t){return e(t)}):e(t)},u._arrayEach=r.each,u._traverse=function(t,e,n){if(t instanceof u.Object){if(n=n||[],r.indexOf(n,t)>=0)return;return n.push(t),u._traverse(t.attributes,e,n),e(t)}return t instanceof u.Relation||t instanceof u.File?e(t):r.isArray(t)?(r.each(t,function(r,i){var s=u._traverse(r,e,n);s&&(t[i]=s)}),e(t)):r.isObject(t)?(u._each(t,function(r,i){var s=u._traverse(r,e,n);s&&(t[i]=s)}),e(t)):e(t)},u._objectEach=u._each=function(t,e){r.isObject(t)?r.each(r.keys(t),function(n){e(t[n],n)}):r.each(t,e)},t.exports=u}).call(e,n(8))},function(t,e,n){function r(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var i=0,s=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(i++,"%c"===t&&(s=i))}),t.splice(s,0,r)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function o(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function a(){var t;try{t=e.storage.debug}catch(t){}return!t&&"undefined"!=typeof process&&"env"in process&&(t=process.env.DEBUG),t}e=t.exports=n(45),e.log=s,e.formatArgs=i,e.save=o,e.load=a,e.useColors=r,e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(a())},function(t,e,n){function r(){}function i(t){if(!_(t))return t;var e=[];for(var n in t)s(e,n,t[n]);return e.join("&")}function s(t,e,n){if(null!=n)if(Array.isArray(n))n.forEach(function(n){s(t,e,n)});else if(_(n))for(var r in n)s(t,e+"["+r+"]",n[r]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(n));else null===n&&t.push(encodeURIComponent(e))}function o(t){for(var e,n,r={},i=t.split("&"),s=0,o=i.length;s<o;++s)e=i[s],n=e.indexOf("="),-1==n?r[decodeURIComponent(e)]="":r[decodeURIComponent(e.slice(0,n))]=decodeURIComponent(e.slice(n+1));return r}function a(t){for(var e,n,r,i,s=t.split(/\r?\n/),o={},a=0,u=s.length;a<u;++a)n=s[a],-1!==(e=n.indexOf(":"))&&(r=n.slice(0,e).toLowerCase(),i=g(n.slice(e+1)),o[r]=i);return o}function u(t){return/[\/+]json($|[^-\w])/.test(t)}function c(t){this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var e=this.xhr.status;1223===e&&(e=204),this._setStatusProperties(e),this.header=this.headers=a(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&t._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function l(t,e){var n=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new c(n)}catch(e){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=e,n.xhr?(t.rawResponse=void 0===n.xhr.responseType?n.xhr.responseText:n.xhr.response,t.status=n.xhr.status?n.xhr.status:null,t.statusCode=t.status):(t.rawResponse=null,t.status=null),n.callback(t)}n.emit("response",e);var r;try{n._isResponseOK(e)||(r=new Error(e.statusText||"Unsuccessful HTTP response"))}catch(t){r=t}r?(r.original=t,r.response=e,r.status=e.status,n.callback(r,e)):n.callback(null,e)})}function h(t,e,n){var r=m("DELETE",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r}var f;"undefined"!=typeof window?f=window:"undefined"!=typeof self?f=self:(console.warn("Using browser-only version of superagent in non-browser environment"),f=this);var d=n(43),p=n(53),_=n(13),v=n(54),y=n(52),m=e=t.exports=function(t,n){return"function"==typeof n?new e.Request("GET",t).end(n):1==arguments.length?new e.Request("GET",t):new e.Request(t,n)};e.Request=l,m.getXHR=function(){if(!(!f.XMLHttpRequest||f.location&&"file:"==f.location.protocol&&f.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Browser-only version of superagent could not find XHR")};var g="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};m.serializeObject=i,m.parseString=o,m.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},m.serialize={"application/x-www-form-urlencoded":i,"application/json":JSON.stringify},m.parse={"application/x-www-form-urlencoded":o,"application/json":JSON.parse},v(c.prototype),c.prototype._parseBody=function(t){var e=m.parse[this.type];return this.req._parser?this.req._parser(this,t):(!e&&u(this.type)&&(e=m.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null)},c.prototype.toError=function(){var t=this.req,e=t.method,n=t.url,r="cannot "+e+" "+n+" ("+this.status+")",i=new Error(r);return i.status=this.status,i.method=e,i.url=n,i},m.Response=c,d(l.prototype),p(l.prototype),l.prototype.type=function(t){return this.set("Content-Type",m.types[t]||t),this},l.prototype.accept=function(t){return this.set("Accept",m.types[t]||t),this},l.prototype.auth=function(t,e,n){1===arguments.length&&(e=""),"object"==typeof e&&null!==e&&(n=e,e=""),n||(n={type:"function"==typeof btoa?"basic":"auto"});var r=function(t){if("function"==typeof btoa)return btoa(t);throw new Error("Cannot use basic auth, btoa is not a function")};return this._auth(t,e,n,r)},l.prototype.query=function(t){return"string"!=typeof t&&(t=i(t)),t&&this._query.push(t),this},l.prototype.attach=function(t,e,n){if(e){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(t,e,n||e.name)}return this},l.prototype._getFormData=function(){return this._formData||(this._formData=new f.FormData),this._formData},l.prototype.callback=function(t,e){if(this._shouldRetry(t,e))return this._retry();var n=this._callback;this.clearTimeout(),t&&(this._maxRetries&&(t.retries=this._retries-1),this.emit("error",t)),n(t,e)},l.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},l.prototype.buffer=l.prototype.ca=l.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},l.prototype.pipe=l.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},l.prototype._isHost=function(t){return t&&"object"==typeof t&&!Array.isArray(t)&&"[object Object]"!==Object.prototype.toString.call(t)},l.prototype.end=function(t){return this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=t||r,this._finalizeQueryString(),this._end()},l.prototype._end=function(){var t=this,e=this.xhr=m.getXHR(),n=this._formData||this._data;this._setTimeouts(),e.onreadystatechange=function(){var n=e.readyState;if(n>=2&&t._responseTimeoutTimer&&clearTimeout(t._responseTimeoutTimer),4==n){var r;try{r=e.status}catch(t){r=0}if(!r){if(t.timedout||t._aborted)return;return t.crossDomainError()}t.emit("end")}};var r=function(e,n){n.total>0&&(n.percent=n.loaded/n.total*100),n.direction=e,t.emit("progress",n)};if(this.hasListeners("progress"))try{e.onprogress=r.bind(null,"download"),e.upload&&(e.upload.onprogress=r.bind(null,"upload"))}catch(t){}try{this.username&&this.password?e.open(this.method,this.url,!0,this.username,this.password):e.open(this.method,this.url,!0)}catch(t){return this.callback(t)}if(this._withCredentials&&(e.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof n&&!this._isHost(n)){var i=this._header["content-type"],s=this._serializer||m.serialize[i?i.split(";")[0]:""];!s&&u(i)&&(s=m.serialize["application/json"]),s&&(n=s(n))}for(var o in this.header)null!=this.header[o]&&this.header.hasOwnProperty(o)&&e.setRequestHeader(o,this.header[o]);return this._responseType&&(e.responseType=this._responseType),this.emit("request",this),e.send(void 0!==n?n:null),this},m.agent=function(){return new y},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(t){y.prototype[t.toLowerCase()]=function(e,n){var r=new m.Request(t,e);return this._setDefaults(r),n&&r.end(n),r}}),y.prototype.del=y.prototype.delete,m.get=function(t,e,n){var r=m("GET",t);return"function"==typeof e&&(n=e,e=null),e&&r.query(e),n&&r.end(n),r},m.head=function(t,e,n){var r=m("HEAD",t);return"function"==typeof e&&(n=e,e=null),e&&r.query(e),n&&r.end(n),r},m.options=function(t,e,n){var r=m("OPTIONS",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},m.del=h,m.delete=h,m.patch=function(t,e,n){var r=m("PATCH",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},m.post=function(t,e,n){var r=m("POST",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},m.put=function(t,e,n){var r=m("PUT",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r=n(10),i=n(5),s=e.removeAsync=r.removeItemAsync.bind(r),o=function(t,e){try{t=JSON.parse(t)}catch(t){return null}if(t){return t.expiredAt&&t.expiredAt<Date.now()?s(e).then(function(){return null}):t.value}return null};e.getAsync=function(t){return t="AV/"+i.applicationId+"/"+t,r.getItemAsync(t).then(function(e){return o(e,t)})},e.setAsync=function(t,e,n){var s={value:e};return"number"==typeof n&&(s.expiredAt=Date.now()+n),r.setItemAsync("AV/"+i.applicationId+"/"+t,JSON.stringify(s))}},function(t,e,n){"use strict";var r=n(0),i=n(1),s=n(41),o=["getItem","setItem","removeItem","clear"];s.async?r(o).each(function(t){"function"!=typeof s[t]&&(s[t]=function(){var e=new Error("Synchronous API ["+t+"] is not available in this runtime.");throw e.code="SYNC_API_NOT_AVAILABLE",e})}):r(o).each(function(t){"function"==typeof s[t]&&(s[t+"Async"]=function(){return i.resolve(s[t].apply(s,arguments))})}),t.exports=s},function(t,e,n){"use strict";t.exports="3.6.0"},function(t,e){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=n},function(t,e,n){"use strict";function r(t){return null!==t&&"object"==typeof t}t.exports=r},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){t.ACL=function(e){var n=this;if(n.permissionsById={},r.isObject(e))if(e instanceof t.User)n.setReadAccess(e,!0),n.setWriteAccess(e,!0);else{if(r.isFunction(e))throw new Error("AV.ACL() called with a function.  Did you forget ()?");t._objectEach(e,function(e,i){if(!r.isString(i))throw new Error("Tried to create an ACL with an invalid userId.");n.permissionsById[i]={},t._objectEach(e,function(t,e){if("read"!==e&&"write"!==e)throw new Error("Tried to create an ACL with an invalid permission type.");if(!r.isBoolean(t))throw new Error("Tried to create an ACL with an invalid permission value.");n.permissionsById[i][e]=t})})}},t.ACL.prototype.toJSON=function(){return r.clone(this.permissionsById)},t.ACL.prototype._setAccess=function(e,n,i){if(n instanceof t.User?n=n.id:n instanceof t.Role&&(n="role:"+n.getName()),!r.isString(n))throw new Error("userId must be a string.");if(!r.isBoolean(i))throw new Error("allowed must be either true or false.");var s=this.permissionsById[n];if(!s){if(!i)return;s={},this.permissionsById[n]=s}i?this.permissionsById[n][e]=!0:(delete s[e],r.isEmpty(s)&&delete this.permissionsById[n])},t.ACL.prototype._getAccess=function(e,n){n instanceof t.User?n=n.id:n instanceof t.Role&&(n="role:"+n.getName());var r=this.permissionsById[n];return!!r&&!!r[e]},t.ACL.prototype.setReadAccess=function(t,e){this._setAccess("read",t,e)},t.ACL.prototype.getReadAccess=function(t){return this._getAccess("read",t)},t.ACL.prototype.setWriteAccess=function(t,e){this._setAccess("write",t,e)},t.ACL.prototype.getWriteAccess=function(t){return this._getAccess("write",t)},t.ACL.prototype.setPublicReadAccess=function(t){this.setReadAccess("*",t)},t.ACL.prototype.getPublicReadAccess=function(){return this.getReadAccess("*")},t.ACL.prototype.setPublicWriteAccess=function(t){this.setWriteAccess("*",t)},t.ACL.prototype.getPublicWriteAccess=function(){return this.getWriteAccess("*")},t.ACL.prototype.getRoleReadAccess=function(e){if(e instanceof t.Role&&(e=e.getName()),r.isString(e))return this.getReadAccess("role:"+e);throw new Error("role must be a AV.Role or a String")},t.ACL.prototype.getRoleWriteAccess=function(e){if(e instanceof t.Role&&(e=e.getName()),r.isString(e))return this.getWriteAccess("role:"+e);throw new Error("role must be a AV.Role or a String")},t.ACL.prototype.setRoleReadAccess=function(e,n){if(e instanceof t.Role&&(e=e.getName()),r.isString(e))return void this.setReadAccess("role:"+e,n);throw new Error("role must be a AV.Role or a String")},t.ACL.prototype.setRoleWriteAccess=function(e,n){if(e instanceof t.Role&&(e=e.getName()),r.isString(e))return void this.setWriteAccess("role:"+e,n);throw new Error("role must be a AV.Role or a String")}}},function(t,e,n){"use strict";var r=n(0),i=n(3),s=i.tap;t.exports=function(t){t.Captcha=function(t,e){this._options=t,this._authOptions=e,this.url=void 0,this.captchaToken=void 0,this.validateToken=void 0},t.Captcha.prototype.refresh=function(){var e=this;return t.Cloud._requestCaptcha(this._options,this._authOptions).then(function(t){var n=t.captchaToken,i=t.url;return r.extend(e,{captchaToken:n,url:i}),i})},t.Captcha.prototype.verify=function(e){var n=this;return t.Cloud.verifyCaptcha(e,this.captchaToken).then(s(function(t){return n.validateToken=t}))},t.Captcha.prototype.bind=function(t,e){var n=this,r=t.textInput,i=t.image,s=t.verifyButton,o=e.success,a=e.error;if("string"==typeof r&&!(r=document.getElementById(r)))throw new Error("textInput with id "+r+" not found");if("string"==typeof i&&!(i=document.getElementById(i)))throw new Error("image with id "+i+" not found");if("string"==typeof s&&!(s=document.getElementById(s)))throw new Error("verifyButton with id "+s+" not found");this.__refresh=function(){return n.refresh().then(function(t){i.src=t,r&&(r.value="",r.focus())}).catch(function(t){return console.warn("refresh captcha fail: "+t.message)})},i&&(this.__image=i,i.src=this.url,i.addEventListener("click",this.__refresh)),this.__verify=function(){var t=r.value;n.verify(t).catch(function(t){throw n.__refresh(),t}).then(o,a).catch(function(t){return console.warn("verify captcha fail: "+t.message)})},r&&s&&(this.__verifyButton=s,s.addEventListener("click",this.__verify))},t.Captcha.prototype.unbind=function(){this.__image&&this.__image.removeEventListener("click",this.__refresh),this.__verifyButton&&this.__verifyButton.removeEventListener("click",this.__verify)},t.Captcha.request=function(e,n){var r=new t.Captcha(e,n);return r.refresh().then(function(){return r})}}},function(t,e,n){"use strict";var r=n(0),i=n(2),s=i._request,o=i.request,a=n(1);t.exports=function(t){t.Cloud=t.Cloud||{},r.extend(t.Cloud,{run:function(e,n,r){return o({service:"engine",method:"POST",path:"/functions/"+e,data:t._encode(n,null,!0),authOptions:r}).then(function(e){return t._decode(e).result})},rpc:function(e,n,i){return r.isArray(n)?a.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")):o({service:"engine",method:"POST",path:"/call/"+e,data:t._encodeObjectOrArray(n),authOptions:i}).then(function(e){return t._decode(e).result})},getServerDate:function(){return s("date",null,null,"GET").then(function(e){return t._decode(e)})},requestSmsCode:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r.isString(t)&&(t={mobilePhoneNumber:t}),!t.mobilePhoneNumber)throw new Error("Missing mobilePhoneNumber.");return e.validateToken&&(t=r.extend({},t,{validate_token:e.validateToken})),s("requestSmsCode",null,null,"POST",t,e)},verifySmsCode:function(t,e){if(!t)throw new Error("Missing sms code.");var n={};return r.isString(e)&&(n.mobilePhoneNumber=e),s("verifySmsCode",t,null,"POST",n)},_requestCaptcha:function(t,e){return s("requestCaptcha",null,null,"GET",t,e).then(function(t){var e=t.captcha_url;return{captchaToken:t.captcha_token,url:e}})},requestCaptcha:t.Captcha.request,verifyCaptcha:function(t,e){return s("verifyCaptcha",null,null,"POST",{captcha_code:t,captcha_token:e}).then(function(t){return t.validate_token})}})}},function(t,e,n){"use strict";var r=n(0),i=n(2),s=i._request,o=n(5);t.exports=o.Object.extend("_Conversation",{constructor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o.Object.prototype.constructor.call(this,null,null),this.set("name",t),void 0!==e.isSystem&&this.set("sys",!!e.isSystem),void 0!==e.isTransient&&this.set("tr",!!e.isTransient)},getCreator:function(){return this.get("c")},getLastMessageAt:function(){return this.get("lm")},getMembers:function(){return this.get("m")},addMember:function(t){return this.add("m",t)},getMutedMembers:function(){return this.get("mu")},getName:function(){return this.get("name")},isTransient:function(){return this.get("tr")},isSystem:function(){return this.get("sys")},send:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};"function"==typeof e.toJSON&&(e=e.toJSON()),"string"!=typeof e&&(e=JSON.stringify(e));var i={from_peer:t,conv_id:this.id,transient:!1,message:e};return void 0!==n.toClients&&(i.to_peers=n.toClients),void 0!==n.transient&&(i.transient=!!n.transient),void 0!==n.pushData&&(i.push_data=n.pushData),s("rtm","messages",null,"POST",i,r)},broadcast:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};"function"==typeof e.toJSON&&(e=e.toJSON()),"string"!=typeof e&&(e=JSON.stringify(e));var o={from_peer:t,conv_id:this.id,message:e};if(void 0!==n.pushData&&(o.push=n.pushData),void 0!==n.validTill){var a=n.validTill;r.isDate(a)&&(a=a.getTime()),n.valid_till=a}return s("rtm","broadcast",null,"POST",o,i)}})},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){var e=/\s+/,n=Array.prototype.slice;t.Events={on:function(t,n,r){var i,s,o,a,u;if(!n)return this;for(t=t.split(e),i=this._callbacks||(this._callbacks={}),s=t.shift();s;)u=i[s],o=u?u.tail:{},o.next=a={},o.context=r,o.callback=n,i[s]={tail:a,next:u?u.next:o},s=t.shift();return this},off:function(t,n,i){var s,o,a,u,c,l;if(o=this._callbacks){if(!(t||n||i))return delete this._callbacks,this;for(t=t?t.split(e):r.keys(o),s=t.shift();s;)if(a=o[s],delete o[s],a&&(n||i)){for(u=a.tail,a=a.next;a!==u;)c=a.callback,l=a.context,(n&&c!==n||i&&l!==i)&&this.on(s,c,l),a=a.next;s=t.shift()}return this}},trigger:function(t){var r,i,s,o,a,u,c;if(!(s=this._callbacks))return this;for(u=s.all,t=t.split(e),c=n.call(arguments,1),r=t.shift();r;){if(i=s[r])for(o=i.tail;(i=i.next)!==o;)i.callback.apply(i.context||this,c);if(i=u)for(o=i.tail,a=[r].concat(c);(i=i.next)!==o;)i.callback.apply(i.context||this,a);r=t.shift()}return this}},t.Events.bind=t.Events.on,t.Events.unbind=t.Events.off}},function(t,e,n){"use strict";var r=n(0),i=n(38),s=n(39),o=n(40),a=n(4),u=n(2)._request,c=n(1),l=n(3),h=l.tap,f=l.transformFetchOptions,d=n(6)("leancloud:file"),p=n(42);t.exports=function(t){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},n=function(t){return r.isString(t)?t.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4]:""},l=function(t){if(t<26)return String.fromCharCode(65+t);if(t<52)return String.fromCharCode(t-26+97);if(t<62)return String.fromCharCode(t-52+48);if(62===t)return"+";if(63===t)return"/";throw new Error("Tried to encode large digit "+t+" in base64.")},_=function(t){var e=[];return e.length=Math.ceil(t.length/3),r.times(e.length,function(n){var r=t[3*n],i=t[3*n+1]||0,s=t[3*n+2]||0,o=3*n+1<t.length,a=3*n+2<t.length;e[n]=[l(r>>2&63),l(r<<4&48|i>>4&15),o?l(i<<2&60|s>>6&3):"=",a?l(63&s):"="].join("")}),e.join("")};t.File=function(e,i,s){if(this.attributes={name:e,url:"",metaData:{},base64:""},r.isString(i))throw new TypeError("Creating an AV.File from a String is not yet supported.");r.isArray(i)&&(this.attributes.metaData.size=i.length,i={base64:_(i)}),this._extName="",this._data=i,this._uploadHeaders={},"undefined"!=typeof Blob&&i instanceof Blob&&(i.size&&(this.attributes.metaData.size=i.size),i.name&&(this._extName=n(i.name)));var o=void 0;if(i&&i.owner)o=i.owner;else if(!t._config.disableCurrentUser)try{o=t.User.current()}catch(t){if("SYNC_API_NOT_AVAILABLE"!==t.code)throw t;console.warn("Get current user failed. It seems this runtime use an async storage system, please create AV.File in the callback of AV.User.currentAsync().")}this.attributes.metaData.owner=o?o.id:"unknown",this.set("mime_type",s)},t.File.withURL=function(e,n,r,i){if(!e||!n)throw new Error("Please provide file name and url");var s=new t.File(e,null,i);if(r)for(var o in r)s.attributes.metaData[o]||(s.attributes.metaData[o]=r[o]);return s.attributes.url=n,s.attributes.metaData.__source="external",s},t.File.createWithoutData=function(e){var n=new t.File;return n.id=e,n},r.extend(t.File.prototype,{className:"_File",_toFullJSON:function(e){var n=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],s=r.clone(this.attributes);return t._objectEach(s,function(n,r){s[r]=t._encode(n,e,void 0,i)}),t._objectEach(this._operations,function(t,e){s[e]=t}),r.has(this,"id")&&(s.objectId=this.id),r(["createdAt","updatedAt"]).each(function(t){if(r.has(n,t)){var e=n[t];s[t]=r.isDate(e)?e.toJSON():e}}),i&&(s.__type="File"),s},toFullJSON:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this._toFullJSON(t)},toJSON:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[this];return this._toFullJSON(n,!1)},getACL:function(){return this._acl},setACL:function(e){if(!(e instanceof t.ACL))return new a(a.OTHER_CAUSE,"ACL must be a AV.ACL.");this._acl=e},name:function(){return this.get("name")},url:function(){return this.get("url")},get:function(t){switch(t){case"objectId":return this.id;case"url":case"name":case"mime_type":case"metaData":case"createdAt":case"updatedAt":return this.attributes[t];default:return this.attributes.metaData[t]}},set:function(){for(var t=this,e=function(e,n){switch(e){case"name":case"url":case"mime_type":case"base64":case"metaData":t.attributes[e]=n;break;default:t.attributes.metaData[e]=n}},n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];switch(r.length){case 1:for(var s in r[0])e(s,r[0][s]);break;case 2:e(r[0],r[1])}},setUploadHeader:function(t,e){return this._uploadHeaders[t]=e,this},metaData:function(t,e){return t&&e?(this.attributes.metaData[t]=e,this):t&&!e?this.attributes.metaData[t]:this.attributes.metaData},thumbnailURL:function(t,e,n,r,i){var s=this.attributes.url;if(!s)throw new Error("Invalid url.");if(!t||!e||t<=0||e<=0)throw new Error("Invalid width or height value.");if(n=n||100,r=r||!0,n<=0||n>100)throw new Error("Invalid quality value.");return i=i||"png",s+"?imageView/"+(r?2:1)+"/w/"+t+"/h/"+e+"/q/"+n+"/format/"+i},size:function(){return this.metaData().size},ownerId:function(){return this.metaData().owner},destroy:function(t){return this.id?u("files",null,this.id,"DELETE",null,t):c.reject(new Error("The file id is not eixsts."))},_fileToken:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fileTokens",i=this.attributes.name,s=n(i);!s&&this._extName&&(i+=this._extName,s=this._extName);var o=e()+e()+e()+e()+e()+s,a={key:o,name:i,ACL:this._acl,mime_type:t,metaData:this.attributes.metaData};return this._qiniu_key=o,u(r,null,null,"POST",a)},save:function(t){var e=this;if(this.id)throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it.");if(!this._previousSave)if(this._data){var n=this.get("mime_type");this._previousSave=this._fileToken(n).then(function(r){return r.mime_type&&(n=r.mime_type,e.set("mime_type",n)),e._token=r.token,c.resolve().then(function(){var t=e._data;if(t&&t.base64)return p(t.base64,n);if(t&&t.blob)return!t.blob.type&&n&&(t.blob.type=n),t.blob.name||(t.blob.name=e.get("name")),t.blob;if("undefined"!=typeof Blob&&t instanceof Blob)return t;throw new TypeError("malformed file data")}).then(function(n){switch(r.provider){case"s3":return o(r,n,e,t);case"qcloud":return i(r,n,e,t);case"qiniu":default:return s(r,n,e,t)}}).then(h(function(){return e._callback(!0)}),function(t){throw e._callback(!1),t})})}else if(this.attributes.url&&"external"===this.attributes.metaData.__source){var r={name:this.attributes.name,ACL:this._acl,metaData:this.attributes.metaData,mime_type:this.mimeType,url:this.attributes.url};this._previousSave=u("files",this.attributes.name,null,"post",r).then(function(t){return e.attributes.name=t.name,e.attributes.url=t.url,e.id=t.objectId,t.size&&(e.attributes.metaData.size=t.size),e})}return this._previousSave},_callback:function(t){u("fileCallback",null,null,"post",{token:this._token,result:t}).catch(d),delete this._token,delete this._data},fetch:function(t,e){return u("files",null,this.id,"GET",f(t),e).then(this._finishFetch.bind(this))},_finishFetch:function(e){var n=t.Object.prototype.parse(e);return n.attributes={name:n.name,url:n.url,mime_type:n.mime_type,bucket:n.bucket},n.attributes.metaData=n.metaData||{},n.id=n.objectId,delete n.objectId,delete n.metaData,delete n.url,delete n.name,delete n.mime_type,delete n.bucket,r.extend(this,n),this}})}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){t.GeoPoint=function(e,n){r.isArray(e)?(t.GeoPoint._validate(e[0],e[1]),this.latitude=e[0],this.longitude=e[1]):r.isObject(e)?(t.GeoPoint._validate(e.latitude,e.longitude),this.latitude=e.latitude,this.longitude=e.longitude):r.isNumber(e)&&r.isNumber(n)?(t.GeoPoint._validate(e,n),this.latitude=e,this.longitude=n):(this.latitude=0,this.longitude=0);var i=this;this.__defineGetter__&&this.__defineSetter__&&(this._latitude=this.latitude,this._longitude=this.longitude,this.__defineGetter__("latitude",function(){return i._latitude}),this.__defineGetter__("longitude",function(){return i._longitude}),this.__defineSetter__("latitude",function(e){t.GeoPoint._validate(e,i.longitude),i._latitude=e}),this.__defineSetter__("longitude",function(e){t.GeoPoint._validate(i.latitude,e),i._longitude=e}))},t.GeoPoint._validate=function(t,e){if(t<-90)throw new Error("AV.GeoPoint latitude "+t+" < -90.0.");if(t>90)throw new Error("AV.GeoPoint latitude "+t+" > 90.0.");if(e<-180)throw new Error("AV.GeoPoint longitude "+e+" < -180.0.");if(e>180)throw new Error("AV.GeoPoint longitude "+e+" > 180.0.")},t.GeoPoint.current=function(){return new t.Promise(function(e,n){navigator.geolocation.getCurrentPosition(function(n){e(new t.GeoPoint({latitude:n.coords.latitude,longitude:n.coords.longitude}))},n)})},r.extend(t.GeoPoint.prototype,{toJSON:function(){return t.GeoPoint._validate(this.latitude,this.longitude),{__type:"GeoPoint",latitude:this.latitude,longitude:this.longitude}},radiansTo:function(t){var e=Math.PI/180,n=this.latitude*e,r=this.longitude*e,i=t.latitude*e,s=t.longitude*e,o=n-i,a=r-s,u=Math.sin(o/2),c=Math.sin(a/2),l=u*u+Math.cos(n)*Math.cos(i)*c*c;return l=Math.min(1,l),2*Math.asin(Math.sqrt(l))},kilometersTo:function(t){return 6371*this.radiansTo(t)},milesTo:function(t){return 3958.8*this.radiansTo(t)}})}},function(t,e,n){"use strict";function r(t,e){if("us"===e)return h("https://us-api.leancloud.cn");var n=void 0;switch(t.slice(-9)){case"-9Nh9j0Va":return h("https://e1-api.leancloud.cn");case"-MdYXbMMI":return h("https://us-api.leancloud.cn");default:return n=t.slice(0,8).toLowerCase(),{push:"https://"+n+".push.lncld.net",stats:"https://"+n+".stats.lncld.net",engine:"https://"+n+".engine.lncld.net",api:"https://"+n+".api.lncld.net"}}}var i=n(5),s=n(34),o=n(3),a=o.isNullOrUndefined,u=n(0),c=u.extend,l=u.isObject,h=function(t){return{push:t,stats:t,engine:t,api:t}},f=!1;i.init=function(t){if(!l(t))return i.init({appId:t,appKey:arguments.length<=1?void 0:arguments[1],masterKey:arguments.length<=2?void 0:arguments[2],region:arguments.length<=3?void 0:arguments[3]});var e=t.appId,n=t.appKey,o=t.masterKey,a=(t.hookKey,t.region),u=void 0===a?"cn":a,d=t.serverURLs,p=t.disableCurrentUser,_=t.production,v=t.realtime;if(i.applicationId)throw new Error("SDK is already initialized.");if(!e)throw new TypeError("appId must be a string");if(!n)throw new TypeError("appKey must be a string");o&&console.warn("MasterKey is not supposed to be used in browser."),i._config.applicationId=e,i._config.applicationKey=n,i._config.masterKey=o,void 0!==_&&(i._config.production=_),void 0!==p&&(i._config.disableCurrentUser=p),i._appRouter=new s(i);var y=f||void 0!==d||"cn"!==u;i._setServerURLs(c({},r(e,u),i._config.serverURLs,"string"==typeof d?h(d):d),y),v?i._config.realtime=v:i._sharedConfig.liveQueryRealtime&&(i._config.realtime=new i._sharedConfig.liveQueryRealtime({appId:e,appKey:n,region:u}))},i.setProduction=function(t){a(t)?i._config.production=null:i._config.production=t?1:0},i._setServerURLs=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];"string"!=typeof t?c(i._config.serverURLs,t):i._config.serverURLs=h(t),e&&(i._appRouter?i._appRouter.disable():f=!0)},i.setServerURLs=function(t){return i._setServerURLs(t)},i.keepErrorRawMessage=function(t){i._sharedConfig.keepErrorRawMessage=t},i.setRequestTimeout=function(t){i._config.requestTimeout=t},i.initialize=i.init,["applicationId","applicationKey","masterKey","hookKey"].forEach(function(t){return Object.defineProperty(i,t,{get:function(){return i._config[t]},set:function(e){i._config[t]=e}})})},function(t,e,n){"use strict";var r=n(0),i=n(4),s=n(2),o=s.request;t.exports=function(t){t.Insight=t.Insight||{},r.extend(t.Insight,{startJob:function(e,n){if(!e||!e.sql)throw new Error("Please provide the sql to run the job.");var r={jobConfig:e,appId:t.applicationId};return o({path:"/bigquery/jobs",method:"POST",data:t._encode(r,null,!0),authOptions:n,signKey:!1}).then(function(e){return t._decode(e).id})},on:function(t,e){}}),t.Insight.JobQuery=function(t,e){if(!t)throw new Error("Please provide the job id.");this.id=t,this.className=e,this._skip=0,this._limit=100},r.extend(t.Insight.JobQuery.prototype,{skip:function(t){return this._skip=t,this},limit:function(t){return this._limit=t,this},find:function(e){var n={skip:this._skip,limit:this._limit};return o({path:"/bigquery/jobs/"+this.id,method:"GET",query:n,authOptions:e,signKey:!1}).then(function(e){return e.error?t.Promise.reject(new i(e.code,e.error)):t.Promise.resolve(e)})}})}},function(t,e,n){"use strict";var r=n(0),i=n(47),s=n(1),o=n(3),a=o.inherits,u=n(2),c=u.request;t.exports=function(t){t.LiveQuery=a(i,{constructor:function(t,e){i.apply(this),this.id=t,this._client=e,this._client.register(this),e.on("message",this._dispatch.bind(this))},_dispatch:function(e){var n=this;e.forEach(function(e){var i=e.op,s=e.object,o=e.query_id,a=e.updatedKeys;if(o===n.id){var u=t.parseJSON(r.extend({__type:"_File"===s.className?"File":"Object"},s));a?n.emit(i,u,a):n.emit(i,u)}})},unsubscribe:function(){return this._client.deregister(this),c({method:"POST",path:"/LiveQuery/unsubscribe",data:{id:this._client.id,query_id:this.id}})}},{init:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.subscriptionId,i=void 0===r?t._getSubscriptionId():r;if(!t._config.realtime)throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query");if(!(e instanceof t.Query))throw new TypeError("LiveQuery must be inited with a Query");var o=e.toJSON(),a=o.where,u=o.keys,l=o.returnACL;return s.resolve(i).then(function(n){return c({method:"POST",path:"/LiveQuery/subscribe",data:{query:{where:a,keys:u,returnACL:l,className:e.className},id:n}}).then(function(e){var r=e.query_id;return t._config.realtime.createLiveQueryClient(n).then(function(e){return new t.LiveQuery(r,e)})})})}})}},function(t,e,n){"use strict";function r(t,e){return t&&t[e]?s.isFunction(t[e])?t[e]():t[e]:null}var i=function(){function t(t,e){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,s=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw s}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=n(0),o=n(4),a=n(2),u=a._request,c=n(3),l=c.isNullOrUndefined,h=c.ensureArray,f=c.transformFetchOptions,d=c.setValue,p=c.findValue,_=["objectId","createdAt","updatedAt"],v=function(t){if(-1!==_.indexOf(t))throw new Error("key["+t+"] is reserved")},y=function(t){var e=s.find(t,function(t){return t instanceof Error});if(!e)return t;var n=new o(e.code,e.message);throw n.results=t,n};t.exports=function(t){t.Object=function(e,n){if(s.isString(e))return t.Object._create.apply(this,arguments);e=e||{},n&&n.parse&&(e=this.parse(e),e=this._mergeMagicFields(e));var i=r(this,"defaults");i&&(e=s.extend({},i,e)),n&&n.collection&&(this.collection=n.collection),this._serverData={},this._opSetQueue=[{}],this._flags={},this.attributes={},this._hashedJSON={},this._escapedAttributes={},this.cid=s.uniqueId("c"),this.changed={},this._silent={},this._pending={},this.set(e,{silent:!0}),this.changed={},this._silent={},this._pending={},this._hasData=!0,this._previousAttributes=s.clone(this.attributes),this.initialize.apply(this,arguments)},t.Object.saveAll=function(e,n){return t.Object._deepSaveAsync(e,null,n)},t.Object.fetchAll=function(e,n){return t.Promise.resolve().then(function(){return u("batch",null,null,"POST",{requests:s.map(e,function(t){if(!t.className)throw new Error("object must have className to fetch");if(!t.id)throw new Error("object must have id to fetch");if(t.dirty())throw new Error("object is modified but not saved");return{method:"GET",path:"/1.1/classes/"+t.className+"/"+t.id}})},n)}).then(function(t){var n=s.map(e,function(e,n){return t[n].success?(e._finishFetch(e.parse(t[n].success)),e):null===t[n].success?new o(o.OBJECT_NOT_FOUND,"Object not found."):new o(t[n].error.code,t[n].error.error)});return y(n)})},s.extend(t.Object.prototype,t.Events,{_fetchWhenSave:!1,initialize:function(){},fetchWhenSave:function(t){if(console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."),!s.isBoolean(t))throw new Error("Expect boolean value for fetchWhenSave");this._fetchWhenSave=t},getObjectId:function(){return this.id},getCreatedAt:function(){return this.createdAt||this.get("createdAt")},getUpdatedAt:function(){return this.updatedAt||this.get("updatedAt")},toJSON:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return this._toFullJSON(n,!1)},toFullJSON:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this._toFullJSON(t)},_toFullJSON:function(e){var n=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=s.clone(this.attributes);if(s.isArray(e))var o=e.concat(this);return t._objectEach(i,function(e,n){i[n]=t._encode(e,o,void 0,r)}),t._objectEach(this._operations,function(t,e){i[e]=t}),s.has(this,"id")&&(i.objectId=this.id),s(["createdAt","updatedAt"]).each(function(t){if(s.has(n,t)){var e=n[t];i[t]=s.isDate(e)?e.toJSON():e}}),r&&(i.__type="Object",s.isArray(e)&&e.length&&(i.__type="Pointer"),i.className=this.className),i},_refreshCache:function(){var e=this;e._refreshingCache||(e._refreshingCache=!0,t._objectEach(this.attributes,function(n,r){n instanceof t.Object?n._refreshCache():s.isObject(n)&&e._resetCacheForKey(r)&&e.set(r,new t.Op.Set(n),{silent:!0})}),delete e._refreshingCache)},dirty:function(t){return this._refreshCache(),this._dirty()},_dirty:function(t){var e=s.last(this._opSetQueue);return t?!!e[t]:!this.id||s.keys(e).length>0},_toPointer:function(){return{__type:"Pointer",className:this.className,objectId:this.id}},get:function(t){switch(t){case"objectId":return this.id;case"createdAt":case"updatedAt":return this[t];default:return this.attributes[t]}},relation:function(e){var n=this.get(e);if(n){if(!(n instanceof t.Relation))throw new Error("Called relation() on non-relation field "+e);return n._ensureParentAndKey(this,e),n}return new t.Relation(this,e)},escape:function(t){var e=this._escapedAttributes[t];if(e)return e;var n,r=this.attributes[t];return n=l(r)?"":s.escape(r.toString()),this._escapedAttributes[t]=n,n},has:function(t){return!l(this.attributes[t])},_mergeMagicFields:function(e){var n=this,r=["objectId","createdAt","updatedAt"];return t._arrayEach(r,function(r){e[r]&&("objectId"===r?n.id=e[r]:"createdAt"!==r&&"updatedAt"!==r||s.isDate(e[r])?n[r]=e[r]:n[r]=t._parseDate(e[r]),delete e[r])}),e},_startSave:function(){this._opSetQueue.push({})},_cancelSave:function(){var e=s.first(this._opSetQueue);this._opSetQueue=s.rest(this._opSetQueue);var n=s.first(this._opSetQueue);t._objectEach(e,function(t,r){var i=e[r],s=n[r];i&&s?n[r]=s._mergeWithPrevious(i):i&&(n[r]=i)}),this._saving=this._saving-1},_finishSave:function(e){var n={};t._traverse(this.attributes,function(e){e instanceof t.Object&&e.id&&e._hasData&&(n[e.id]=e)});var r=s.first(this._opSetQueue);this._opSetQueue=s.rest(this._opSetQueue),this._applyOpSet(r,this._serverData),this._mergeMagicFields(e);var i=this;t._objectEach(e,function(e,r){i._serverData[r]=t._decode(e,r);var s=t._traverse(i._serverData[r],function(e){if(e instanceof t.Object&&n[e.id])return n[e.id]});s&&(i._serverData[r]=s)}),this._rebuildAllEstimatedData(),this._saving=this._saving-1},_finishFetch:function(e,n){this._opSetQueue=[{}],this._mergeMagicFields(e);var r=this;t._objectEach(e,function(e,n){r._serverData[n]=t._decode(e,n)}),this._rebuildAllEstimatedData(),this._refreshCache(),this._opSetQueue=[{}],this._hasData=n},_applyOpSet:function(e,n){var r=this;t._objectEach(e,function(e,s){var o=p(n,s),a=i(o,3),u=a[0],c=a[1],l=a[2];d(n,s,e._estimate(u,r,s)),c&&c[l]===t.Op._UNSET&&delete c[l]})},_resetCacheForKey:function(e){var n=this.attributes[e];if(s.isObject(n)&&!(n instanceof t.Object)&&!(n instanceof t.File)){n=n.toJSON?n.toJSON():n;var r=JSON.stringify(n);if(this._hashedJSON[e]!==r){var i=!!this._hashedJSON[e];return this._hashedJSON[e]=r,i}}return!1},_rebuildEstimatedDataForKey:function(e){var n=this;delete this.attributes[e],this._serverData[e]&&(this.attributes[e]=this._serverData[e]),t._arrayEach(this._opSetQueue,function(r){var s=r[e];if(s){var o=p(n.attributes,e),a=i(o,3),u=a[0],c=a[1],l=a[2];d(n.attributes,e,s._estimate(u,n,e)),c&&c[l]===t.Op._UNSET?delete c[l]:n._resetCacheForKey(e)}})},_rebuildAllEstimatedData:function(){var e=this,n=s.clone(this.attributes);this.attributes=s.clone(this._serverData),t._arrayEach(this._opSetQueue,function(n){e._applyOpSet(n,e.attributes),t._objectEach(n,function(t,n){e._resetCacheForKey(n)})}),t._objectEach(n,function(t,n){e.attributes[n]!==t&&e.trigger("change:"+n,e,e.attributes[n],{})}),t._objectEach(this.attributes,function(t,r){s.has(n,r)||e.trigger("change:"+r,e,t,{})})},set:function(e,n,r){var i;if(s.isObject(e)||l(e)?(i=s.mapObject(e,function(e,n){return v(n),t._decode(e,n)}),r=n):(i={},v(e),i[e]=t._decode(n,e)),r=r||{},!i)return this;i instanceof t.Object&&(i=i.attributes),r.unset&&t._objectEach(i,function(e,n){i[n]=new t.Op.Unset});var o=s.clone(i),a=this;t._objectEach(o,function(e,n){e instanceof t.Op&&(o[n]=e._estimate(a.attributes[n],a,n),o[n]===t.Op._UNSET&&delete o[n])}),this._validate(i,r),r.changes={};var u=this._escapedAttributes;this._previousAttributes;return t._arrayEach(s.keys(i),function(e){var n=i[e];n instanceof t.Relation&&(n.parent=a),n instanceof t.Op||(n=new t.Op.Set(n));var o=!0;n instanceof t.Op.Set&&s.isEqual(a.attributes[e],n.value)&&(o=!1),o&&(delete u[e],r.silent?a._silent[e]=!0:r.changes[e]=!0);var c=s.last(a._opSetQueue);c[e]=n._mergeWithPrevious(c[e]),a._rebuildEstimatedDataForKey(e),o?(a.changed[e]=a.attributes[e],r.silent||(a._pending[e]=!0)):(delete a.changed[e],delete a._pending[e])}),r.silent||this.change(r),this},unset:function(t,e){return e=e||{},e.unset=!0,this.set(t,null,e)},increment:function(e,n){return(s.isUndefined(n)||s.isNull(n))&&(n=1),this.set(e,new t.Op.Increment(n))},add:function(e,n){return this.set(e,new t.Op.Add(h(n)))},addUnique:function(e,n){return this.set(e,new t.Op.AddUnique(h(n)))},remove:function(e,n){return this.set(e,new t.Op.Remove(h(n)))},bitAnd:function(e,n){return this.set(e,new t.Op.BitAnd(n))},bitOr:function(e,n){return this.set(e,new t.Op.BitOr(n))},bitXor:function(e,n){return this.set(e,new t.Op.BitXor(n))},op:function(t){return s.last(this._opSetQueue)[t]},clear:function(t){t=t||{},t.unset=!0;var e=s.extend(this.attributes,this._operations);return this.set(e,t)},_getSaveJSON:function(){var e=s.clone(s.first(this._opSetQueue));return t._objectEach(e,function(t,n){e[n]=t.toJSON()}),e},_canBeSerialized:function(){return t.Object._canBeSerializedAsValue(this.attributes)},fetch:function(t,e){var n=this;return u("classes",this.className,this.id,"GET",f(t),e).then(function(t){return n._finishFetch(n.parse(t),!0),n})},save:function(e,n,r){var i,o,a;s.isObject(e)||l(e)?(i=e,a=n):(i={},i[e]=n,a=r),a=s.clone(a)||{},a.wait&&(o=s.clone(this.attributes));var c=s.clone(a)||{};c.wait&&(c.silent=!0),i&&this.set(i,c);var h=this,f=[],d=[];return t.Object._findUnsavedChildren(h,f,d),f.length+d.length>1?t.Object._deepSaveAsync(this,h,a):(this._startSave(),this._saving=(this._saving||0)+1,this._allPreviousSaves=this._allPreviousSaves||t.Promise.resolve(),this._allPreviousSaves=this._allPreviousSaves.catch(function(t){}).then(function(){var t=h.id?"PUT":"POST",e=h._getSaveJSON(),n={};if((h._fetchWhenSave||a.fetchWhenSave)&&(n.new="true"),a.query){var r;if("function"==typeof a.query.toJSON&&(r=a.query.toJSON())&&(n.where=r.where),!n.where){throw new Error("options.query is not an AV.Query")}}s.extend(e,h._flags);var l="classes",f=h.className;"_User"!==h.className||h.id||(l="users",f=null);var d=a._makeRequest||u,p=d(l,f,h.id,t,e,a,n);return p=p.then(function(t){var e=h.parse(t);return a.wait&&(e=s.extend(i||{},e)),h._finishSave(e),a.wait&&h.set(o,c),h},function(t){throw h._cancelSave(),t})}),this._allPreviousSaves)},destroy:function(t){t=t||{};var e=this,n=function(){e.trigger("destroy",e,e.collection,t)};return this.id?(t.wait||n(),u("classes",this.className,this.id,"DELETE",this._flags,t).then(function(){return t.wait&&n(),e})):n()},parse:function(e){var n=s.clone(e);return s(["createdAt","updatedAt"]).each(function(e){n[e]&&(n[e]=t._parseDate(n[e]))}),n.createdAt&&!n.updatedAt&&(n.updatedAt=n.createdAt),n},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.id},change:function(e){e=e||{};var n=this._changing;this._changing=!0;var r=this;t._objectEach(this._silent,function(t){r._pending[t]=!0});var i=s.extend({},e.changes,this._silent);if(this._silent={},t._objectEach(i,function(t,n){r.trigger("change:"+n,r,r.get(n),e)}),n)return this;for(var o=function(t,e){r._pending[e]||r._silent[e]||delete r.changed[e]};!s.isEmpty(this._pending);)this._pending={},this.trigger("change",this,e),t._objectEach(this.changed,o),r._previousAttributes=s.clone(this.attributes);return this._changing=!1,this},hasChanged:function(t){return arguments.length?this.changed&&s.has(this.changed,t):!s.isEmpty(this.changed)},changedAttributes:function(e){if(!e)return!!this.hasChanged()&&s.clone(this.changed);var n={},r=this._previousAttributes;return t._objectEach(e,function(t,e){s.isEqual(r[e],t)||(n[e]=t)}),n},previous:function(t){return arguments.length&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return s.clone(this._previousAttributes)},isValid:function(){try{this.validate(this.attributes)}catch(t){return!1}return!0},validate:function(e){if(s.has(e,"ACL")&&!(e.ACL instanceof t.ACL))throw new o(o.OTHER_CAUSE,"ACL must be a AV.ACL.")},_validate:function(t,e){!e.silent&&this.validate&&(t=s.extend({},this.attributes,t),this.validate(t))},getACL:function(){return this.get("ACL")},setACL:function(t,e){return this.set("ACL",t,e)},disableBeforeHook:function(){this.ignoreHook("beforeSave"),this.ignoreHook("beforeUpdate"),this.ignoreHook("beforeDelete")},disableAfterHook:function(){this.ignoreHook("afterSave"),this.ignoreHook("afterUpdate"),this.ignoreHook("afterDelete")},ignoreHook:function(e){s.contains(["beforeSave","afterSave","beforeUpdate","afterUpdate","beforeDelete","afterDelete"],e)||console.trace("Unsupported hookName: "+e),t.hookKey||console.trace("ignoreHook required hookKey"),this._flags.__ignore_hooks||(this._flags.__ignore_hooks=[]),this._flags.__ignore_hooks.push(e)}}),t.Object.createWithoutData=function(e,n,r){var i=new t.Object(e);return i.id=n,i._hasData=r,i},t.Object.destroyAll=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||0===e.length)return t.Promise.resolve();var r=s.groupBy(e,function(t){return JSON.stringify({className:t.className,flags:t._flags})}),i={requests:s.map(r,function(t){var e=s.map(t,"id").join(",");return{method:"DELETE",path:"/1.1/classes/"+t[0].className+"/"+e,body:t[0]._flags}})};return u("batch",null,null,"POST",i,n).then(function(t){var e=s.find(t,function(t){return!t.success});if(e)throw new o(e.error.code,e.error.error)})},t.Object._getSubclass=function(e){if(!s.isString(e))throw new Error("AV.Object._getSubclass requires a string argument.");var n=t.Object._classMap[e];return n||(n=t.Object.extend(e),t.Object._classMap[e]=n),n},t.Object._create=function(e,n,r){return new(t.Object._getSubclass(e))(n,r)},t.Object._classMap={},t.Object._extend=t._extend,t.Object.new=function(e,n){return new t.Object(e,n)},t.Object.extend=function(e,n,r){if(!s.isString(e)){if(e&&s.has(e,"className"))return t.Object.extend(e.className,e,n);throw new Error("AV.Object.extend's first argument should be the className.")}"User"===e&&(e="_User");var i=null;if(s.has(t.Object._classMap,e)){var o=t.Object._classMap[e];if(!n&&!r)return o;i=o._extend(n,r)}else n=n||{},n._className=e,i=this._extend(n,r);return i.extend=function(n){if(s.isString(n)||n&&s.has(n,"className"))return t.Object.extend.apply(i,arguments);var r=[e].concat(s.toArray(arguments));return t.Object.extend.apply(i,r)},Object.defineProperty(i,"query",Object.getOwnPropertyDescriptor(t.Object,"query")),i.new=function(t,e){return new i(t,e)},t.Object._classMap[e]=i,i},Object.defineProperty(t.Object.prototype,"className",{get:function(){var t=this._className||this.constructor._LCClassName||this.constructor.name;return"User"===t?"_User":t}}),t.Object.register=function(e,n){if(!(e.prototype instanceof t.Object))throw new Error("registered class is not a subclass of AV.Object");var r=n||e.name;if(!r.length)throw new Error("registered class must be named");n&&(e._LCClassName=n),t.Object._classMap[r]=e},Object.defineProperty(t.Object,"query",{get:function(){return new t.Query(this.prototype.className)}}),t.Object._findUnsavedChildren=function(e,n,r){t._traverse(e,function(e){return e instanceof t.Object?void(e._dirty()&&n.push(e)):e instanceof t.File?void(e.url()||e.id||r.push(e)):void 0})},t.Object._canBeSerializedAsValue=function(e){var n=!0;return e instanceof t.Object||e instanceof t.File?n=!!e.id:s.isArray(e)?t._arrayEach(e,function(e){t.Object._canBeSerializedAsValue(e)||(n=!1)}):s.isObject(e)&&t._objectEach(e,function(e){t.Object._canBeSerializedAsValue(e)||(n=!1)}),n},t.Object._deepSaveAsync=function(e,n,r){var i=[],a=[];t.Object._findUnsavedChildren(e,i,a);var c=t.Promise.resolve();s.each(a,function(t){c=c.then(function(){return t.save()})});var l=s.uniq(i),h=s.uniq(l);return c.then(function(){return t.Promise._continueWhile(function(){return h.length>0},function(){var e=[],n=[];if(t._arrayEach(h,function(t){if(e.length>20)return void n.push(t);t._canBeSerialized()?e.push(t):n.push(t)}),h=n,0===e.length)return t.Promise.reject(new o(o.OTHER_CAUSE,"Tried to save a batch with a cycle."));var i=t.Promise.resolve(s.map(e,function(e){return e._allPreviousSaves||t.Promise.resolve()})),a=i.then(function(){return u("batch",null,null,"POST",{requests:s.map(e,function(t){var e=t.id?"PUT":"POST",n=t._getSaveJSON();s.extend(n,t._flags);var r=t.className,i="/classes/"+r;"_User"!==t.className||t.id||(i="/users");var i="/1.1"+i;return t.id&&(i=i+"/"+t.id),t._startSave(),{method:e,path:i,body:n}})},r).then(function(t){var n=s.map(e,function(e,n){return t[n].success?(e._finishSave(e.parse(t[n].success)),e):(e._cancelSave(),new o(t[n].error.code,t[n].error.error))});return y(n)})});return t._arrayEach(e,function(t){t._allPreviousSaves=a}),a})}).then(function(){return e})}}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){t.Op=function(){this._initialize.apply(this,arguments)},r.extend(t.Op.prototype,{_initialize:function(){}}),r.extend(t.Op,{_extend:t._extend,_opDecoderMap:{},_registerDecoder:function(e,n){t.Op._opDecoderMap[e]=n},_decode:function(e){var n=t.Op._opDecoderMap[e.__op];return n?n(e):void 0}}),t.Op._registerDecoder("Batch",function(e){var n=null;return t._arrayEach(e.ops,function(e){e=t.Op._decode(e),n=e._mergeWithPrevious(n)}),n}),t.Op.Set=t.Op._extend({_initialize:function(t){this._value=t},value:function(){return this._value},toJSON:function(){return t._encode(this.value())},_mergeWithPrevious:function(t){return this},_estimate:function(t){return this.value()}}),t.Op._UNSET={},t.Op.Unset=t.Op._extend({toJSON:function(){return{__op:"Delete"}},_mergeWithPrevious:function(t){return this},_estimate:function(e){return t.Op._UNSET}}),t.Op._registerDecoder("Delete",function(e){return new t.Op.Unset}),t.Op.Increment=t.Op._extend({_initialize:function(t){this._amount=t},amount:function(){return this._amount},toJSON:function(){return{__op:"Increment",amount:this._amount}},_mergeWithPrevious:function(e){if(e){if(e instanceof t.Op.Unset)return new t.Op.Set(this.amount());if(e instanceof t.Op.Set)return new t.Op.Set(e.value()+this.amount());if(e instanceof t.Op.Increment)return new t.Op.Increment(this.amount()+e.amount());throw new Error("Op is invalid after previous op.")}return this},_estimate:function(t){return t?t+this.amount():this.amount()}}),t.Op._registerDecoder("Increment",function(e){return new t.Op.Increment(e.amount)}),t.Op.BitAnd=t.Op._extend({_initialize:function(t){this._value=t},value:function(){return this._value},toJSON:function(){return{__op:"BitAnd",value:this.value()}},_mergeWithPrevious:function(e){if(e){if(e instanceof t.Op.Unset)return new t.Op.Set(0);if(e instanceof t.Op.Set)return new t.Op.Set(e.value()&this.value());throw new Error("Op is invalid after previous op.")}return this},_estimate:function(t){return t&this.value()}}),t.Op._registerDecoder("BitAnd",function(e){return new t.Op.BitAnd(e.value)}),t.Op.BitOr=t.Op._extend({_initialize:function(t){this._value=t},value:function(){return this._value},toJSON:function(){return{__op:"BitOr",value:this.value()}},_mergeWithPrevious:function(e){if(e){if(e instanceof t.Op.Unset)return new t.Op.Set(this.value());if(e instanceof t.Op.Set)return new t.Op.Set(e.value()|this.value());throw new Error("Op is invalid after previous op.")}return this},_estimate:function(t){return t|this.value()}}),t.Op._registerDecoder("BitOr",function(e){return new t.Op.BitOr(e.value)}),t.Op.BitXor=t.Op._extend({_initialize:function(t){this._value=t},value:function(){return this._value},toJSON:function(){return{__op:"BitXor",value:this.value()}},_mergeWithPrevious:function(e){if(e){if(e instanceof t.Op.Unset)return new t.Op.Set(this.value());if(e instanceof t.Op.Set)return new t.Op.Set(e.value()^this.value());throw new Error("Op is invalid after previous op.")}return this},_estimate:function(t){return t^this.value()}}),t.Op._registerDecoder("BitXor",function(e){return new t.Op.BitXor(e.value)}),t.Op.Add=t.Op._extend({_initialize:function(t){this._objects=t},objects:function(){return this._objects},toJSON:function(){return{__op:"Add",objects:t._encode(this.objects())}},_mergeWithPrevious:function(e){if(e){if(e instanceof t.Op.Unset)return new t.Op.Set(this.objects());if(e instanceof t.Op.Set)return new t.Op.Set(this._estimate(e.value()));if(e instanceof t.Op.Add)return new t.Op.Add(e.objects().concat(this.objects()));throw new Error("Op is invalid after previous op.")}return this},_estimate:function(t){return t?t.concat(this.objects()):r.clone(this.objects())}}),t.Op._registerDecoder("Add",function(e){return new t.Op.Add(t._decode(e.objects))}),t.Op.AddUnique=t.Op._extend({_initialize:function(t){this._objects=r.uniq(t)},objects:function(){return this._objects},toJSON:function(){return{__op:"AddUnique",objects:t._encode(this.objects())}},_mergeWithPrevious:function(e){if(e){if(e instanceof t.Op.Unset)return new t.Op.Set(this.objects());if(e instanceof t.Op.Set)return new t.Op.Set(this._estimate(e.value()));if(e instanceof t.Op.AddUnique)return new t.Op.AddUnique(this._estimate(e.objects()));throw new Error("Op is invalid after previous op.")}return this},_estimate:function(e){if(e){var n=r.clone(e);return t._arrayEach(this.objects(),function(e){if(e instanceof t.Object&&e.id){var i=r.find(n,function(n){return n instanceof t.Object&&n.id===e.id});if(i){var s=r.indexOf(n,i);n[s]=e}else n.push(e)}else r.contains(n,e)||n.push(e)}),n}return r.clone(this.objects())}}),t.Op._registerDecoder("AddUnique",function(e){return new t.Op.AddUnique(t._decode(e.objects))}),t.Op.Remove=t.Op._extend({_initialize:function(t){this._objects=r.uniq(t)},objects:function(){return this._objects},toJSON:function(){return{__op:"Remove",objects:t._encode(this.objects())}},_mergeWithPrevious:function(e){if(e){if(e instanceof t.Op.Unset)return e;if(e instanceof t.Op.Set)return new t.Op.Set(this._estimate(e.value()));if(e instanceof t.Op.Remove)return new t.Op.Remove(r.union(e.objects(),this.objects()));throw new Error("Op is invalid after previous op.")}return this},_estimate:function(e){if(e){var n=r.difference(e,this.objects());return t._arrayEach(this.objects(),function(e){e instanceof t.Object&&e.id&&(n=r.reject(n,function(n){return n instanceof t.Object&&n.id===e.id}))}),n}return[]}}),t.Op._registerDecoder("Remove",function(e){return new t.Op.Remove(t._decode(e.objects))}),t.Op.Relation=t.Op._extend({_initialize:function(e,n){this._targetClassName=null;var i=this,s=function(e){if(e instanceof t.Object){if(!e.id)throw new Error("You can't add an unsaved AV.Object to a relation.");if(i._targetClassName||(i._targetClassName=e.className),i._targetClassName!==e.className)throw new Error("Tried to create a AV.Relation with 2 different types: "+i._targetClassName+" and "+e.className+".");return e.id}return e};this.relationsToAdd=r.uniq(r.map(e,s)),this.relationsToRemove=r.uniq(r.map(n,s))},added:function(){var e=this;return r.map(this.relationsToAdd,function(n){var r=t.Object._create(e._targetClassName);return r.id=n,r})},removed:function(){var e=this;return r.map(this.relationsToRemove,function(n){var r=t.Object._create(e._targetClassName);return r.id=n,r})},toJSON:function(){var t=null,e=null,n=this,i=function(t){return{__type:"Pointer",className:n._targetClassName,objectId:t}},s=null;return this.relationsToAdd.length>0&&(s=r.map(this.relationsToAdd,i),t={__op:"AddRelation",objects:s}),this.relationsToRemove.length>0&&(s=r.map(this.relationsToRemove,i),e={__op:"RemoveRelation",objects:s}),t&&e?{__op:"Batch",ops:[t,e]}:t||e||{}},_mergeWithPrevious:function(e){if(e){if(e instanceof t.Op.Unset)throw new Error("You can't modify a relation after deleting it.");if(e instanceof t.Op.Relation){if(e._targetClassName&&e._targetClassName!==this._targetClassName)throw new Error("Related object must be of class "+e._targetClassName+", but "+this._targetClassName+" was passed in.");var n=r.union(r.difference(e.relationsToAdd,this.relationsToRemove),this.relationsToAdd),i=r.union(r.difference(e.relationsToRemove,this.relationsToAdd),this.relationsToRemove),s=new t.Op.Relation(n,i);return s._targetClassName=this._targetClassName,s}throw new Error("Op is invalid after previous op.")}return this},_estimate:function(e,n,r){if(e){if(e instanceof t.Relation){if(this._targetClassName)if(e.targetClassName){if(e.targetClassName!==this._targetClassName)throw new Error("Related object must be a "+e.targetClassName+", but a "+this._targetClassName+" was passed in.")}else e.targetClassName=this._targetClassName;return e}throw new Error("Op is invalid after previous op.")}new t.Relation(n,r).targetClassName=this._targetClassName}}),t.Op._registerDecoder("AddRelation",function(e){return new t.Op.Relation(t._decode(e.objects),[])}),t.Op._registerDecoder("RemoveRelation",function(e){return new t.Op.Relation([],t._decode(e.objects))})}},function(t,e,n){"use strict"},function(t,e,n){"use strict";var r=n(2).request;t.exports=function(t){t.Installation=t.Object.extend("_Installation"),t.Push=t.Push||{},t.Push.send=function(t,e){if(t.where&&(t.where=t.where.toJSON().where),t.where&&t.cql)throw new Error("Both where and cql can't be set");if(t.push_time&&(t.push_time=t.push_time.toJSON()),t.expiration_time&&(t.expiration_time=t.expiration_time.toJSON()),t.expiration_time&&t.expiration_time_interval)throw new Error("Both expiration_time and expiration_time_interval can't be set");return r({service:"push",method:"POST",path:"/push",data:t,authOptions:e})}}},function(t,e,n){"use strict";var r=n(0),i=n(6)("leancloud:query"),s=n(1),o=n(4),a=n(2),u=a._request,c=a.request,l=n(3),h=l.ensureArray,f=l.transformFetchOptions,d=function(t,e){if(void 0===t)throw new Error(e)};t.exports=function(t){t.Query=function(e){r.isString(e)&&(e=t.Object._getSubclass(e)),this.objectClass=e,this.className=e.prototype.className,this._where={},this._include=[],this._select=[],this._limit=-1,this._skip=0,this._extraOptions={}},t.Query.or=function(){var e=r.toArray(arguments),n=null;t._arrayEach(e,function(t){if(r.isNull(n)&&(n=t.className),n!==t.className)throw new Error("All queries must be for the same class")});var i=new t.Query(n);return i._orQuery(e),i},t.Query.and=function(){var e=r.toArray(arguments),n=null;t._arrayEach(e,function(t){if(r.isNull(n)&&(n=t.className),n!==t.className)throw new Error("All queries must be for the same class")});var i=new t.Query(n);return i._andQuery(e),i},t.Query.doCloudQuery=function(e,n,i){var s={cql:e};return r.isArray(n)?s.pvalues=n:i=n,u("cloudQuery",null,null,"GET",s,i).then(function(e){var n=new t.Query(e.className);return{results:r.map(e.results,function(t){var r=n._newObject(e);return r._finishFetch&&r._finishFetch(n._processResult(t),!0),r}),count:e.count,className:e.className}})},t.Query._extend=t._extend,r.extend(t.Query.prototype,{_processResult:function(t){return t},get:function(t,e){if(!t){throw new o(o.OBJECT_NOT_FOUND,"Object not found.")}var n=this._newObject();n.id=t;var i=this.toJSON(),s={};return i.keys&&(s.keys=i.keys),i.include&&(s.include=i.include),i.includeACL&&(s.includeACL=i.includeACL),u("classes",this.className,t,"GET",f(s),e).then(function(t){if(r.isEmpty(t))throw new o(o.OBJECT_NOT_FOUND,"Object not found.");return n._finishFetch(n.parse(t),!0),n})},toJSON:function(){var e={where:this._where};return this._include.length>0&&(e.include=this._include.join(",")),this._select.length>0&&(e.keys=this._select.join(",")),void 0!==this._includeACL&&(e.returnACL=this._includeACL),this._limit>=0&&(e.limit=this._limit),this._skip>0&&(e.skip=this._skip),void 0!==this._order&&(e.order=this._order),t._objectEach(this._extraOptions,function(t,n){e[n]=t}),e},_newObject:function(e){return e&&e.className?new t.Object(e.className):new this.objectClass},_createRequest:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.toJSON(),e=arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/classes/"+this.className;if(encodeURIComponent(JSON.stringify(t)).length>2e3){return c({path:"/batch",method:"POST",data:{requests:[{method:"GET",path:"/1.1"+n,params:t}]},authOptions:e}).then(function(t){var e=t[0];if(e.success)return e.success;var n=new Error(e.error.error||"Unknown batch error");throw n.code=e.error.code,n})}return c({method:"GET",path:n,query:t,authOptions:e})},_parseResponse:function(t){var e=this;return r.map(t.results,function(n){var r=e._newObject(t);return r._finishFetch&&r._finishFetch(e._processResult(n),!0),r})},find:function(t){return this._createRequest(void 0,t).then(this._parseResponse.bind(this))},scan:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.orderedBy,o=e.batchSize,a=arguments[1],c=this.toJSON();i("scan %O",c),c.order&&(console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."),delete c.order),c.skip&&(console.warn("The skip option of the query is ignored for Query#scan."),delete c.skip),c.limit&&(console.warn("The limit option of the query is ignored for Query#scan."),delete c.limit),n&&(c.scan_key=n),o&&(c.limit=o);var l=s.resolve([]),h=void 0,f=!1;return{next:function(){return l=l.then(function(e){return f?[]:e.length>1?e:h||0===e.length?u("scan/classes",t.className,null,"GET",h?r.extend({},c,{cursor:h}):c,a).then(function(e){return h=e.cursor,t._parseResponse(e)}).then(function(t){return t.length||(f=!0),e.concat(t)}):(f=!0,e)}),l.then(function(t){return t.shift()}).then(function(t){return{value:t,done:f}})}}},destroyAll:function(e){return this.find(e).then(function(n){return t.Object.destroyAll(n,e)})},count:function(t){var e=this.toJSON();return e.limit=0,e.count=1,this._createRequest(e,t).then(function(t){return t.count})},first:function(t){var e=this,n=this.toJSON();return n.limit=1,this._createRequest(n,t).then(function(t){return r.map(t.results,function(t){var n=e._newObject();return n._finishFetch&&n._finishFetch(e._processResult(t),!0),n})[0]})},skip:function(t){return d(t,"undefined is not a valid skip value"),this._skip=t,this},limit:function(t){return d(t,"undefined is not a valid limit value"),this._limit=t,this},equalTo:function(e,n){return d(e,"undefined is not a valid key"),d(n,"undefined is not a valid value"),this._where[e]=t._encode(n),this},_addCondition:function(e,n,r){return d(e,"undefined is not a valid condition key"),d(n,"undefined is not a valid condition"),d(r,"undefined is not a valid condition value"),this._where[e]||(this._where[e]={}),this._where[e][n]=t._encode(r),this},sizeEqualTo:function(t,e){this._addCondition(t,"$size",e)},notEqualTo:function(t,e){return this._addCondition(t,"$ne",e),this},lessThan:function(t,e){return this._addCondition(t,"$lt",e),this},greaterThan:function(t,e){return this._addCondition(t,"$gt",e),this},lessThanOrEqualTo:function(t,e){return this._addCondition(t,"$lte",e),this},greaterThanOrEqualTo:function(t,e){return this._addCondition(t,"$gte",e),this},containedIn:function(t,e){return this._addCondition(t,"$in",e),this},notContainedIn:function(t,e){return this._addCondition(t,"$nin",e),this},containsAll:function(t,e){return this._addCondition(t,"$all",e),this},exists:function(t){return this._addCondition(t,"$exists",!0),this},doesNotExist:function(t){return this._addCondition(t,"$exists",!1),this},matches:function(t,e,n){return this._addCondition(t,"$regex",e),n||(n=""),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),n&&n.length&&this._addCondition(t,"$options",n),this},matchesQuery:function(t,e){var n=e.toJSON();return n.className=e.className,this._addCondition(t,"$inQuery",n),this},doesNotMatchQuery:function(t,e){var n=e.toJSON();return n.className=e.className,this._addCondition(t,"$notInQuery",n),this},matchesKeyInQuery:function(t,e,n){var r=n.toJSON();return r.className=n.className,this._addCondition(t,"$select",{key:e,query:r}),this},doesNotMatchKeyInQuery:function(t,e,n){var r=n.toJSON();return r.className=n.className,this._addCondition(t,"$dontSelect",{key:e,query:r}),this},_orQuery:function(t){var e=r.map(t,function(t){return t.toJSON().where});return this._where.$or=e,this},_andQuery:function(t){var e=r.map(t,function(t){return t.toJSON().where});return this._where.$and=e,this},_quote:function(t){return"\\Q"+t.replace("\\E","\\E\\\\E\\Q")+"\\E"},contains:function(t,e){return this._addCondition(t,"$regex",this._quote(e)),this},startsWith:function(t,e){return this._addCondition(t,"$regex","^"+this._quote(e)),this},endsWith:function(t,e){return this._addCondition(t,"$regex",this._quote(e)+"$"),this},ascending:function(t){return d(t,"undefined is not a valid key"),this._order=t,this},addAscending:function(t){return d(t,"undefined is not a valid key"),this._order?this._order+=","+t:this._order=t,this},descending:function(t){return d(t,"undefined is not a valid key"),this._order="-"+t,this},addDescending:function(t){return d(t,"undefined is not a valid key"),this._order?this._order+=",-"+t:this._order="-"+t,this},near:function(e,n){return n instanceof t.GeoPoint||(n=new t.GeoPoint(n)),this._addCondition(e,"$nearSphere",n),this},withinRadians:function(t,e,n){return this.near(t,e),this._addCondition(t,"$maxDistance",n),this},withinMiles:function(t,e,n){return this.withinRadians(t,e,n/3958.8)},withinKilometers:function(t,e,n){return this.withinRadians(t,e,n/6371)},withinGeoBox:function(e,n,r){return n instanceof t.GeoPoint||(n=new t.GeoPoint(n)),r instanceof t.GeoPoint||(r=new t.GeoPoint(r)),this._addCondition(e,"$within",{$box:[n,r]}),this},include:function(t){var e=this;return d(t,"undefined is not a valid key"),r(arguments).forEach(function(t){e._include=e._include.concat(h(t))}),this},includeACL:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this._includeACL=t,this},select:function(t){var e=this;return d(t,"undefined is not a valid key"),r(arguments).forEach(function(t){e._select=e._select.concat(h(t))}),this},each:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._order||this._skip||this._limit>=0){var i=new Error("Cannot iterate on a query with sort, skip, or limit.");return t.Promise.reject(i)}var s=new t.Query(this.objectClass);s._limit=n.batchSize||100,s._where=r.clone(this._where),s._include=r.clone(this._include),s.ascending("objectId");var o=!1;return t.Promise._continueWhile(function(){return!o},function(){return s.find(n).then(function(n){var i=t.Promise.resolve();return r.each(n,function(t){i=i.then(function(){return e(t)})}),i.then(function(){n.length>=s._limit?s.greaterThan("objectId",n[n.length-1].id):o=!0})})})},subscribe:function(e){return t.LiveQuery.init(this,e)}}),t.FriendShipQuery=t.Query._extend({_objectClass:t.User,_newObject:function(){return new t.User},_processResult:function(t){if(t&&t[this._friendshipTag]){var e=t[this._friendshipTag];return"Pointer"===e.__type&&"_User"===e.className&&(delete e.__type,delete e.className),e}return null}})}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){t.Relation=function(t,e){if(!r.isString(e))throw new TypeError("key must be a string");this.parent=t,this.key=e,this.targetClassName=null},t.Relation.reverseQuery=function(e,n,r){var i=new t.Query(e);return i.equalTo(n,r._toPointer()),i},r.extend(t.Relation.prototype,{_ensureParentAndKey:function(t,e){if(this.parent=this.parent||t,this.key=this.key||e,this.parent!==t)throw new Error("Internal Error. Relation retrieved from two different Objects.");if(this.key!==e)throw new Error("Internal Error. Relation retrieved from two different keys.")},add:function(e){r.isArray(e)||(e=[e]);var n=new t.Op.Relation(e,[]);this.parent.set(this.key,n),this.targetClassName=n._targetClassName},remove:function(e){r.isArray(e)||(e=[e]);var n=new t.Op.Relation([],e);this.parent.set(this.key,n),this.targetClassName=n._targetClassName},toJSON:function(){return{__type:"Relation",className:this.targetClassName}},query:function(){var e,n;return this.targetClassName?(e=t.Object._getSubclass(this.targetClassName),n=new t.Query(e)):(e=t.Object._getSubclass(this.parent.className),n=new t.Query(e),n._extraOptions.redirectClassNameForKey=this.key),n._addCondition("$relatedTo","object",this.parent._toPointer()),n._addCondition("$relatedTo","key",this.key),n}})}},function(t,e,n){"use strict";var r=n(0),i=n(4);t.exports=function(t){t.Role=t.Object.extend("_Role",{constructor:function(e,n){if(r.isString(e)?(t.Object.prototype.constructor.call(this,null,null),this.setName(e)):t.Object.prototype.constructor.call(this,e,n),n){if(!(n instanceof t.ACL))throw new TypeError("acl must be an instance of AV.ACL");this.setACL(n)}},getName:function(){return this.get("name")},setName:function(t,e){return this.set("name",t,e)},getUsers:function(){return this.relation("users")},getRoles:function(){return this.relation("roles")},validate:function(e,n){if("name"in e&&e.name!==this.getName()){var s=e.name;if(this.id&&this.id!==e.objectId)return new i(i.OTHER_CAUSE,"A role's name can only be set before it has been saved.");if(!r.isString(s))return new i(i.OTHER_CAUSE,"A role's name must be a String.");if(!/^[0-9a-zA-Z\-_ ]+$/.test(s))return new i(i.OTHER_CAUSE,"A role's name can only contain alphanumeric characters, _, -, and spaces.")}return!!t.Object.prototype.validate&&t.Object.prototype.validate.call(this,e,n)}})}},function(t,e,n){"use strict";var r=n(0),i=n(2)._request;t.exports=function(t){t.SearchSortBuilder=function(){this._sortFields=[]},r.extend(t.SearchSortBuilder.prototype,{_addField:function(t,e,n,r){var i={};return i[t]={order:e||"asc",mode:n||"avg",missing:"_"+(r||"last")},this._sortFields.push(i),this},ascending:function(t,e,n){return this._addField(t,"asc",e,n)},descending:function(t,e,n){return this._addField(t,"desc",e,n)},whereNear:function(t,e,n){n=n||{};var r={},i={lat:e.latitude,lon:e.longitude},s={order:n.order||"asc",mode:n.mode||"avg",unit:n.unit||"km"};return s[t]=i,r._geo_distance=s,this._sortFields.push(r),this},build:function(){return JSON.stringify(t._encode(this._sortFields))}}),t.SearchQuery=t.Query._extend({_sid:null,_hits:0,_queryString:null,_highlights:null,_sortBuilder:null,_createRequest:function(t,e){return i("search/select",null,null,"GET",t||this.toJSON(),e)},sid:function(t){return this._sid=t,this},queryString:function(t){return this._queryString=t,this},highlights:function(t){var e;return e=t&&r.isString(t)?arguments:t,this._highlights=e,this},sortBy:function(t){return this._sortBuilder=t,this},hits:function(){return this._hits||(this._hits=0),this._hits},_processResult:function(t){return delete t.className,delete t._app_url,delete t._deeplink,t},hasMore:function(){return!this._hitEnd},reset:function(){this._hitEnd=!1,this._sid=null,this._hits=0},find:function(){var t=this;return this._createRequest().then(function(e){return e.sid?(t._oldSid=t._sid,t._sid=e.sid):(t._sid=null,t._hitEnd=!0),t._hits=e.hits||0,r.map(e.results,function(n){n.className&&(e.className=n.className);var r=t._newObject(e);return r.appURL=n._app_url,r._finishFetch(t._processResult(n),!0),r})})},toJSON:function(){var e=t.SearchQuery.__super__.toJSON.call(this);if(delete e.where,this.className&&(e.clazz=this.className),this._sid&&(e.sid=this._sid),!this._queryString)throw new Error("Please set query string.");if(e.q=this._queryString,this._highlights&&(e.highlights=this._highlights.join(",")),this._sortBuilder&&e.order)throw new Error("sort and order can not be set at same time.");return this._sortBuilder&&(e.sort=this._sortBuilder.build()),e}})}},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(0),s=n(2)._request,o=n(3),a=o.getSessionToken;t.exports=function(t){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a(e)?t.User._fetchUserBySessionToken(a(e)):t.User.currentAsync()},n=function(n){return e(n).then(function(e){return t.Object.createWithoutData("_User",e.id)._toPointer()})};t.Status=function(t,e){return this.data={},this.inboxType="default",this.query=null,t&&"object"===(void 0===t?"undefined":r(t))?this.data=t:(t&&(this.data.image=t),e&&(this.data.message=e)),this},i.extend(t.Status.prototype,{get:function(t){return this.data[t]},set:function(t,e){return this.data[t]=e,this},destroy:function(e){return this.id?s("statuses",null,this.id,"DELETE",e):t.Promise.reject(new Error("The status id is not exists."))},toObject:function(){return this.id?t.Object.createWithoutData("_Status",this.id):null},_getDataJSON:function(){var e=i.clone(this.data);return t._encode(e)},send:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!a(r)&&!t.User.current())throw new Error("Please signin an user.");return this.query?n(r).then(function(t){var n=e.query.toJSON();n.className=e.query.className;var i={};return i.query=n,e.data=e.data||{},e.data.source=e.data.source||t,i.data=e._getDataJSON(),i.inboxType=e.inboxType||"default",s("statuses",null,null,"POST",i,r)}).then(function(n){return e.id=n.objectId,e.createdAt=t._parseDate(n.createdAt),e}):t.Status.sendStatusToFollowers(this,r)},_finishFetch:function(e){this.id=e.objectId,this.createdAt=t._parseDate(e.createdAt),this.updatedAt=t._parseDate(e.updatedAt),this.messageId=e.messageId,delete e.messageId,delete e.objectId,delete e.createdAt,delete e.updatedAt,this.data=t._decode(e)}}),t.Status.sendStatusToFollowers=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!a(r)&&!t.User.current())throw new Error("Please signin an user.");return n(r).then(function(n){var i={};i.className="_Follower",i.keys="follower",i.where={user:n};var o={};return o.query=i,e.data=e.data||{},e.data.source=e.data.source||n,o.data=e._getDataJSON(),o.inboxType=e.inboxType||"default",s("statuses",null,null,"POST",o,r).then(function(n){return e.id=n.objectId,e.createdAt=t._parseDate(n.createdAt),e})})},t.Status.sendPrivateStatus=function(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!a(o)&&!t.User.current())throw new Error("Please signin an user.");if(!r)throw new Error("Invalid target user.");var u=i.isString(r)?r:r.id;if(!u)throw new Error("Invalid target user.");return n(o).then(function(n){var r={};r.className="_User",r.where={objectId:u};var i={};return i.query=r,e.data=e.data||{},e.data.source=e.data.source||n,i.data=e._getDataJSON(),i.inboxType="private",e.inboxType="private",s("statuses",null,null,"POST",i,o).then(function(n){return e.id=n.objectId,e.createdAt=t._parseDate(n.createdAt),e})})},t.Status.countUnreadStatuses=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(i.isString(r)||(o=r),!a(o)&&null==n&&!t.User.current())throw new Error("Please signin an user or pass the owner objectId.");return e(o).then(function(e){var n={};return n.inboxType=t._encode(r),n.owner=t._encode(e),s("subscribe/statuses/count",null,null,"GET",n,o)})},t.Status.resetUnreadCount=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(i.isString(r)||(o=r),!a(o)&&null==n&&!t.User.current())throw new Error("Please signin an user or pass the owner objectId.");return e(o).then(function(e){var n={};return n.inboxType=t._encode(r),n.owner=t._encode(e),s("subscribe/statuses/resetUnreadCount",null,null,"POST",n,o)})},t.Status.statusQuery=function(e){var n=new t.Query("_Status");return e&&n.equalTo("source",e),n},t.InboxQuery=t.Query._extend({_objectClass:t.Status,_sinceId:0,_maxId:0,_inboxType:"default",_owner:null,_newObject:function(){return new t.Status},_createRequest:function(e,n){return t.InboxQuery.__super__._createRequest.call(this,e,n,"/subscribe/statuses")},sinceId:function(t){return this._sinceId=t,this},maxId:function(t){return this._maxId=t,this},owner:function(t){return this._owner=t,this},inboxType:function(t){return this._inboxType=t,this},toJSON:function(){var e=t.InboxQuery.__super__.toJSON.call(this);return e.owner=t._encode(this._owner),e.inboxType=t._encode(this._inboxType),e.sinceId=t._encode(this._sinceId),e.maxId=t._encode(this._maxId),e}}),t.Status.inboxQuery=function(e,n){var r=new t.InboxQuery(t.Status);return e&&(r._owner=e),n&&(r._inboxType=n),r}}},function(t,e,n){"use strict";var r=n(0),i=n(4),s=n(2),o=s._request,a=s.request,u=n(1),c=function(){if("undefined"==typeof wx||"function"!=typeof wx.login)throw new Error("Weapp Login is only available in Weapp");return new u(function(t,e){wx.login({success:function(n){var r=n.code,i=n.errMsg;r?t(r):e(new Error(i))},fail:function(){return e(new Error("wx.login 失败"))}})})},l=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=n.unionIdPlatform,o=void 0===s?"weixin":s,a=n.asMainAccount,u=void 0!==a&&a;if("string"!=typeof e)throw new i(i.OTHER_CAUSE,"unionId is not a string");if("string"!=typeof o)throw new i(i.OTHER_CAUSE,"unionIdPlatform is not a string");return r.extend({},t,{platform:o,unionid:e,main_account:Boolean(u)})};t.exports=function(t){t.User=t.Object.extend("_User",{_isCurrentUser:!1,_mergeMagicFields:function(e){return e.sessionToken&&(this._sessionToken=e.sessionToken,delete e.sessionToken),t.User.__super__._mergeMagicFields.call(this,e)},_cleanupAuthData:function(){if(this.isCurrent()){var e=this.get("authData");e&&t._objectEach(this.get("authData"),function(t,n){e[n]||delete e[n]})}},_synchronizeAllAuthData:function(){if(this.get("authData")){var e=this;t._objectEach(this.get("authData"),function(t,n){e._synchronizeAuthData(n)})}},_synchronizeAuthData:function(e){if(this.isCurrent()){var n;r.isString(e)?(n=e,e=t.User._authProviders[n]):n=e.getAuthType();var i=this.get("authData");if(i&&e){e.restoreAuthentication(i[n])||this.dissociateAuthData(e)}}},_handleSaveResult:function(e){return e&&!t._config.disableCurrentUser&&(this._isCurrentUser=!0),this._cleanupAuthData(),this._synchronizeAllAuthData(),delete this._serverData.password,this._rebuildEstimatedDataForKey("password"),this._refreshCache(),!e&&!this.isCurrent()||t._config.disableCurrentUser?u.resolve():u.resolve(t.User._saveCurrentUser(this))},_linkWith:function(e,n){var i,s=this;if(r.isString(e)?(i=e,e=t.User._authProviders[e]):i=e.getAuthType(),n){var o=this.get("authData")||{};return o[i]=n,this.save({authData:o}).then(function(t){return t._handleSaveResult(!0).then(function(){return t})})}return e.authenticate().then(function(t){return s._linkWith(e,t)})},associateWithAuthData:function(t,e){return this._linkWith(e,t)},associateWithAuthDataAndUnionId:function(t,e,n,r){return this._linkWith(e,l(t,n,r))},linkWithWeapp:function(){var t=this;return c().then(function(e){return t._linkWith("lc_weapp",{code:e})})},dissociateAuthData:function(t){return this.unset("authData."+t),this.save().then(function(t){return t._handleSaveResult(!0).then(function(){return t})})},_unlinkFrom:function(t){return console.warn("DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替"),this.dissociateAuthData(t)},_isLinked:function(t){var e;return e=r.isString(t)?t:t.getAuthType(),!!(this.get("authData")||{})[e]},logOut:function(){this._logOutWithAll(),this._isCurrentUser=!1},_logOutWithAll:function(){if(this.get("authData")){var e=this;t._objectEach(this.get("authData"),function(t,n){e._logOutWith(n)})}},_logOutWith:function(e){this.isCurrent()&&(r.isString(e)&&(e=t.User._authProviders[e]),e&&e.deauthenticate&&e.deauthenticate())},signUp:function(t,e){var n=t&&t.username||this.get("username");if(!n||""===n)throw new i(i.OTHER_CAUSE,"Cannot sign up user with an empty name.");var r=t&&t.password||this.get("password");if(!r||""===r)throw new i(i.OTHER_CAUSE,"Cannot sign up user with an empty password.");return this.save(t,e).then(function(t){return t._handleSaveResult(!0).then(function(){return t})})},signUpOrlogInWithMobilePhone:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t&&t.mobilePhoneNumber||this.get("mobilePhoneNumber");if(!n||""===n)throw new i(i.OTHER_CAUSE,"Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");var r=t&&t.smsCode||this.get("smsCode");if(!r||""===r)throw new i(i.OTHER_CAUSE,"Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");return e._makeRequest=function(t,e,n,r,i){return o("usersByMobilePhone",null,null,"POST",i)},this.save(t,e).then(function(t){return delete t.attributes.smsCode,delete t._serverData.smsCode,t._handleSaveResult(!0).then(function(){return t})})},logIn:function(){var t=this;return o("login",null,null,"POST",this.toJSON()).then(function(e){var n=t.parse(e);return t._finishFetch(n),t._handleSaveResult(!0).then(function(){return n.smsCode||delete t.attributes.smsCode,t})})},save:function(e,n,i){var s,o;return r.isObject(e)||r.isNull(e)||r.isUndefined(e)?(s=e,o=n):(s={},s[e]=n,o=i),o=o||{},t.Object.prototype.save.call(this,s,o).then(function(t){return t._handleSaveResult(!1).then(function(){return t})})},follow:function(e,n){if(!this.id)throw new Error("Please signin.");var i=void 0,s=void 0;e.user?(i=e.user,s=e.attributes):i=e;var a=r.isString(i)?i:i.id;if(!a)throw new Error("Invalid target user.");var u="users/"+this.id+"/friendship/"+a;return o(u,null,null,"POST",t._encode(s),n)},unfollow:function(t,e){if(!this.id)throw new Error("Please signin.");var n=void 0;n=t.user?t.user:t;var i=r.isString(n)?n:n.id;if(!i)throw new Error("Invalid target user.");var s="users/"+this.id+"/friendship/"+i;return o(s,null,null,"DELETE",null,e)},followerQuery:function(){return t.User.followerQuery(this.id)},followeeQuery:function(){return t.User.followeeQuery(this.id)},fetch:function(e,n){return t.Object.prototype.fetch.call(this,e,n).then(function(t){return t._handleSaveResult(!1).then(function(){return t})})},updatePassword:function(t,e,n){var r="users/"+this.id+"/updatePassword";return o(r,null,null,"PUT",{old_password:t,new_password:e},n)},isCurrent:function(){return this._isCurrentUser},getUsername:function(){return this.get("username")},getMobilePhoneNumber:function(){return this.get("mobilePhoneNumber")},setMobilePhoneNumber:function(t,e){return this.set("mobilePhoneNumber",t,e)},setUsername:function(t,e){return this.set("username",t,e)},setPassword:function(t,e){return this.set("password",t,e)},getEmail:function(){return this.get("email")},setEmail:function(t,e){return this.set("email",t,e)},authenticated:function(){return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"),!!this._sessionToken&&!t._config.disableCurrentUser&&t.User.current()&&t.User.current().id===this.id},isAuthenticated:function(){var e=this;return u.resolve().then(function(){return!!e._sessionToken&&t.User._fetchUserBySessionToken(e._sessionToken).then(function(){return!0},function(t){if(211===t.code)return!1;throw t})})},getSessionToken:function(){return this._sessionToken},refreshSessionToken:function(t){var e=this;return o("users/"+this.id+"/refreshSessionToken",null,null,"PUT",null,t).then(function(t){return e._finishFetch(t),e._handleSaveResult(!0).then(function(){return e})})},getRoles:function(e){return t.Relation.reverseQuery("_Role","users",this).find(e)}},{_currentUser:null,_currentUserMatchesDisk:!1,_CURRENT_USER_KEY:"currentUser",_authProviders:{},signUp:function(e,n,r,i){return r=r||{},r.username=e,r.password=n,t.Object._create("_User").signUp(r,i)},logIn:function(e,n,r){var i=t.Object._create("_User");return i._finishFetch({username:e,password:n}),i.logIn(r)},become:function(t){return this._fetchUserBySessionToken(t).then(function(t){return t._handleSaveResult(!0).then(function(){return t})})},_fetchUserBySessionToken:function(e){var n=t.Object._create("_User");return a({method:"GET",path:"/users/me",authOptions:{sessionToken:e}}).then(function(t){var e=n.parse(t);return n._finishFetch(e),n})},logInWithMobilePhoneSmsCode:function(e,n,r){var i=t.Object._create("_User");return i._finishFetch({mobilePhoneNumber:e,smsCode:n}),i.logIn(r)},signUpOrlogInWithMobilePhone:function(e,n,r,i){return r=r||{},r.mobilePhoneNumber=e,r.smsCode=n,t.Object._create("_User").signUpOrlogInWithMobilePhone(r,i)},logInWithMobilePhone:function(e,n,r){var i=t.Object._create("_User");return i._finishFetch({mobilePhoneNumber:e,password:n}),i.logIn(r)},signUpOrlogInWithAuthData:function(e,n){return t.User._logInWith(n,e)},signUpOrlogInWithAuthDataAndUnionId:function(t,e,n,r){return this.signUpOrlogInWithAuthData(l(t,n,r),e)},loginWithWeapp:function(){var t=this;return c().then(function(e){return t.signUpOrlogInWithAuthData({code:e},"lc_weapp")})},associateWithAuthData:function(t,e,n){return console.warn("DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替"),t._linkWith(e,n)},logOut:function(){return t._config.disableCurrentUser?(console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"),u.resolve(null)):(null!==t.User._currentUser&&(t.User._currentUser._logOutWithAll(),t.User._currentUser._isCurrentUser=!1),t.User._currentUserMatchesDisk=!0,t.User._currentUser=null,t.localStorage.removeItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function(){return t._refreshSubscriptionId()}))},followerQuery:function(e){if(!e||!r.isString(e))throw new Error("Invalid user object id.");var n=new t.FriendShipQuery("_Follower");return n._friendshipTag="follower",n.equalTo("user",t.Object.createWithoutData("_User",e)),n},followeeQuery:function(e){if(!e||!r.isString(e))throw new Error("Invalid user object id.");var n=new t.FriendShipQuery("_Followee");return n._friendshipTag="followee",n.equalTo("user",t.Object.createWithoutData("_User",e)),n},requestPasswordReset:function(t){return o("requestPasswordReset",null,null,"POST",{email:t})},requestEmailVerify:function(t){return o("requestEmailVerify",null,null,"POST",{email:t})},requestMobilePhoneVerify:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={mobilePhoneNumber:t};return e.validateToken&&(n.validate_token=e.validateToken),o("requestMobilePhoneVerify",null,null,"POST",n,e)},requestPasswordResetBySmsCode:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={mobilePhoneNumber:t};return e.validateToken&&(n.validate_token=e.validateToken),o("requestPasswordResetBySmsCode",null,null,"POST",n,e)},resetPasswordBySmsCode:function(t,e){return o("resetPasswordBySmsCode",null,t,"PUT",{password:e})},verifyMobilePhone:function(t){return o("verifyMobilePhone",null,t,"POST",null)},requestLoginSmsCode:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={mobilePhoneNumber:t};return e.validateToken&&(n.validate_token=e.validateToken),o("requestLoginSmsCode",null,null,"POST",n,e)},currentAsync:function(){return t._config.disableCurrentUser?(console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"),u.resolve(null)):t.User._currentUser?u.resolve(t.User._currentUser):t.User._currentUserMatchesDisk?u.resolve(t.User._currentUser):t.localStorage.getItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function(e){if(!e)return null;t.User._currentUserMatchesDisk=!0,t.User._currentUser=t.Object._create("_User"),t.User._currentUser._isCurrentUser=!0;var n=JSON.parse(e);return t.User._currentUser.id=n._id,delete n._id,t.User._currentUser._sessionToken=n._sessionToken,delete n._sessionToken,t.User._currentUser._finishFetch(n),t.User._currentUser._synchronizeAllAuthData(),t.User._currentUser._refreshCache(),t.User._currentUser._opSetQueue=[{}],t.User._currentUser})},current:function(){if(t._config.disableCurrentUser)return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"),null;if(t.User._currentUser)return t.User._currentUser;if(t.User._currentUserMatchesDisk)return t.User._currentUser;t.User._currentUserMatchesDisk=!0;var e=t.localStorage.getItem(t._getAVPath(t.User._CURRENT_USER_KEY));if(!e)return null;t.User._currentUser=t.Object._create("_User"),t.User._currentUser._isCurrentUser=!0;var n=JSON.parse(e);return t.User._currentUser.id=n._id,delete n._id,t.User._currentUser._sessionToken=n._sessionToken,delete n._sessionToken,t.User._currentUser._finishFetch(n),t.User._currentUser._synchronizeAllAuthData(),t.User._currentUser._refreshCache(),t.User._currentUser._opSetQueue=[{}],t.User._currentUser},_saveCurrentUser:function(e){var n;return n=t.User._currentUser!==e?t.User.logOut():u.resolve(),n.then(function(){e._isCurrentUser=!0,t.User._currentUser=e;var n=e.toJSON();return n._id=e.id,n._sessionToken=e._sessionToken,t.localStorage.setItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY),JSON.stringify(n)).then(function(){return t.User._currentUserMatchesDisk=!0,t._refreshSubscriptionId()})})},_registerAuthenticationProvider:function(e){t.User._authProviders[e.getAuthType()]=e,!t._config.disableCurrentUser&&t.User.current()&&t.User.current()._synchronizeAuthData(e.getAuthType())},_logInWith:function(e,n){return t.Object._create("_User")._linkWith(e,n)}})}},function(t,e,n){"use strict";function r(t){var e=this;this.AV=t,this.lockedUntil=0,o.getAsync("serverURLs").then(function(t){if(!t)return e.lock(0);var n=t.serverURLs,r=t.lockedUntil;e.AV._setServerURLs(n,!1),e.lockedUntil=r}).catch(function(){return e.lock(0)})}var i=n(3),s=i.ajax,o=n(9);r.prototype.disable=function(){this.disabled=!0},r.prototype.lock=function(t){this.lockedUntil=Date.now()+t},r.prototype.refresh=function(){var t=this;if(!(this.disabled||Date.now()<this.lockedUntil)){this.lock(10);return s({method:"get",url:"https://app-router.leancloud.cn/2/route",query:{appId:this.AV.applicationId}}).then(function(e){if(!t.disabled){var n=e.ttl;if(!n)throw new Error("missing ttl");n*=1e3;var r={push:"https://"+e.push_server,stats:"https://"+e.stats_server,engine:"https://"+e.engine_server,api:"https://"+e.api_server};return t.AV._setServerURLs(r,!1),t.lock(n),o.setAsync("serverURLs",{serverURLs:r,lockedUntil:t.lockedUntil},n)}}).catch(function(e){console.warn("refresh server URLs failed: "+e.message),t.lock(600)})}},t.exports=r},function(t,e,n){"use strict";/*!
 * LeanCloud JavaScript SDK
 * https://leancloud.cn
 *
 * Copyright 2016 LeanCloud.cn, Inc.
 * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
 */
n(26);var r=n(5);r._=n(0),r.version=n(11),r.Promise=n(1),r.localStorage=n(10),r.Cache=n(9),r.Error=n(4),n(21),n(18)(r),n(20)(r),n(14)(r),n(25)(r),n(29)(r),n(19)(r),n(24)(r),n(30)(r),n(33)(r),n(28)(r),n(23)(r),n(15)(r),n(16)(r),n(27)(r),n(32)(r),n(31)(r),n(22)(r),r.Conversation=n(17),t.exports=r},function(t,e,n){"use strict";t.exports=[]},function(t,e,n){"use strict";var r=n(11),i=["Browser"].concat(n(36));t.exports="LeanCloud-JS-SDK/"+r+" ("+i.join("; ")+")"},function(t,e,n){"use strict";var r=n(7),i=n(6)("cos"),s=n(1);t.exports=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};n.attributes.url=t.url,n._bucket=t.bucket,n.id=t.objectId;var a=t.upload_url+"?sign="+encodeURIComponent(t.token);return new s(function(t,s){var u=r("POST",a).set(n._uploadHeaders).attach("fileContent",e,n.attributes.name).field("op","upload");o.onprogress&&u.on("progress",o.onprogress),u.end(function(e,r){if(r&&i(r.status,r.body,r.text),e)return r&&(e.statusCode=r.status,e.responseText=r.text,e.response=r.body),s(e);t(n)})})}},function(t,e,n){"use strict";var r=n(7),i=n(1),s=n(6)("qiniu");t.exports=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};n.attributes.url=t.url,n._bucket=t.bucket,n.id=t.objectId;var a=t.token,u=t.upload_url||"https://upload.qiniup.com";return new i(function(t,i){var c=r("POST",u).set(n._uploadHeaders).attach("file",e,n.attributes.name).field("name",n.attributes.name).field("key",n._qiniu_key).field("token",a);o.onprogress&&c.on("progress",o.onprogress),c.end(function(e,r){if(r&&s(r.status,r.body,r.text),e)return r&&(e.statusCode=r.status,e.responseText=r.text,e.response=r.body),i(e);t(n)})})}},function(t,e,n){"use strict";var r=n(7),i=n(1),s=function(t,e){return e&&(t.statusCode=e.status,t.responseText=e.text,t.response=e.body),t};t.exports=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return n.attributes.url=t.url,n._bucket=t.bucket,n.id=t.objectId,new i(function(i,a){var u=r("PUT",t.upload_url).set(Object.assign({"Content-Type":n.get("mime_type"),"Cache-Control":"public, max-age=31536000"},n._uploadHeaders));o.onprogress&&u.on("progress",o.onprogress),u.on("response",function(t){if(t.ok)return i(n);a(s(t.error,t))}),u.on("error",function(t,e){return a(s(t,e))}),u.send(e).end()})}},function(t,e,n){"use strict";(function(e){var r=n(0),i=(n(1),{}),s=["getItem","setItem","removeItem","clear"],o=e.localStorage;try{var a="__storejs__";if(o.setItem(a,a),o.getItem(a)!=a)throw new Error;o.removeItem(a)}catch(t){o=n(49)}r(s).each(function(t){i[t]=function(){return o[t].apply(o,arguments)}}),i.async=!1,t.exports=i}).call(e,n(8))},function(t,e,n){"use strict";var r=function(t,e){var n;t.indexOf("base64")<0?n=atob(t):t.split(",")[0].indexOf("base64")>=0?(e=e||t.split(",")[0].split(":")[1].split(";")[0],n=atob(t.split(",")[1])):n=unescape(t.split(",")[1]);for(var r=new Uint8Array(n.length),i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return new Blob([r],{type:e})};t.exports=r},function(t,e,n){function r(t){if(t)return i(t)}function i(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if((r=n[i])===e||r.fn===e){n.splice(i,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){!function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var n=[],r=0;r<t.length;r+=3)for(var i=t[r]<<16|t[r+1]<<8|t[r+2],s=0;s<4;s++)8*r+6*s<=8*t.length?n.push(e.charAt(i>>>6*(3-s)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,i=0;r<t.length;i=++r%4)0!=i&&n.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|e.indexOf(t.charAt(r))>>>6-2*i);return n}};t.exports=n}()},function(t,e,n){function r(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function i(t){function n(){if(n.enabled){var t=n,r=+new Date,s=r-(i||r);t.diff=s,t.prev=i,t.curr=r,i=r;for(var o=new Array(arguments.length),a=0;a<o.length;a++)o[a]=arguments[a];o[0]=e.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");var u=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;u++;var i=e.formatters[r];if("function"==typeof i){var s=o[u];n=i.call(t,s),o.splice(u,1),u--}return n}),e.formatArgs.call(t,o);(n.log||e.log||console.log.bind(console)).apply(t,o)}}var i;return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),n.destroy=s,"function"==typeof e.init&&e.init(n),e.instances.push(n),n}function s(){var t=e.instances.indexOf(this);return-1!==t&&(e.instances.splice(t,1),!0)}function o(t){e.save(t),e.names=[],e.skips=[];var n,r=("string"==typeof t?t:"").split(/[\s,]+/),i=r.length;for(n=0;n<i;n++)r[n]&&(t=r[n].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")));for(n=0;n<e.instances.length;n++){var s=e.instances[n];s.enabled=e.enabled(s.namespace)}}function a(){e.enable("")}function u(t){if("*"===t[t.length-1])return!0;var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=i.debug=i.default=i,e.coerce=c,e.disable=a,e.enable=o,e.enabled=u,e.humanize=n(51),e.instances=[],e.names=[],e.skips=[],e.formatters={}},function(t,e,n){(function(e){/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function n(t){return"function"==typeof t}function r(t){M=t}function i(t){B=t}function s(){return void 0!==q?function(){q(a)}:o()}function o(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<L;t+=2){(0,z[t])(z[t+1]),z[t]=void 0,z[t+1]=void 0}L=0}function u(t,e){var n=this,r=new this.constructor(l);void 0===r[G]&&N(r);var i=n._state;if(i){var s=arguments[i-1];B(function(){return C(i,r,s,n._result)})}else O(n,r,t,e);return r}function c(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(l);return m(n,t),n}function l(){}function h(){return new TypeError("You cannot resolve a promise with itself")}function f(){return new TypeError("A promises callback cannot return that same promise.")}function d(t){try{return t.then}catch(t){return Z.error=t,Z}}function p(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function _(t,e,n){B(function(t){var r=!1,i=p(n,e,function(n){r||(r=!0,e!==n?m(t,n):b(t,n))},function(e){r||(r=!0,w(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&i&&(r=!0,w(t,i))},t)}function v(t,e){e._state===X?b(t,e._result):e._state===Y?w(t,e._result):O(e,void 0,function(e){return m(t,e)},function(e){return w(t,e)})}function y(t,e,r){e.constructor===t.constructor&&r===u&&e.constructor.resolve===c?v(t,e):r===Z?(w(t,Z.error),Z.error=null):void 0===r?b(t,e):n(r)?_(t,e,r):b(t,e)}function m(e,n){e===n?w(e,h()):t(n)?y(e,n,d(n)):b(e,n)}function g(t){t._onerror&&t._onerror(t._result),S(t)}function b(t,e){t._state===$&&(t._result=e,t._state=X,0!==t._subscribers.length&&B(S,t))}function w(t,e){t._state===$&&(t._state=Y,t._result=e,B(g,t))}function O(t,e,n,r){var i=t._subscribers,s=i.length;t._onerror=null,i[s]=e,i[s+X]=n,i[s+Y]=r,0===s&&t._state&&B(S,t)}function S(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,i=void 0,s=t._result,o=0;o<e.length;o+=3)r=e[o],i=e[o+n],r?C(n,r,i,s):i(s);t._subscribers.length=0}}function A(t,e){try{return t(e)}catch(t){return Z.error=t,Z}}function C(t,e,r,i){var s=n(r),o=void 0,a=void 0,u=void 0,c=void 0;if(s){if(o=A(r,i),o===Z?(c=!0,a=o.error,o.error=null):u=!0,e===o)return void w(e,f())}else o=i,u=!0;e._state!==$||(s&&u?m(e,o):c?w(e,a):t===X?b(e,o):t===Y&&w(e,o))}function E(t,e){try{e(function(e){m(t,e)},function(e){w(t,e)})}catch(e){w(t,e)}}function T(){return tt++}function N(t){t[G]=tt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function j(){return new Error("Array Methods must be provided an Array")}function x(t){return new et(this,t).promise}function U(t){var e=this;return new e(F(t)?function(n,r){for(var i=t.length,s=0;s<i;s++)e.resolve(t[s]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function k(t){var e=this,n=new e(l);return w(n,t),n}function I(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function R(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function P(){var t=void 0;if(void 0!==e)t=e;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(t){}if("[object Promise]"===r&&!n.cast)return}t.Promise=nt}var D=void 0;D=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var F=D,L=0,q=void 0,M=void 0,B=function(t,e){z[L]=t,z[L+1]=e,2===(L+=2)&&(M?M(a):H())},J="undefined"!=typeof window?window:void 0,Q=J||{},V=Q.MutationObserver||Q.WebKitMutationObserver,W="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),K="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,z=new Array(1e3),H=void 0;H=W?function(){return function(){return process.nextTick(a)}}():V?function(){var t=0,e=new V(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():K?function(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}():void 0===J?function(){try{var t=Function("return this")().require("vertx");return q=t.runOnLoop||t.runOnContext,s()}catch(t){return o()}}():o();var G=Math.random().toString(36).substring(2),$=void 0,X=1,Y=2,Z={error:null},tt=0,et=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(l),this.promise[G]||N(this.promise),F(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?b(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&b(this.promise,this._result))):w(this.promise,j())}return t.prototype._enumerate=function(t){for(var e=0;this._state===$&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===c){var i=d(t);if(i===u&&t._state!==$)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(n===nt){var s=new n(l);y(s,t,i),this._willSettleAt(s,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===$&&(this._remaining--,t===Y?w(r,n):this._result[e]=n),0===this._remaining&&b(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;O(t,void 0,function(t){return n._settledAt(X,e,t)},function(t){return n._settledAt(Y,e,t)})},t}(),nt=function(){function t(e){this[G]=T(),this._result=this._state=void 0,this._subscribers=[],l!==e&&("function"!=typeof e&&I(),this instanceof t?E(this,e):R())}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var e=this,n=e.constructor;return e.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})})},t}();return nt.prototype.then=u,nt.all=x,nt.race=U,nt.resolve=c,nt.reject=k,nt._setScheduler=r,nt._setAsap=i,nt._asap=B,nt.polyfill=P,nt.Promise=nt,nt})}).call(e,n(8))},function(t,e,n){"use strict";function r(){}function i(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function s(){this._events=new r,this._eventsCount=0}var o=Object.prototype.hasOwnProperty,a="~";Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(a=!1)),s.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)o.call(t,e)&&n.push(a?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},s.prototype.listeners=function(t,e){var n=a?a+t:t,r=this._events[n];if(e)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var i=0,s=r.length,o=new Array(s);i<s;i++)o[i]=r[i].fn;return o},s.prototype.emit=function(t,e,n,r,i,s){var o=a?a+t:t;if(!this._events[o])return!1;var u,c,l=this._events[o],h=arguments.length;if(l.fn){switch(l.once&&this.removeListener(t,l.fn,void 0,!0),h){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,e),!0;case 3:return l.fn.call(l.context,e,n),!0;case 4:return l.fn.call(l.context,e,n,r),!0;case 5:return l.fn.call(l.context,e,n,r,i),!0;case 6:return l.fn.call(l.context,e,n,r,i,s),!0}for(c=1,u=new Array(h-1);c<h;c++)u[c-1]=arguments[c];l.fn.apply(l.context,u)}else{var f,d=l.length;for(c=0;c<d;c++)switch(l[c].once&&this.removeListener(t,l[c].fn,void 0,!0),h){case 1:l[c].fn.call(l[c].context);break;case 2:l[c].fn.call(l[c].context,e);break;case 3:l[c].fn.call(l[c].context,e,n);break;case 4:l[c].fn.call(l[c].context,e,n,r);break;default:if(!u)for(f=1,u=new Array(h-1);f<h;f++)u[f-1]=arguments[f];l[c].fn.apply(l[c].context,u)}}return!0},s.prototype.on=function(t,e,n){var r=new i(e,n||this),s=a?a+t:t;return this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],r]:this._events[s].push(r):(this._events[s]=r,this._eventsCount++),this},s.prototype.once=function(t,e,n){var r=new i(e,n||this,!0),s=a?a+t:t;return this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],r]:this._events[s].push(r):(this._events[s]=r,this._eventsCount++),this},s.prototype.removeListener=function(t,e,n,i){var s=a?a+t:t;if(!this._events[s])return this;if(!e)return 0==--this._eventsCount?this._events=new r:delete this._events[s],this;var o=this._events[s];if(o.fn)o.fn!==e||i&&!o.once||n&&o.context!==n||(0==--this._eventsCount?this._events=new r:delete this._events[s]);else{for(var u=0,c=[],l=o.length;u<l;u++)(o[u].fn!==e||i&&!o[u].once||n&&o[u].context!==n)&&c.push(o[u]);c.length?this._events[s]=1===c.length?c[0]:c:0==--this._eventsCount?this._events=new r:delete this._events[s]}return this},s.prototype.removeAllListeners=function(t){var e;return t?(e=a?a+t:t,this._events[e]&&(0==--this._eventsCount?this._events=new r:delete this._events[e])):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prototype.setMaxListeners=function(){return this},s.prefixed=a,s.EventEmitter=s,t.exports=s},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},function(t,e,n){!function(e){var n={},r={};n.length=0,n.getItem=function(t){return r[t]||null},n.setItem=function(t,e){void 0===e?n.removeItem(t):(r.hasOwnProperty(t)||n.length++,r[t]=""+e)},n.removeItem=function(t){r.hasOwnProperty(t)&&(delete r[t],n.length--)},n.key=function(t){return Object.keys(r)[t]||null},n.clear=function(){r={},n.length=0},t.exports=n}()},function(t,e,n){!function(){var e=n(44),r=n(12).utf8,i=n(48),s=n(12).bin,o=function(t,n){t.constructor==String?t=n&&"binary"===n.encoding?s.stringToBytes(t):r.stringToBytes(t):i(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var a=e.bytesToWords(t),u=8*t.length,c=1732584193,l=-271733879,h=-1732584194,f=271733878,d=0;d<a.length;d++)a[d]=16711935&(a[d]<<8|a[d]>>>24)|4278255360&(a[d]<<24|a[d]>>>8);a[u>>>5]|=128<<u%32,a[14+(u+64>>>9<<4)]=u;for(var p=o._ff,_=o._gg,v=o._hh,y=o._ii,d=0;d<a.length;d+=16){var m=c,g=l,b=h,w=f;c=p(c,l,h,f,a[d+0],7,-680876936),f=p(f,c,l,h,a[d+1],12,-389564586),h=p(h,f,c,l,a[d+2],17,606105819),l=p(l,h,f,c,a[d+3],22,-1044525330),c=p(c,l,h,f,a[d+4],7,-176418897),f=p(f,c,l,h,a[d+5],12,1200080426),h=p(h,f,c,l,a[d+6],17,-1473231341),l=p(l,h,f,c,a[d+7],22,-45705983),c=p(c,l,h,f,a[d+8],7,1770035416),f=p(f,c,l,h,a[d+9],12,-1958414417),h=p(h,f,c,l,a[d+10],17,-42063),l=p(l,h,f,c,a[d+11],22,-1990404162),c=p(c,l,h,f,a[d+12],7,1804603682),f=p(f,c,l,h,a[d+13],12,-40341101),h=p(h,f,c,l,a[d+14],17,-1502002290),l=p(l,h,f,c,a[d+15],22,1236535329),c=_(c,l,h,f,a[d+1],5,-165796510),f=_(f,c,l,h,a[d+6],9,-1069501632),h=_(h,f,c,l,a[d+11],14,643717713),l=_(l,h,f,c,a[d+0],20,-373897302),c=_(c,l,h,f,a[d+5],5,-701558691),f=_(f,c,l,h,a[d+10],9,38016083),h=_(h,f,c,l,a[d+15],14,-660478335),l=_(l,h,f,c,a[d+4],20,-405537848),c=_(c,l,h,f,a[d+9],5,568446438),f=_(f,c,l,h,a[d+14],9,-1019803690),h=_(h,f,c,l,a[d+3],14,-187363961),l=_(l,h,f,c,a[d+8],20,1163531501),c=_(c,l,h,f,a[d+13],5,-1444681467),f=_(f,c,l,h,a[d+2],9,-51403784),h=_(h,f,c,l,a[d+7],14,1735328473),l=_(l,h,f,c,a[d+12],20,-1926607734),c=v(c,l,h,f,a[d+5],4,-378558),f=v(f,c,l,h,a[d+8],11,-2022574463),h=v(h,f,c,l,a[d+11],16,1839030562),l=v(l,h,f,c,a[d+14],23,-35309556),c=v(c,l,h,f,a[d+1],4,-1530992060),f=v(f,c,l,h,a[d+4],11,1272893353),h=v(h,f,c,l,a[d+7],16,-155497632),l=v(l,h,f,c,a[d+10],23,-1094730640),c=v(c,l,h,f,a[d+13],4,681279174),f=v(f,c,l,h,a[d+0],11,-358537222),h=v(h,f,c,l,a[d+3],16,-722521979),l=v(l,h,f,c,a[d+6],23,76029189),c=v(c,l,h,f,a[d+9],4,-640364487),f=v(f,c,l,h,a[d+12],11,-421815835),h=v(h,f,c,l,a[d+15],16,530742520),l=v(l,h,f,c,a[d+2],23,-995338651),c=y(c,l,h,f,a[d+0],6,-198630844),f=y(f,c,l,h,a[d+7],10,1126891415),h=y(h,f,c,l,a[d+14],15,-1416354905),l=y(l,h,f,c,a[d+5],21,-57434055),c=y(c,l,h,f,a[d+12],6,1700485571),f=y(f,c,l,h,a[d+3],10,-1894986606),h=y(h,f,c,l,a[d+10],15,-1051523),l=y(l,h,f,c,a[d+1],21,-2054922799),c=y(c,l,h,f,a[d+8],6,1873313359),f=y(f,c,l,h,a[d+15],10,-30611744),h=y(h,f,c,l,a[d+6],15,-1560198380),l=y(l,h,f,c,a[d+13],21,1309151649),c=y(c,l,h,f,a[d+4],6,-145523070),f=y(f,c,l,h,a[d+11],10,-1120210379),h=y(h,f,c,l,a[d+2],15,718787259),l=y(l,h,f,c,a[d+9],21,-343485551),c=c+m>>>0,l=l+g>>>0,h=h+b>>>0,f=f+w>>>0}return e.endian([c,l,h,f])};o._ff=function(t,e,n,r,i,s,o){var a=t+(e&n|~e&r)+(i>>>0)+o;return(a<<s|a>>>32-s)+e},o._gg=function(t,e,n,r,i,s,o){var a=t+(e&r|n&~r)+(i>>>0)+o;return(a<<s|a>>>32-s)+e},o._hh=function(t,e,n,r,i,s,o){var a=t+(e^n^r)+(i>>>0)+o;return(a<<s|a>>>32-s)+e},o._ii=function(t,e,n,r,i,s,o){var a=t+(n^(e|~r))+(i>>>0)+o;return(a<<s|a>>>32-s)+e},o._blocksize=16,o._digestsize=16,t.exports=function(t,n){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var r=e.wordsToBytes(o(t,n));return n&&n.asBytes?r:n&&n.asString?s.bytesToString(r):e.bytesToHex(r)}}()},function(t,e){function n(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*l;case"days":case"day":case"d":return n*c;case"hours":case"hour":case"hrs":case"hr":case"h":return n*u;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(t){return t>=c?Math.round(t/c)+"d":t>=u?Math.round(t/u)+"h":t>=a?Math.round(t/a)+"m":t>=o?Math.round(t/o)+"s":t+"ms"}function i(t){return s(t,c,"day")||s(t,u,"hour")||s(t,a,"minute")||s(t,o,"second")||t+" ms"}function s(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var o=1e3,a=60*o,u=60*a,c=24*u,l=365.25*c;t.exports=function(t,e){e=e||{};var s=typeof t;if("string"===s&&t.length>0)return n(t);if("number"===s&&!1===isNaN(t))return e.long?i(t):r(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e){function n(){this._defaults=[]}["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert"].forEach(function(t){n.prototype[t]=function(){return this._defaults.push({fn:t,arguments:arguments}),this}}),n.prototype._setDefaults=function(t){this._defaults.forEach(function(e){t[e.fn].apply(t,e.arguments)})},t.exports=n},function(t,e,n){"use strict";function r(t){if(t)return i(t)}function i(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}var s=n(13);t.exports=r,r.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,this},r.prototype.parse=function(t){return this._parser=t,this},r.prototype.responseType=function(t){return this._responseType=t,this},r.prototype.serialize=function(t){return this._serializer=t,this},r.prototype.timeout=function(t){if(!t||"object"!=typeof t)return this._timeout=t,this._responseTimeout=0,this;for(var e in t)switch(e){case"deadline":this._timeout=t.deadline;break;case"response":this._responseTimeout=t.response;break;default:console.warn("Unknown timeout option",e)}return this},r.prototype.retry=function(t,e){return 0!==arguments.length&&!0!==t||(t=1),t<=0&&(t=0),this._maxRetries=t,this._retries=0,this._retryCallback=e,this};var o=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];r.prototype._shouldRetry=function(t,e){if(!this._maxRetries||this._retries++>=this._maxRetries)return!1;if(this._retryCallback)try{var n=this._retryCallback(t,e);if(!0===n)return!0;if(!1===n)return!1}catch(t){console.error(t)}if(e&&e.status&&e.status>=500&&501!=e.status)return!0;if(t){if(t.code&&~o.indexOf(t.code))return!0;if(t.timeout&&"ECONNABORTED"==t.code)return!0;if(t.crossDomain)return!0}return!1},r.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this._end()},r.prototype.then=function(t,e){if(!this._fullfilledPromise){var n=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(t,e){n.end(function(n,r){n?e(n):t(r)})})}return this._fullfilledPromise.then(t,e)},r.prototype.catch=function(t){return this.then(void 0,t)},r.prototype.use=function(t){return t(this),this},r.prototype.ok=function(t){if("function"!=typeof t)throw Error("Callback required");return this._okCallback=t,this},r.prototype._isResponseOK=function(t){return!!t&&(this._okCallback?this._okCallback(t):t.status>=200&&t.status<300)},r.prototype.get=function(t){return this._header[t.toLowerCase()]},r.prototype.getHeader=r.prototype.get,r.prototype.set=function(t,e){if(s(t)){for(var n in t)this.set(n,t[n]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},r.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},r.prototype.field=function(t,e){if(null===t||void 0===t)throw new Error(".field(name, val) name can not be empty");if(this._data&&console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),s(t)){for(var n in t)this.field(n,t[n]);return this}if(Array.isArray(e)){for(var r in e)this.field(t,e[r]);return this}if(null===e||void 0===e)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof e&&(e=""+e),this._getFormData().append(t,e),this},r.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},r.prototype._auth=function(t,e,n,r){switch(n.type){case"basic":this.set("Authorization","Basic "+r(t+":"+e));break;case"auto":this.username=t,this.password=e;break;case"bearer":this.set("Authorization","Bearer "+t)}return this},r.prototype.withCredentials=function(t){return void 0==t&&(t=!0),this._withCredentials=t,this},r.prototype.redirects=function(t){return this._maxRedirects=t,this},r.prototype.maxResponseSize=function(t){if("number"!=typeof t)throw TypeError("Invalid argument");return this._maxResponseSize=t,this},r.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},r.prototype.send=function(t){var e=s(t),n=this._header["content-type"];if(this._formData&&console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),e&&!this._data)Array.isArray(t)?this._data=[]:this._isHost(t)||(this._data={});else if(t&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(e&&s(this._data))for(var r in t)this._data[r]=t[r];else"string"==typeof t?(n||this.type("form"),n=this._header["content-type"],this._data="application/x-www-form-urlencoded"==n?this._data?this._data+"&"+t:t:(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(n||this.type("json"),this)},r.prototype.sortQuery=function(t){return this._sort=void 0===t||t,this},r.prototype._finalizeQueryString=function(){var t=this._query.join("&");if(t&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+t),this._query.length=0,this._sort){var e=this.url.indexOf("?");if(e>=0){var n=this.url.substring(e+1).split("&");"function"==typeof this._sort?n.sort(this._sort):n.sort(),this.url=this.url.substring(0,e)+"?"+n.join("&")}}},r.prototype._appendQueryString=function(){console.trace("Unsupported")},r.prototype._timeoutError=function(t,e,n){if(!this._aborted){var r=new Error(t+e+"ms exceeded");r.timeout=e,r.code="ECONNABORTED",r.errno=n,this.timedout=!0,this.abort(),this.callback(r)}},r.prototype._setTimeouts=function(){var t=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){t._timeoutError("Timeout of ",t._timeout,"ETIME")},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){t._timeoutError("Response timeout of ",t._responseTimeout,"ETIMEDOUT")},this._responseTimeout))}},function(t,e,n){"use strict";function r(t){if(t)return i(t)}function i(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}var s=n(55);t.exports=r,r.prototype.get=function(t){return this.header[t.toLowerCase()]},r.prototype._setHeaderProperties=function(t){var e=t["content-type"]||"";this.type=s.type(e);var n=s.params(e);for(var r in n)this[r]=n[r];this.links={};try{t.link&&(this.links=s.parseLinks(t.link))}catch(t){}},r.prototype._setStatusProperties=function(t){var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.redirect=3==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.forbidden=403==t,this.notFound=404==t}},function(t,e,n){"use strict";e.type=function(t){return t.split(/ *; */).shift()},e.params=function(t){return t.split(/ *; */).reduce(function(t,e){var n=e.split(/ *= */),r=n.shift(),i=n.shift();return r&&i&&(t[r]=i),t},{})},e.parseLinks=function(t){return t.split(/ *, */).reduce(function(t,e){var n=e.split(/ *; */),r=n[0].slice(1,-1);return t[n[1].split(/ *= */)[1].slice(1,-1)]=r,t},{})},e.cleanHeader=function(t,e){return delete t["content-type"],delete t["content-length"],delete t["transfer-encoding"],delete t.host,e&&(delete t.authorization,delete t.cookie),t}}])});
//# sourceMappingURL=av-min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/qiniu-js/dist/qiniu.min.js":
/*!*************************************************!*\
  !*** ./node_modules/qiniu-js/dist/qiniu.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=58)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(30)("wks"),o=n(22),i=n(0).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(0),o=n(1),i=n(19),a=n(5),s=n(9),u=function(t,e,n){var c,f,l,h=t&u.F,p=t&u.G,d=t&u.S,g=t&u.P,m=t&u.B,v=t&u.W,y=p?o:o[e]||(o[e]={}),b=y.prototype,w=p?r:d?r[e]:(r[e]||{}).prototype;for(c in p&&(n=e),n)(f=!h&&w&&void 0!==w[c])&&s(y,c)||(l=f?w[c]:n[c],y[c]=p&&"function"!=typeof w[c]?n[c]:m&&f?i(l,r):v&&w[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):g&&"function"==typeof l?i(Function.call,l):l,g&&((y.virtual||(y.virtual={}))[c]=l,t&u.R&&b&&!b[c]&&a(b,c,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){var r=n(6),o=n(21);t.exports=n(8)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(3),o=n(43),i=n(28),a=Object.defineProperty;e.f=n(8)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(47),o=n(26);t.exports=function(t){return r(o(t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=t+864e5;return(new Date).getTime()>e}function i(t){return(0,m.default)(t).filter(function(t){return t.startsWith("x:")}).map(function(e){return[e,t[e].toString()]})}function a(t){return"qiniu_js_sdk_upload_file_"+t.name+"_size_"+t.size}function s(t){try{return JSON.parse(localStorage.getItem(a(t)))||[]}catch(t){return window.console&&window.console.warn&&console.warn("getLocalFileInfo failed"),[]}}function u(t){return{Authorization:"UpToken "+t}}function c(){return window.XMLHttpRequest?new XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP")}function f(t){return new p.default(function(e,n){var r=new FileReader;r.readAsArrayBuffer(t),r.onload=function(t){var n=t.target.result;e(n)},r.onerror=function(){n(new Error("fileReader 读取错误"))}})}function l(t,e){return new p.default(function(n,r){var o=c();o.open(e.method,t),e.onCreate&&e.onCreate(o),e.headers&&(0,m.default)(e.headers).forEach(function(t){return o.setRequestHeader(t,e.headers[t])}),o.upload.addEventListener("progress",function(t){t.lengthComputable&&e.onProgress&&e.onProgress({loaded:t.loaded,total:t.total})}),o.onreadystatechange=function(){var t=o.responseText;if(4===o.readyState){var e=o.getResponseHeader("x-reqId")||"";if(200!==o.status){var i="xhr request failed, code: "+o.status+";";return t&&(i=i+" response: "+t),void r({code:o.status,message:i,reqId:e,isRequestError:!0})}try{n({data:JSON.parse(t),reqId:e})}catch(t){r(t)}}},o.send(e.body)})}function h(){return"http:"===window.location.protocol?"http:":"https:"}e.__esModule=!0;var p=r(n(18)),d=r(n(34)),g=r(n(86)),m=r(n(36));e.isChunkExpired=o,e.getChunks=function(t,e){for(var n=[],r=Math.ceil(t.size/e),o=0;o<r;o++){var i=t.slice(e*o,o===r-1?t.size:e*(o+1));n.push(i)}return n},e.filterParams=i,e.sum=function(t){return t.reduce(function(t,e){return t+e},0)},e.setLocalFileInfo=function(t,e){try{localStorage.setItem(a(t),(0,g.default)(e))}catch(t){window.console&&window.console.warn&&console.warn("setLocalFileInfo failed")}},e.removeLocalFileInfo=function(t){try{localStorage.removeItem(a(t))}catch(t){window.console&&window.console.warn&&console.warn("removeLocalFileInfo failed")}},e.getLocalFileInfo=s,e.getResumeUploadedSize=function(t){return s(t).filter(function(t){return t&&!o(t.time)}).reduce(function(t,e){return t+e.size},0)},e.createMkFileUrl=function(t,e,n,r){var o=t+"/mkfile/"+e;null!=n&&(o+="/key/"+(0,v.urlSafeBase64Encode)(n)),r.mimeType&&(o+="/mimeType/"+(0,v.urlSafeBase64Encode)(r.mimeType));var a=r.fname;return a&&(o+="/fname/"+(0,v.urlSafeBase64Encode)(a)),r.params&&i(r.params).forEach(function(t){return o+="/"+encodeURIComponent(t[0])+"/"+(0,v.urlSafeBase64Encode)(t[1])}),o},e.getHeadersForChunkUpload=function(t){var e=u(t);return(0,d.default)({"content-type":"application/octet-stream"},e)},e.getHeadersForMkFile=function(t){var e=u(t);return(0,d.default)({"content-type":"text/plain"},e)},e.createXHR=c,e.computeMd5=function(t){return f(t).then(function(t){var e=new b.default.ArrayBuffer;return e.append(t),e.end()})},e.readAsArrayBuffer=f,e.request=l,e.getPortFromUrl=function(t){if(t&&t.match){var e=t.match(/(^https?)/);if(!e)return"";var n=e[1];return(e=t.match(/^https?:\/\/([^:^\/]*):(\d*)/))?e[2]:"http"===n?"80":"443"}return""},e.getDomainFromUrl=function(t){if(t&&t.match){var e=t.match(/^https?:\/\/([^:^\/]*)/);return e?e[1]:""}return""},e.getUploadUrl=function(t,e){var n=h();if(null!=t.uphost)return p.default.resolve(n+"//"+t.uphost);if(null!=t.region){var r=y.regionUphostMap[t.region],o=t.useCdnDomain?r.cdnUphost:r.srcUphost;return p.default.resolve(n+"//"+o)}return function(t){try{var e=function(t){var e=t.split(":"),n=e[0],r=JSON.parse((0,v.urlSafeBase64Decode)(e[2]));return r.ak=n,r.bucket=r.scope.split(":")[0],r}(t);return l(h()+"//api.qiniu.com/v2/query?ak="+e.ak+"&bucket="+e.bucket,{method:"GET"})}catch(t){return p.default.reject(t)}}(e).then(function(t){var e=t.data.up.acc.main;return n+"//"+e[0]})},e.isContainFileMimeType=function(t,e){return e.indexOf(t)>-1},e.createObjectURL=function(t){return(window.URL||window.webkitURL||window.mozURL).createObjectURL(t)},e.getTransform=function(t,e){var n=t.width,r=t.height;switch(e){case 1:return{width:n,height:r,matrix:[1,0,0,1,0,0]};case 2:return{width:n,height:r,matrix:[-1,0,0,1,n,0]};case 3:return{width:n,height:r,matrix:[-1,0,0,-1,n,r]};case 4:return{width:n,height:r,matrix:[1,0,0,-1,0,r]};case 5:return{width:r,height:n,matrix:[0,1,1,0,0,0]};case 6:return{width:r,height:n,matrix:[0,1,-1,0,r,0]};case 7:return{width:r,height:n,matrix:[0,-1,-1,0,r,n]};case 8:return{width:r,height:n,matrix:[0,-1,1,0,0,n]}}};var v=n(56),y=n(39),b=r(n(91))},function(t,e){t.exports=!0},function(t,e){t.exports={}},function(t,e,n){var r=n(46),o=n(31);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){t.exports={default:n(59),__esModule:!0}},function(t,e,n){var r=n(20);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(6).f,o=n(9),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(7),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(30)("keys"),o=n(22);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o=n(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(13)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(26);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(20);t.exports.f=function(t){return new function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}(t)}},function(t,e,n){t.exports={default:n(83),__esModule:!0}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){t.exports={default:n(88),__esModule:!0}},function(t,e,n){e.f=n(2)},function(t,e,n){var r=n(0),o=n(1),i=n(13),a=n(37),s=n(6).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){"use strict";e.__esModule=!0,e.regionUphostMap={z0:{srcUphost:"up.qiniup.com",cdnUphost:"upload.qiniup.com"},z1:{srcUphost:"up-z1.qiniup.com",cdnUphost:"upload-z1.qiniup.com"},z2:{srcUphost:"up-z2.qiniup.com",cdnUphost:"upload-z2.qiniup.com"},na0:{srcUphost:"up-na0.qiniup.com",cdnUphost:"upload-na0.qiniup.com"},as0:{srcUphost:"up-as0.qiniup.com",cdnUphost:"upload-as0.qiniup.com"}},e.region={z0:"z0",z1:"z1",z2:"z2",na0:"na0",as0:"as0"}},function(t,e){},function(t,e,n){"use strict";var r=n(60)(!0);n(42)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(13),o=n(4),i=n(44),a=n(5),s=n(14),u=n(61),c=n(23),f=n(65),l=n(2)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,d,g,m,v){u(n,e,d);var y,b,w,x=function(t){if(!h&&t in C)return C[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",_="values"==g,P=!1,C=t.prototype,U=C[l]||C["@@iterator"]||g&&C[g],I=U||x(g),F=g?_?x("entries"):I:void 0,k="Array"==e&&C.entries||U;if(k&&(w=f(k.call(new t)))!==Object.prototype&&w.next&&(c(w,S,!0),r||"function"==typeof w[l]||a(w,l,p)),_&&U&&"values"!==U.name&&(P=!0,I=function(){return U.call(this)}),r&&!v||!h&&!P&&C[l]||a(C,l,I),s[e]=I,s[S]=p,g)if(y={values:_?I:x("values"),keys:m?I:x("keys"),entries:F},v)for(b in y)b in C||i(C,b,y[b]);else o(o.P+o.F*(h||P),e,y);return y}},function(t,e,n){t.exports=!n(8)&&!n(10)(function(){return 7!=Object.defineProperty(n(27)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=n(5)},function(t,e,n){var r=n(3),o=n(62),i=n(31),a=n(29)("IE_PROTO"),s=function(){},u=function(){var t,e=n(27)("iframe"),r=i.length;for(e.style.display="none",n(49).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[i[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=u(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(9),o=n(11),i=n(63)(!1),a=n(29)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var r=n(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){n(66);for(var r=n(0),o=n(5),i=n(14),a=n(2)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var c=s[u],f=r[c],l=f&&f.prototype;l&&!l[a]&&o(l,a,c),i[c]=i.Array}},function(t,e,n){var r=n(16),o=n(2)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var r=n(3),o=n(20),i=n(2)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:o(n)}},function(t,e,n){var r,o,i,a=n(19),s=n(75),u=n(49),c=n(27),f=n(0),l=f.process,h=f.setImmediate,p=f.clearImmediate,d=f.MessageChannel,g=f.Dispatch,m=0,v={},y=function(){var t=+this;if(v.hasOwnProperty(t)){var e=v[t];delete v[t],e()}},b=function(t){y.call(t.data)};h&&p||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return v[++m]=function(){s("function"==typeof t?t:Function(t),e)},r(m),m},p=function(t){delete v[t]},"process"==n(16)(l)?r=function(t){l.nextTick(a(y,t,1))}:g&&g.now?r=function(t){g.now(a(y,t,1))}:d?(i=(o=new d).port2,o.port1.onmessage=b,r=a(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in c("script")?function(t){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),y.call(t)}}:function(t){setTimeout(a(y,t,1),0)}),t.exports={set:h,clear:p}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(3),o=n(7),i=n(33);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";e.__esModule=!0,e.urlSafeBase64Encode=function(t){return(t=function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=void 0,r=void 0,o=void 0,i=void 0,a=void 0,s=void 0,u=void 0,c=void 0,f=0,l=0,h="",p=[];if(!t)return t;t=function(t){if(null===t||void 0===t)return"";var e=t+"",n="",r=void 0,o=void 0,i=0;r=o=0,i=e.length;for(var a=0;a<i;a++){var s=e.charCodeAt(a),u=null;if(s<128)o++;else if(s>127&&s<2048)u=String.fromCharCode(s>>6|192,63&s|128);else if(63488&s^!0)u=String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128);else{if(64512&s^!0)throw new RangeError("Unmatched trail surrogate at "+a);var c=e.charCodeAt(++a);if(64512&c^!0)throw new RangeError("Unmatched lead surrogate at "+(a-1));s=((1023&s)<<10)+(1023&c)+65536,u=String.fromCharCode(s>>18|240,s>>12&63|128,s>>6&63|128,63&s|128)}null!==u&&(o>r&&(n+=e.slice(r,o)),n+=u,r=o=a+1)}return o>r&&(n+=e.slice(r,i)),n}(t+"");do{n=t.charCodeAt(f++),r=t.charCodeAt(f++),o=t.charCodeAt(f++),i=(c=n<<16|r<<8|o)>>18&63,a=c>>12&63,s=c>>6&63,u=63&c,p[l++]=e.charAt(i)+e.charAt(a)+e.charAt(s)+e.charAt(u)}while(f<t.length);switch(h=p.join(""),t.length%3){case 1:h=h.slice(0,-2)+"==";break;case 2:h=h.slice(0,-1)+"="}return h}(t)).replace(/\//g,"_").replace(/\+/g,"-")},e.urlSafeBase64Decode=function(t){return function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=void 0,r=void 0,o=void 0,i=void 0,a=void 0,s=void 0,u=void 0,c=void 0,f=0,l=0,h=[];if(!t)return t;t+="";do{i=e.indexOf(t.charAt(f++)),a=e.indexOf(t.charAt(f++)),s=e.indexOf(t.charAt(f++)),u=e.indexOf(t.charAt(f++)),n=(c=i<<18|a<<12|s<<6|u)>>16&255,r=c>>8&255,o=255&c,h[l++]=64===s?String.fromCharCode(n):64===u?String.fromCharCode(n,r):String.fromCharCode(n,r,o)}while(f<t.length);return h.join("")}(t=t.replace(/_/g,"/").replace(/-/g,"+"))}},function(t,e,n){var r=n(46),o=n(31).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){"use strict";e.__esModule=!0,e.pipeline=e.compressImage=e.exif=e.imageInfo=e.watermark=e.imageMogr2=e.getUploadUrl=e.filterParams=e.getHeadersForMkFile=e.getResumeUploadedSize=e.getHeadersForChunkUpload=e.createMkFileUrl=e.region=e.upload=void 0;var r=n(39),o=n(12),i=n(92),a=n(94),s=n(95),u=n(109),c=function(t){return t&&t.__esModule?t:{default:t}}(n(110)),f=new u.StatisticsLogger;e.upload=function(t,e,n,r,o){var a={file:t,key:e,token:n,putExtra:r,config:o};return new s.Observable(function(t){var e=new i.UploadManager(a,{onData:function(e){return t.next(e)},onError:function(e){return t.error(e)},onComplete:function(e){return t.complete(e)}},f);return e.putFile(),e.stop.bind(e)})},e.region=r.region,e.createMkFileUrl=o.createMkFileUrl,e.getHeadersForChunkUpload=o.getHeadersForChunkUpload,e.getResumeUploadedSize=o.getResumeUploadedSize,e.getHeadersForMkFile=o.getHeadersForMkFile,e.filterParams=o.filterParams,e.getUploadUrl=o.getUploadUrl,e.imageMogr2=a.imageMogr2,e.watermark=a.watermark,e.imageInfo=a.imageInfo,e.exif=a.exif,e.compressImage=c.default,e.pipeline=a.pipeline},function(t,e,n){n(40),n(41),n(50),n(69),n(81),n(82),t.exports=n(1).Promise},function(t,e,n){var r=n(25),o=n(26);t.exports=function(t){return function(e,n){var i,a,s=String(o(e)),u=r(n),c=s.length;return u<0||u>=c?t?"":void 0:(i=s.charCodeAt(u))<55296||i>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?t?s.charAt(u):i:t?s.slice(u,u+2):a-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(45),o=n(21),i=n(23),a={};n(5)(a,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(6),o=n(3),i=n(15);t.exports=n(8)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),s=a.length,u=0;s>u;)r.f(t,n=a[u++],e[n]);return t}},function(t,e,n){var r=n(11),o=n(48),i=n(64);t.exports=function(t){return function(e,n,a){var s,u=r(e),c=o(u.length),f=i(a,c);if(t&&n!=n){for(;c>f;)if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(25),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(9),o=n(32),i=n(29)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){"use strict";var r=n(67),o=n(68),i=n(14),a=n(11);t.exports=n(42)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r,o,i,a,s=n(13),u=n(0),c=n(19),f=n(51),l=n(4),h=n(7),p=n(20),d=n(70),g=n(71),m=n(52),v=n(53).set,y=n(76)(),b=n(33),w=n(54),x=n(77),S=n(55),_=u.TypeError,P=u.process,C=P&&P.versions,U=C&&C.v8||"",I=u.Promise,F="process"==f(P),k=function(){},E=o=b.f,M=!!function(){try{var t=I.resolve(1),e=(t.constructor={})[n(2)("species")]=function(t){t(k,k)};return(F||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof e&&0!==U.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),O=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},T=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!function(e){var n,i,a,s=o?e.ok:e.fail,u=e.resolve,c=e.reject,f=e.domain;try{s?(o||(2==t._h&&L(t),t._h=1),!0===s?n=r:(f&&f.enter(),n=s(r),f&&(f.exit(),a=!0)),n===e.promise?c(_("Promise-chain cycle")):(i=O(n))?i.call(n,u,c):u(n)):c(r)}catch(t){f&&!a&&f.exit(),c(t)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&R(t)})}},R=function(t){v.call(u,function(){var e,n,r,o=t._v,i=A(t);if(i&&(e=w(function(){F?P.emit("unhandledRejection",o,t):(n=u.onunhandledrejection)?n({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=F||A(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){v.call(u,function(){var e;F?P.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},D=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),T(e,!0))},j=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw _("Promise can't be resolved itself");(e=O(t))?y(function(){var r={_w:n,_d:!1};try{e.call(t,c(j,r,1),c(D,r,1))}catch(t){D.call(r,t)}}):(n._v=t,n._s=1,T(n,!1))}catch(t){D.call({_w:n,_d:!1},t)}}};M||(I=function(t){d(this,I,"Promise","_h"),p(t),r.call(this);try{t(c(j,this,1),c(D,this,1))}catch(t){D.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(78)(I.prototype,{then:function(t,e){var n=E(m(this,I));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=F?P.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&T(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=c(j,t,1),this.reject=c(D,t,1)},b.f=E=function(t){return t===I||t===a?new i(t):o(t)}),l(l.G+l.W+l.F*!M,{Promise:I}),n(23)(I,"Promise"),n(79)("Promise"),a=n(1).Promise,l(l.S+l.F*!M,"Promise",{reject:function(t){var e=E(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(s||!M),"Promise",{resolve:function(t){return S(s&&this===a?I:this,t)}}),l(l.S+l.F*!(M&&n(80)(function(t){I.all(t).catch(k)})),"Promise",{all:function(t){var e=this,n=E(e),r=n.resolve,o=n.reject,i=w(function(){var n=[],i=0,a=1;g(t,!1,function(t){var s=i++,u=!1;n.push(void 0),a++,e.resolve(t).then(function(t){u||(u=!0,n[s]=t,--a||r(n))},o)}),--a||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=E(e),r=n.reject,o=w(function(){g(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(19),o=n(72),i=n(73),a=n(3),s=n(48),u=n(74),c={},f={};(e=t.exports=function(t,e,n,l,h){var p,d,g,m,v=h?function(){return t}:u(t),y=r(n,l,e?2:1),b=0;if("function"!=typeof v)throw TypeError(t+" is not iterable!");if(i(v)){for(p=s(t.length);p>b;b++)if((m=e?y(a(d=t[b])[0],d[1]):y(t[b]))===c||m===f)return m}else for(g=v.call(t);!(d=g.next()).done;)if((m=o(g,y,d.value,e))===c||m===f)return m}).BREAK=c,e.RETURN=f},function(t,e,n){var r=n(3);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(14),o=n(2)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(51),o=n(2)("iterator"),i=n(14);t.exports=n(1).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(0),o=n(53).set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,s=r.Promise,u="process"==n(16)(a);t.exports=function(){var t,e,n,c=function(){var r,o;for(u&&(r=a.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(u)n=function(){a.nextTick(c)};else if(!i||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var f=s.resolve(void 0);n=function(){f.then(c)}}else n=function(){o.call(r,c)};else{var l=!0,h=document.createTextNode("");new i(c).observe(h,{characterData:!0}),n=function(){h.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(0).navigator;t.exports=r&&r.userAgent||""},function(t,e,n){var r=n(5);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){"use strict";var r=n(0),o=n(1),i=n(6),a=n(8),s=n(2)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];a&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(2)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(4),o=n(1),i=n(0),a=n(52),s=n(55);r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then(function(){return n})}:t,n?function(n){return s(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(4),o=n(33),i=n(54);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){n(84),t.exports=n(1).Object.assign},function(t,e,n){var r=n(4);r(r.S+r.F,"Object",{assign:n(85)})},function(t,e,n){"use strict";var r=n(15),o=n(35),i=n(24),a=n(32),s=n(47),u=Object.assign;t.exports=!u||n(10)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=a(t),u=arguments.length,c=1,f=o.f,l=i.f;u>c;)for(var h,p=s(arguments[c++]),d=f?r(p).concat(f(p)):r(p),g=d.length,m=0;g>m;)l.call(p,h=d[m++])&&(n[h]=p[h]);return n}:u},function(t,e,n){t.exports={default:n(87),__esModule:!0}},function(t,e,n){var r=n(1),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){n(89),t.exports=n(1).Object.keys},function(t,e,n){var r=n(32),o=n(15);n(90)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(4),o=n(1),i=n(10);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},function(t,e,n){!function(e){t.exports=function(t){"use strict";function e(t,e){var n=t[0],r=t[1],o=t[2],i=t[3];r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&o|~r&i)+e[0]-680876936|0)<<7|n>>>25)+r|0)&r|~n&o)+e[1]-389564586|0)<<12|i>>>20)+n|0)&n|~i&r)+e[2]+606105819|0)<<17|o>>>15)+i|0)&i|~o&n)+e[3]-1044525330|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&o|~r&i)+e[4]-176418897|0)<<7|n>>>25)+r|0)&r|~n&o)+e[5]+1200080426|0)<<12|i>>>20)+n|0)&n|~i&r)+e[6]-1473231341|0)<<17|o>>>15)+i|0)&i|~o&n)+e[7]-45705983|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&o|~r&i)+e[8]+1770035416|0)<<7|n>>>25)+r|0)&r|~n&o)+e[9]-1958414417|0)<<12|i>>>20)+n|0)&n|~i&r)+e[10]-42063|0)<<17|o>>>15)+i|0)&i|~o&n)+e[11]-1990404162|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&o|~r&i)+e[12]+1804603682|0)<<7|n>>>25)+r|0)&r|~n&o)+e[13]-40341101|0)<<12|i>>>20)+n|0)&n|~i&r)+e[14]-1502002290|0)<<17|o>>>15)+i|0)&i|~o&n)+e[15]+1236535329|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&i|o&~i)+e[1]-165796510|0)<<5|n>>>27)+r|0)&o|r&~o)+e[6]-1069501632|0)<<9|i>>>23)+n|0)&r|n&~r)+e[11]+643717713|0)<<14|o>>>18)+i|0)&n|i&~n)+e[0]-373897302|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&i|o&~i)+e[5]-701558691|0)<<5|n>>>27)+r|0)&o|r&~o)+e[10]+38016083|0)<<9|i>>>23)+n|0)&r|n&~r)+e[15]-660478335|0)<<14|o>>>18)+i|0)&n|i&~n)+e[4]-405537848|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&i|o&~i)+e[9]+568446438|0)<<5|n>>>27)+r|0)&o|r&~o)+e[14]-1019803690|0)<<9|i>>>23)+n|0)&r|n&~r)+e[3]-187363961|0)<<14|o>>>18)+i|0)&n|i&~n)+e[8]+1163531501|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&i|o&~i)+e[13]-1444681467|0)<<5|n>>>27)+r|0)&o|r&~o)+e[2]-51403784|0)<<9|i>>>23)+n|0)&r|n&~r)+e[7]+1735328473|0)<<14|o>>>18)+i|0)&n|i&~n)+e[12]-1926607734|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r^o^i)+e[5]-378558|0)<<4|n>>>28)+r|0)^r^o)+e[8]-2022574463|0)<<11|i>>>21)+n|0)^n^r)+e[11]+1839030562|0)<<16|o>>>16)+i|0)^i^n)+e[14]-35309556|0)<<23|r>>>9)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r^o^i)+e[1]-1530992060|0)<<4|n>>>28)+r|0)^r^o)+e[4]+1272893353|0)<<11|i>>>21)+n|0)^n^r)+e[7]-155497632|0)<<16|o>>>16)+i|0)^i^n)+e[10]-1094730640|0)<<23|r>>>9)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r^o^i)+e[13]+681279174|0)<<4|n>>>28)+r|0)^r^o)+e[0]-358537222|0)<<11|i>>>21)+n|0)^n^r)+e[3]-722521979|0)<<16|o>>>16)+i|0)^i^n)+e[6]+76029189|0)<<23|r>>>9)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r^o^i)+e[9]-640364487|0)<<4|n>>>28)+r|0)^r^o)+e[12]-421815835|0)<<11|i>>>21)+n|0)^n^r)+e[15]+530742520|0)<<16|o>>>16)+i|0)^i^n)+e[2]-995338651|0)<<23|r>>>9)+o|0,r=((r+=((i=((i+=(r^((n=((n+=(o^(r|~i))+e[0]-198630844|0)<<6|n>>>26)+r|0)|~o))+e[7]+1126891415|0)<<10|i>>>22)+n|0)^((o=((o+=(n^(i|~r))+e[14]-1416354905|0)<<15|o>>>17)+i|0)|~n))+e[5]-57434055|0)<<21|r>>>11)+o|0,r=((r+=((i=((i+=(r^((n=((n+=(o^(r|~i))+e[12]+1700485571|0)<<6|n>>>26)+r|0)|~o))+e[3]-1894986606|0)<<10|i>>>22)+n|0)^((o=((o+=(n^(i|~r))+e[10]-1051523|0)<<15|o>>>17)+i|0)|~n))+e[1]-2054922799|0)<<21|r>>>11)+o|0,r=((r+=((i=((i+=(r^((n=((n+=(o^(r|~i))+e[8]+1873313359|0)<<6|n>>>26)+r|0)|~o))+e[15]-30611744|0)<<10|i>>>22)+n|0)^((o=((o+=(n^(i|~r))+e[6]-1560198380|0)<<15|o>>>17)+i|0)|~n))+e[13]+1309151649|0)<<21|r>>>11)+o|0,r=((r+=((i=((i+=(r^((n=((n+=(o^(r|~i))+e[4]-145523070|0)<<6|n>>>26)+r|0)|~o))+e[11]-1120210379|0)<<10|i>>>22)+n|0)^((o=((o+=(n^(i|~r))+e[2]+718787259|0)<<15|o>>>17)+i|0)|~n))+e[9]-343485551|0)<<21|r>>>11)+o|0,t[0]=n+t[0]|0,t[1]=r+t[1]|0,t[2]=o+t[2]|0,t[3]=i+t[3]|0}function n(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return n}function r(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t[e]+(t[e+1]<<8)+(t[e+2]<<16)+(t[e+3]<<24);return n}function o(t){var r,o,i,a,s,u,c=t.length,f=[1732584193,-271733879,-1732584194,271733878];for(r=64;r<=c;r+=64)e(f,n(t.substring(r-64,r)));for(o=(t=t.substring(r-64)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=0;r<o;r+=1)i[r>>2]|=t.charCodeAt(r)<<(r%4<<3);if(i[r>>2]|=128<<(r%4<<3),r>55)for(e(f,i),r=0;r<16;r+=1)i[r]=0;return a=(a=8*c).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(a[2],16),u=parseInt(a[1],16)||0,i[14]=s,i[15]=u,e(f,i),f}function i(t){var e,n="";for(e=0;e<4;e+=1)n+=f[t>>8*e+4&15]+f[t>>8*e&15];return n}function a(t){var e;for(e=0;e<t.length;e+=1)t[e]=i(t[e]);return t.join("")}function s(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function u(t){var e,n=[],r=t.length;for(e=0;e<r-1;e+=2)n.push(parseInt(t.substr(e,2),16));return String.fromCharCode.apply(String,n)}function c(){this.reset()}var f=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];return a(o("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function e(t,e){return(t=0|t||0)<0?Math.max(t+e,0):Math.min(t,e)}ArrayBuffer.prototype.slice=function(n,r){var o,i,a,s,u=this.byteLength,c=e(n,u),f=u;return r!==t&&(f=e(r,u)),c>f?new ArrayBuffer(0):(o=f-c,i=new ArrayBuffer(o),a=new Uint8Array(i),s=new Uint8Array(this,c,o),a.set(s),i)}}(),c.prototype.append=function(t){return this.appendBinary(s(t)),this},c.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var r,o=this._buff.length;for(r=64;r<=o;r+=64)e(this._hash,n(this._buff.substring(r-64,r)));return this._buff=this._buff.substring(r-64),this},c.prototype.end=function(t){var e,n,r=this._buff,o=r.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<o;e+=1)i[e>>2]|=r.charCodeAt(e)<<(e%4<<3);return this._finish(i,o),n=a(this._hash),t&&(n=u(n)),this.reset(),n},c.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},c.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},c.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},c.prototype._finish=function(t,n){var r,o,i,a=n;if(t[a>>2]|=128<<(a%4<<3),a>55)for(e(this._hash,t),a=0;a<16;a+=1)t[a]=0;r=(r=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(r[2],16),i=parseInt(r[1],16)||0,t[14]=o,t[15]=i,e(this._hash,t)},c.hash=function(t,e){return c.hashBinary(s(t),e)},c.hashBinary=function(t,e){var n=a(o(t));return e?u(n):n},c.ArrayBuffer=function(){this.reset()},c.ArrayBuffer.prototype.append=function(t){var n,o=function(t,e,n){var r=new Uint8Array(t.byteLength+e.byteLength);return r.set(new Uint8Array(t)),r.set(new Uint8Array(e),t.byteLength),r}(this._buff.buffer,t),i=o.length;for(this._length+=t.byteLength,n=64;n<=i;n+=64)e(this._hash,r(o.subarray(n-64,n)));return this._buff=n-64<i?new Uint8Array(o.buffer.slice(n-64)):new Uint8Array(0),this},c.ArrayBuffer.prototype.end=function(t){var e,n,r=this._buff,o=r.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<o;e+=1)i[e>>2]|=r[e]<<(e%4<<3);return this._finish(i,o),n=a(this._hash),t&&(n=u(n)),this.reset(),n},c.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.ArrayBuffer.prototype.getState=function(){var t=c.prototype.getState.call(this);return t.buff=function(t){return String.fromCharCode.apply(null,new Uint8Array(t))}(t.buff),t},c.ArrayBuffer.prototype.setState=function(t){return t.buff=function(t,e){var n,r=t.length,o=new ArrayBuffer(r),i=new Uint8Array(o);for(n=0;n<r;n+=1)i[n]=t.charCodeAt(n);return i}(t.buff),c.prototype.setState.call(this,t)},c.ArrayBuffer.prototype.destroy=c.prototype.destroy,c.ArrayBuffer.prototype._finish=c.prototype._finish,c.ArrayBuffer.hash=function(t,n){var o=a(function(t){var n,o,i,a,s,u,c=t.length,f=[1732584193,-271733879,-1732584194,271733878];for(n=64;n<=c;n+=64)e(f,r(t.subarray(n-64,n)));for(o=(t=n-64<c?t.subarray(n-64):new Uint8Array(0)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0;n<o;n+=1)i[n>>2]|=t[n]<<(n%4<<3);if(i[n>>2]|=128<<(n%4<<3),n>55)for(e(f,i),n=0;n<16;n+=1)i[n]=0;return a=(a=8*c).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(a[2],16),u=parseInt(a[1],16)||0,i[14]=s,i[15]=u,e(f,i),f}(new Uint8Array(t)));return n?u(o):o},c}()}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.UploadManager=void 0;var o=r(n(18)),i=r(n(34)),a=r(n(17)),s=n(12),u=n(93);e.UploadManager=function(){function t(e,n,r){var o=this;(0,a.default)(this,t),this.config=(0,i.default)({useCdnDomain:!0,disableStatisticsReport:!1,retryCount:3,checkByMD5:!1,uphost:null,forceDirect:!1,concurrentRequestLimit:3,region:null},e.config),this.putExtra=(0,i.default)({fname:"",params:{},mimeType:null},e.putExtra),this.statisticsLogger=r,this.progress=null,this.xhrList=[],this.xhrHandler=function(t){return o.xhrList.push(t)},this.aborted=!1,this.file=e.file,this.key=e.key,this.token=e.token,this.onData=function(){},this.onError=function(){},this.onComplete=function(){},this.retryCount=0,(0,i.default)(this,n)}return t.prototype.putFile=function(){var t=this;if(this.aborted=!1,this.putExtra.fname||(this.putExtra.fname=this.file.name),!this.putExtra.mimeType||!this.putExtra.mimeType.length||(0,s.isContainFileMimeType)(this.file.type,this.putExtra.mimeType)){var e=(0,s.getUploadUrl)(this.config,this.token).then(function(e){return t.uploadUrl=e,t.uploadAt=(new Date).getTime(),t.config.forceDirect?t.directUpload():t.file.size>4194304?t.resumeUpload():t.directUpload()});return e.then(function(e){t.onComplete(e.data),t.config.disableStatisticsReport||t.sendLog(e.reqId,200)},function(e){if(t.clear(),e.isRequestError&&!t.config.disableStatisticsReport){var n=t.aborted?"":e.reqId,r=t.aborted?-2:e.code;t.sendLog(n,r)}var o=e.isRequestError&&0===e.code&&!t.aborted,i=++t.retryCount<=t.config.retryCount;o&&i?t.putFile():t.onError(e)}),e}var n=new Error("file type doesn't match with what you specify");this.onError(n)},t.prototype.clear=function(){this.xhrList.forEach(function(t){return t.abort()}),this.xhrList=[]},t.prototype.stop=function(){this.clear(),this.aborted=!0},t.prototype.sendLog=function(t,e){this.statisticsLogger.log({code:e,reqId:t,host:(0,s.getDomainFromUrl)(this.uploadUrl),remoteIp:"",port:(0,s.getPortFromUrl)(this.uploadUrl),duration:((new Date).getTime()-this.uploadAt)/1e3,time:Math.floor(this.uploadAt/1e3),bytesSent:this.progress?this.progress.total.loaded:0,upType:"jssdk-h5",size:this.file.size},this.token)},t.prototype.directUpload=function(){var t=this,e=new FormData;return e.append("file",this.file),e.append("token",this.token),null!=this.key&&e.append("key",this.key),e.append("fname",this.putExtra.fname),(0,s.filterParams)(this.putExtra.params).forEach(function(t){return e.append(t[0],t[1])}),(0,s.request)(this.uploadUrl,{method:"POST",body:e,onProgress:function(e){t.updateDirectProgress(e.loaded,e.total)},onCreate:this.xhrHandler}).then(function(e){return t.finishDirectProgress(),e})},t.prototype.resumeUpload=function(){var t=this;this.loaded={mkFileProgress:0,chunks:null},this.ctxList=[],this.localInfo=(0,s.getLocalFileInfo)(this.file),this.chunks=(0,s.getChunks)(this.file,4194304),this.initChunksProgress();var e=new u.Pool(function(e){return t.uploadChunk(e)},this.config.concurrentRequestLimit),n=this.chunks.map(function(t,n){return e.enqueue({chunk:t,index:n})}),r=o.default.all(n).then(function(){return t.mkFileReq()});return r.then(function(e){(0,s.removeLocalFileInfo)(t.file)},function(e){701!==e.code||(0,s.removeLocalFileInfo)(t.file)}),r},t.prototype.uploadChunk=function(t){var e=this,n=t.index,r=t.chunk,i=this.localInfo[n],a=this.uploadUrl+"/mkblk/"+r.size,u=i&&!(0,s.isChunkExpired)(i.time),c=this.config.checkByMD5,f=function(){return e.updateChunkProgress(r.size,n),e.ctxList[n]={ctx:i.ctx,size:i.size,time:i.time,md5:i.md5},o.default.resolve(null)};return u&&!c?f():(0,s.computeMd5)(r).then(function(t){if(u&&t===i.md5)return f();var o=(0,s.getHeadersForChunkUpload)(e.token),c=function(t){e.updateChunkProgress(t.loaded,n)},l=e.xhrHandler;return(0,s.request)(a,{method:"POST",headers:o,body:r,onProgress:c,onCreate:l}).then(function(o){c({loaded:r.size}),e.ctxList[n]={time:(new Date).getTime(),ctx:o.data.ctx,size:r.size,md5:t},(0,s.setLocalFileInfo)(e.file,e.ctxList)})})},t.prototype.mkFileReq=function(){var t=this,e=(0,i.default)({mimeType:"application/octet-stream"},this.putExtra),n=(0,s.createMkFileUrl)(this.uploadUrl,this.file.size,this.key,e),r=this.ctxList.map(function(t){return t.ctx}).join(","),a=(0,s.getHeadersForMkFile)(this.token),u=this.xhrHandler;return(0,s.request)(n,{method:"POST",body:r,headers:a,onCreate:u}).then(function(e){return t.updateMkFileProgress(1),o.default.resolve(e)})},t.prototype.updateDirectProgress=function(t,e){this.progress={total:this.getProgressInfoItem(t,e+1)},this.onData(this.progress)},t.prototype.finishDirectProgress=function(){if(!this.progress)return this.progress={total:this.getProgressInfoItem(this.file.size,this.file.size)},void this.onData(this.progress);var t=this.progress.total;this.progress={total:this.getProgressInfoItem(t.loaded+1,t.size)},this.onData(this.progress)},t.prototype.initChunksProgress=function(){this.loaded.chunks=this.chunks.map(function(t){return 0}),this.notifyResumeProgress()},t.prototype.updateChunkProgress=function(t,e){this.loaded.chunks[e]=t,this.notifyResumeProgress()},t.prototype.updateMkFileProgress=function(t){this.loaded.mkFileProgress=t,this.notifyResumeProgress()},t.prototype.notifyResumeProgress=function(){var t=this;this.progress={total:this.getProgressInfoItem((0,s.sum)(this.loaded.chunks)+this.loaded.mkFileProgress,this.file.size+1),chunks:this.chunks.map(function(e,n){return t.getProgressInfoItem(t.loaded.chunks[n],e.size)})},this.onData(this.progress)},t.prototype.getProgressInfoItem=function(t,e){return{loaded:t,size:e,percent:t/e*100}},t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.Pool=void 0;var o=r(n(18)),i=r(n(17));e.Pool=function(){function t(e,n){(0,i.default)(this,t),this.runTask=e,this.queue=[],this.processing=[],this.limit=n}return t.prototype.enqueue=function(t){var e=this;return new o.default(function(n,r){e.queue.push({task:t,resolve:n,reject:r}),e.check()})},t.prototype.run=function(t){var e=this;this.queue=this.queue.filter(function(e){return e!==t}),this.processing.push(t),this.runTask(t.task).then(function(){e.processing=e.processing.filter(function(e){return e!==t}),t.resolve(),e.check()},function(e){return t.reject(e)})},t.prototype.check=function(){var t=this,e=this.processing.length,n=this.limit-e;this.queue.slice(0,n).forEach(function(e,n){t.run(e)})},t}()},function(t,e,n){"use strict";function r(t,e){return t=encodeURIComponent(t),"/"!==e.slice(e.length-1)&&(e+="/"),e+t}function o(t,e,n){if(!/^\d$/.test(t.mode))throw"mode should be number in imageView2";var o=t.mode,i=t.w,a=t.h,s=t.q,u=t.format;if(!i&&!a)throw"param w and h is empty in imageView2";var c="imageView2/"+encodeURIComponent(o);return c+=i?"/w/"+encodeURIComponent(i):"",c+=a?"/h/"+encodeURIComponent(a):"",c+=s?"/q/"+encodeURIComponent(s):"",c+=u?"/format/"+encodeURIComponent(u):"",e&&(c=r(e,n)+"?"+c),c}function i(t,e,n){var o=t["auto-orient"],i=t.thumbnail,a=t.strip,s=t.gravity,u=t.crop,c=t.quality,f=t.rotate,l=t.format,h=t.blur,p="imageMogr2";return p+=o?"/auto-orient":"",p+=i?"/thumbnail/"+encodeURIComponent(i):"",p+=a?"/strip":"",p+=s?"/gravity/"+encodeURIComponent(s):"",p+=c?"/quality/"+encodeURIComponent(c):"",p+=u?"/crop/"+encodeURIComponent(u):"",p+=f?"/rotate/"+encodeURIComponent(f):"",p+=l?"/format/"+encodeURIComponent(l):"",p+=h?"/blur/"+encodeURIComponent(h):"",e&&(p=r(e,n)+"?"+p),p}function a(t,e,n){var o=t.mode;if(!o)throw"mode can't be empty in watermark";var i="watermark/"+o;if(1!==o&&2!==o)throw"mode is wrong";if(1===o){var a=t.image;if(!a)throw"image can't be empty in watermark";i+=a?"/image/"+(0,u.urlSafeBase64Encode)(a):""}if(2===o){var s=t.text,c=t.font,f=t.fontsize,l=t.fill;if(!s)throw"text can't be empty in watermark";i+=s?"/text/"+(0,u.urlSafeBase64Encode)(s):"",i+=c?"/font/"+(0,u.urlSafeBase64Encode)(c):"",i+=f?"/fontsize/"+f:"",i+=l?"/fill/"+(0,u.urlSafeBase64Encode)(l):""}var h=t.dissolve,p=t.gravity,d=t.dx,g=t.dy;return i+=h?"/dissolve/"+encodeURIComponent(h):"",i+=p?"/gravity/"+encodeURIComponent(p):"",i+=d?"/dx/"+encodeURIComponent(d):"",i+=g?"/dy/"+encodeURIComponent(g):"",e&&(i=r(e,n)+"?"+i),i}e.__esModule=!0,e.imageView2=o,e.imageMogr2=i,e.watermark=a,e.imageInfo=function(t,e){var n=r(t,e)+"?imageInfo";return(0,s.request)(n,{method:"GET"})},e.exif=function(t,e){var n=r(t,e)+"?exif";return(0,s.request)(n,{method:"GET"})},e.pipeline=function(t,e,n){var s=void 0,u=void 0,c="";if("[object Array]"===Object.prototype.toString.call(t)){for(var f=0,l=t.length;f<l;f++){if(!(s=t[f]).fop)throw"fop can't be empty in pipeline";switch(s.fop){case"watermark":c+=a(s)+"|";break;case"imageView2":c+=o(s)+"|";break;case"imageMogr2":c+=i(s)+"|";break;default:u=!0}if(u)throw"fop is wrong in pipeline"}if(e){var h=(c=r(e,n)+"?"+c).length;"|"===c.slice(h-1)&&(c=c.slice(0,h-1))}return c}throw"pipeline's first param should be array"};var s=n(12),u=n(56)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.Observable=void 0;var o=r(n(96)),i=r(n(17));e.Observable=function(){function t(e){(0,i.default)(this,t),this.subscribeAction=e}return t.prototype.subscribe=function(t,e,n){var r=new a(t,e,n),o=this.subscribeAction(r);return new s(r,o)},t}();var a=function(){function t(e,n,r){(0,i.default)(this,t),this.isStopped=!1,"object"===(void 0===e?"undefined":(0,o.default)(e))?(this._onNext=e.next,this._onError=e.error,this._onCompleted=e.complete):(this._onNext=e,this._onError=n,this._onCompleted=r)}return t.prototype.next=function(t){!this.isStopped&&this._onNext&&this._onNext(t)},t.prototype.error=function(t){!this.isStopped&&this._onError&&(this.isStopped=!0,this._onError(t))},t.prototype.complete=function(t){!this.isStopped&&this._onCompleted&&(this.isStopped=!0,this._onCompleted(t))},t}(),s=function(){function t(e,n){(0,i.default)(this,t),this.observer=e,this.result=n}return t.prototype.unsubscribe=function(){this.observer.isStopped=!0,this.result()},t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(n(97)),i=r(n(99)),a="function"==typeof i.default&&"symbol"==typeof o.default?function(t){return typeof t}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":typeof t};e.default="function"==typeof i.default&&"symbol"===a(o.default)?function(t){return void 0===t?"undefined":a(t)}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":void 0===t?"undefined":a(t)}},function(t,e,n){t.exports={default:n(98),__esModule:!0}},function(t,e,n){n(41),n(50),t.exports=n(37).f("iterator")},function(t,e,n){t.exports={default:n(100),__esModule:!0}},function(t,e,n){n(101),n(40),n(107),n(108),t.exports=n(1).Symbol},function(t,e,n){"use strict";var r=n(0),o=n(9),i=n(8),a=n(4),s=n(44),u=n(102).KEY,c=n(10),f=n(30),l=n(23),h=n(22),p=n(2),d=n(37),g=n(38),m=n(103),v=n(104),y=n(3),b=n(7),w=n(11),x=n(28),S=n(21),_=n(45),P=n(105),C=n(106),U=n(6),I=n(15),F=C.f,k=U.f,E=P.f,M=r.Symbol,O=r.JSON,T=O&&O.stringify,R=p("_hidden"),A=p("toPrimitive"),L={}.propertyIsEnumerable,D=f("symbol-registry"),j=f("symbols"),B=f("op-symbols"),G=Object.prototype,q="function"==typeof M,N=r.QObject,z=!N||!N.prototype||!N.prototype.findChild,H=i&&c(function(){return 7!=_(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=F(G,e);r&&delete G[e],k(t,e,n),r&&t!==G&&k(G,e,r)}:k,V=function(t){var e=j[t]=_(M.prototype);return e._k=t,e},W=q&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},J=function(t,e,n){return t===G&&J(B,e,n),y(t),e=x(e,!0),y(n),o(j,e)?(n.enumerable?(o(t,R)&&t[R][e]&&(t[R][e]=!1),n=_(n,{enumerable:S(0,!1)})):(o(t,R)||k(t,R,S(1,{})),t[R][e]=!0),H(t,e,n)):k(t,e,n)},X=function(t,e){y(t);for(var n,r=m(e=w(e)),o=0,i=r.length;i>o;)J(t,n=r[o++],e[n]);return t},Y=function(t){var e=L.call(this,t=x(t,!0));return!(this===G&&o(j,t)&&!o(B,t))&&(!(e||!o(this,t)||!o(j,t)||o(this,R)&&this[R][t])||e)},K=function(t,e){if(t=w(t),e=x(e,!0),t!==G||!o(j,e)||o(B,e)){var n=F(t,e);return!n||!o(j,e)||o(t,R)&&t[R][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=E(w(t)),r=[],i=0;n.length>i;)o(j,e=n[i++])||e==R||e==u||r.push(e);return r},Q=function(t){for(var e,n=t===G,r=E(n?B:w(t)),i=[],a=0;r.length>a;)!o(j,e=r[a++])||n&&!o(G,e)||i.push(j[e]);return i};q||(s((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(B,n),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),H(this,t,S(1,n))};return i&&z&&H(G,t,{configurable:!0,set:e}),V(t)}).prototype,"toString",function(){return this._k}),C.f=K,U.f=J,n(57).f=P.f=$,n(24).f=Y,n(35).f=Q,i&&!n(13)&&s(G,"propertyIsEnumerable",Y,!0),d.f=function(t){return V(p(t))}),a(a.G+a.W+a.F*!q,{Symbol:M});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)p(Z[tt++]);for(var et=I(p.store),nt=0;et.length>nt;)g(et[nt++]);a(a.S+a.F*!q,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=M(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in D)if(D[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),a(a.S+a.F*!q,"Object",{create:function(t,e){return void 0===e?_(t):X(_(t),e)},defineProperty:J,defineProperties:X,getOwnPropertyDescriptor:K,getOwnPropertyNames:$,getOwnPropertySymbols:Q}),O&&a(a.S+a.F*(!q||c(function(){var t=M();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!W(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,T.apply(O,r)}}),M.prototype[A]||n(5)(M.prototype,A,M.prototype.valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(22)("meta"),o=n(7),i=n(9),a=n(6).f,s=0,u=Object.isExtensible||function(){return!0},c=!n(10)(function(){return u(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[r].w},onFreeze:function(t){return c&&l.NEED&&u(t)&&!i(t,r)&&f(t),t}}},function(t,e,n){var r=n(15),o=n(35),i=n(24);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,s=n(t),u=i.f,c=0;s.length>c;)u.call(t,a=s[c++])&&e.push(a);return e}},function(t,e,n){var r=n(16);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(11),o=n(57).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(24),o=n(21),i=n(11),a=n(28),s=n(9),u=n(43),c=Object.getOwnPropertyDescriptor;e.f=n(8)?c:function(t,e){if(t=i(t),e=a(e,!0),u)try{return c(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){n(38)("asyncIterator")},function(t,e,n){n(38)("observable")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.StatisticsLogger=void 0;var o=r(n(36)),i=r(n(17)),a=n(12);e.StatisticsLogger=function(){function t(){(0,i.default)(this,t)}return t.prototype.log=function(t,e){var n="";(0,o.default)(t).forEach(function(e){return n+=t[e]+","}),this.send(n,e,0)},t.prototype.send=function(t,e,n){var r=(0,a.createXHR)(),o=this;r.open("POST","https://uplog.qbox.me/log/3"),r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.setRequestHeader("Authorization","UpToken "+e),r.onreadystatechange=function(){4===r.readyState&&200!==r.status&&++n<=3&&o.send(t,e,n)},r.send(t)},t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(n(18)),i=r(n(34)),a=r(n(17)),s=r(n(36)),u=n(111),c=n(12),f={PNG:"image/png",JPEG:"image/jpeg",WEBP:"image/webp",BMP:"image/bmp"},l=Math.log(2),h=(0,s.default)(f).map(function(t){return f[t]}),p=f.JPEG,d=function(){function t(e,n){(0,a.default)(this,t),this.config=(0,i.default)({quality:.92,noCompressIfLarger:!1},n),this.file=e}return t.prototype.process=function(){var t=this;this.outputType=this.file.type;var e={};return function(t){return h.includes(t)}(this.file.type)?this.getOriginImage().then(function(e){return t.getCanvas(e)}).then(function(n){var r=1;return t.config.maxWidth&&(r=Math.min(1,t.config.maxWidth/n.width)),t.config.maxHeight&&(r=Math.min(1,r,t.config.maxHeight/n.height)),e.width=n.width,e.height=n.height,t.doScale(n,r)}).then(function(n){var r=t.toBlob(n);return r.size>t.file.size&&t.config.noCompressIfLarger?{dist:t.file,width:e.width,height:e.height}:{dist:r,width:n.width,height:n.height}}):o.default.reject(new Error("unsupported file type: "+this.file.type))},t.prototype.clear=function(t,e,n){this.outputType===p?(t.fillStyle="#fff",t.fillRect(0,0,e,n)):t.clearRect(0,0,e,n)},t.prototype.getOriginImage=function(){var t=this;return new o.default(function(e,n){var r=(0,c.createObjectURL)(t.file),o=new Image;o.onload=function(){e(o)},o.onerror=function(){n("image load error")},o.src=r})},t.prototype.getCanvas=function(t){var e=this;return new o.default(function(n,r){u.EXIF.getData(t,function(){var r=u.EXIF.getTag(t,"Orientation")||1,o=(0,c.getTransform)(t,r),i=o.width,a=o.height,s=o.matrix,f=document.createElement("canvas"),l=f.getContext("2d");f.width=i,f.height=a,e.clear(l,i,a),l.transform.apply(l,s),l.drawImage(t,0,0),n(f)})})},t.prototype.doScale=function(t,e){if(1===e)return o.default.resolve(t);var n=t.getContext("2d"),r=Math.min(4,Math.ceil(1/e/l)),i=Math.pow(e,1/r),a=document.createElement("canvas"),s=a.getContext("2d"),u=t.width,c=t.height,f=u,h=c;a.width=u,a.height=c;for(var p=void 0,d=void 0,g=0;g<r;g++){var m=u*i|0,v=c*i|0;g===r-1&&(m=f*e,v=h*e),g%2==0?(p=t,d=s):(p=a,d=n),this.clear(d,u,c),d.drawImage(p,0,0,u,c,0,0,m,v),u=m,c=v}var y=p===t?a:t,b=d.getImageData(0,0,u,c);return y.width=u,y.height=c,d.putImageData(b,0,0),o.default.resolve(y)},t.prototype.toBlob=function(t){var e=t.toDataURL(this.outputType,this.config.quality),n=atob(e.split(",")[1]).split("").map(function(t){return t.charCodeAt(0)});return new Blob([new Uint8Array(n)],{type:this.outputType})},t}();e.default=function(t,e){return new d(t,e).process()}},function(t,e,r){var o;(function(){function r(t){return!!t.exifdata}function i(t,e){function n(n){var r=a(n);t.exifdata=r||{};var o=function(t){var e=new DataView(t);if(d&&console.log("Got file of length "+t.byteLength),255!=e.getUint8(0)||216!=e.getUint8(1))return d&&console.log("Not a valid JPEG"),!1;for(var n=2,r=t.byteLength;n<r;){if(function(t,e){return 56===t.getUint8(e)&&66===t.getUint8(e+1)&&73===t.getUint8(e+2)&&77===t.getUint8(e+3)&&4===t.getUint8(e+4)&&4===t.getUint8(e+5)}(e,n)){var o=e.getUint8(n+7);o%2!=0&&(o+=1),0===o&&(o=4);return s(t,n+8+o,e.getUint16(n+6+o))}n++}}(n);if(t.iptcdata=o||{},g.isXmpEnabled){var i=function(t){if("DOMParser"in self){var e=new DataView(t);if(d&&console.log("Got file of length "+t.byteLength),255!=e.getUint8(0)||216!=e.getUint8(1))return d&&console.log("Not a valid JPEG"),!1;for(var n=2,r=t.byteLength,o=new DOMParser;n<r-4;){if("http"==f(e,n,4)){var i=n-1,a=e.getUint16(n-2)-1,s=f(e,i,a),u=s.indexOf("xmpmeta>")+8,c=(s=s.substring(s.indexOf("<x:xmpmeta"),u)).indexOf("x:xmpmeta")+10;s=s.slice(0,c)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+s.slice(c);return p(o.parseFromString(s,"text/xml"))}n++}}}(n);t.xmpdata=i||{}}e&&e.call(t)}if(t.src)if(/^data\:/i.test(t.src))n(function(t,e){e=e||t.match(/^data\:([^\;]+)\;base64,/im)[1]||"",t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(t),r=n.length,o=new ArrayBuffer(r),i=new Uint8Array(o),a=0;a<r;a++)i[a]=n.charCodeAt(a);return o}(t.src));else if(/^blob\:/i.test(t.src))(o=new FileReader).onload=function(t){n(t.target.result)},function(t,e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="blob",n.onload=function(t){200!=this.status&&0!==this.status||e(this.response)},n.send()}(t.src,function(t){o.readAsArrayBuffer(t)});else{var r=new XMLHttpRequest;r.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";n(r.response),r=null},r.open("GET",t.src,!0),r.responseType="arraybuffer",r.send(null)}else if(self.FileReader&&(t instanceof self.Blob||t instanceof self.File)){var o;(o=new FileReader).onload=function(t){d&&console.log("Got file of length "+t.target.result.byteLength),n(t.target.result)},o.readAsArrayBuffer(t)}}function a(t){var e=new DataView(t);if(d&&console.log("Got file of length "+t.byteLength),255!=e.getUint8(0)||216!=e.getUint8(1))return d&&console.log("Not a valid JPEG"),!1;for(var n,r=2,o=t.byteLength;r<o;){if(255!=e.getUint8(r))return d&&console.log("Not a valid marker at offset "+r+", found: "+e.getUint8(r)),!1;if(n=e.getUint8(r+1),d&&console.log(n),225==n)return d&&console.log("Found 0xFFE1 marker"),l(e,r+4,e.getUint16(r+2));r+=2+e.getUint16(r+2)}}function s(t,e,n){for(var r,o,i,a,s=new DataView(t),u={},c=e;c<e+n;)28===s.getUint8(c)&&2===s.getUint8(c+1)&&(a=s.getUint8(c+2))in x&&(i=s.getInt16(c+3),o=x[a],r=f(s,c+5,i),u.hasOwnProperty(o)?u[o]instanceof Array?u[o].push(r):u[o]=[u[o],r]:u[o]=r),c++;return u}function u(t,e,n,r,o){var i,a,s,u=t.getUint16(n,!o),f={};for(s=0;s<u;s++)i=n+12*s+2,!(a=r[t.getUint16(i,!o)])&&d&&console.log("Unknown tag: "+t.getUint16(i,!o)),f[a]=c(t,i,e,n,o);return f}function c(t,e,n,r,o){var i,a,s,u,c,l,h=t.getUint16(e+2,!o),p=t.getUint32(e+4,!o),d=t.getUint32(e+8,!o)+n;switch(h){case 1:case 7:if(1==p)return t.getUint8(e+8,!o);for(i=p>4?d:e+8,a=[],u=0;u<p;u++)a[u]=t.getUint8(i+u);return a;case 2:return f(t,i=p>4?d:e+8,p-1);case 3:if(1==p)return t.getUint16(e+8,!o);for(i=p>2?d:e+8,a=[],u=0;u<p;u++)a[u]=t.getUint16(i+2*u,!o);return a;case 4:if(1==p)return t.getUint32(e+8,!o);for(a=[],u=0;u<p;u++)a[u]=t.getUint32(d+4*u,!o);return a;case 5:if(1==p)return c=t.getUint32(d,!o),l=t.getUint32(d+4,!o),(s=new Number(c/l)).numerator=c,s.denominator=l,s;for(a=[],u=0;u<p;u++)c=t.getUint32(d+8*u,!o),l=t.getUint32(d+4+8*u,!o),a[u]=new Number(c/l),a[u].numerator=c,a[u].denominator=l;return a;case 9:if(1==p)return t.getInt32(e+8,!o);for(a=[],u=0;u<p;u++)a[u]=t.getInt32(d+4*u,!o);return a;case 10:if(1==p)return t.getInt32(d,!o)/t.getInt32(d+4,!o);for(a=[],u=0;u<p;u++)a[u]=t.getInt32(d+8*u,!o)/t.getInt32(d+4+8*u,!o);return a}}function f(t,e,r){var o="";for(n=e;n<e+r;n++)o+=String.fromCharCode(t.getUint8(n));return o}function l(t,e){if("Exif"!=f(t,e,4))return d&&console.log("Not valid EXIF data! "+f(t,e,4)),!1;var n,r,o,i,a,s=e+6;if(18761==t.getUint16(s))n=!1;else{if(19789!=t.getUint16(s))return d&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=t.getUint16(s+2,!n))return d&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var c=t.getUint32(s+4,!n);if(c<8)return d&&console.log("Not valid TIFF data! (First offset less than 8)",t.getUint32(s+4,!n)),!1;if((r=u(t,s,s+c,v,n)).ExifIFDPointer)for(o in i=u(t,s,s+r.ExifIFDPointer,m,n)){switch(o){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":i[o]=w[o][i[o]];break;case"ExifVersion":case"FlashpixVersion":i[o]=String.fromCharCode(i[o][0],i[o][1],i[o][2],i[o][3]);break;case"ComponentsConfiguration":i[o]=w.Components[i[o][0]]+w.Components[i[o][1]]+w.Components[i[o][2]]+w.Components[i[o][3]]}r[o]=i[o]}if(r.GPSInfoIFDPointer)for(o in a=u(t,s,s+r.GPSInfoIFDPointer,y,n)){switch(o){case"GPSVersionID":a[o]=a[o][0]+"."+a[o][1]+"."+a[o][2]+"."+a[o][3]}r[o]=a[o]}return r.thumbnail=function(t,e,n,r){var o=function(t,e,n){var r=t.getUint16(e,!n);return t.getUint32(e+2+12*r,!n)}(t,e+n,r);if(!o)return{};if(o>t.byteLength)return{};var i=u(t,e,e+o,b,r);if(i.Compression)switch(i.Compression){case 6:if(i.JpegIFOffset&&i.JpegIFByteCount){var a=e+i.JpegIFOffset,s=i.JpegIFByteCount;i.blob=new Blob([new Uint8Array(t.buffer,a,s)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",i.Compression)}else 2==i.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return i}(t,s,c,n),r}function h(t){var e={};if(1==t.nodeType){if(t.attributes.length>0){e["@attributes"]={};for(var n=0;n<t.attributes.length;n++){var r=t.attributes.item(n);e["@attributes"][r.nodeName]=r.nodeValue}}}else if(3==t.nodeType)return t.nodeValue;if(t.hasChildNodes())for(var o=0;o<t.childNodes.length;o++){var i=t.childNodes.item(o),a=i.nodeName;if(null==e[a])e[a]=h(i);else{if(null==e[a].push){var s=e[a];e[a]=[],e[a].push(s)}e[a].push(h(i))}}return e}function p(t){try{var e={};if(t.children.length>0)for(var n=0;n<t.children.length;n++){var r=t.children.item(n),o=r.attributes;for(var i in o){var a=o[i],s=a.nodeName,u=a.nodeValue;void 0!==s&&(e[s]=u)}var c=r.nodeName;if(void 0===e[c])e[c]=h(r);else{if(void 0===e[c].push){var f=e[c];e[c]=[],e[c].push(f)}e[c].push(h(r))}}else e=t.textContent;return e}catch(t){console.log(t.message)}}var d=!1,g=function(t){return t instanceof g?t:this instanceof g?void(this.EXIFwrapped=t):new g(t)};void 0!==t&&t.exports&&(e=t.exports=g),e.EXIF=g;var m=g.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},v=g.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},y=g.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},b=g.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},w=g.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},x={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};g.enableXmp=function(){g.isXmpEnabled=!0},g.disableXmp=function(){g.isXmpEnabled=!1},g.getData=function(t,e){return!((self.Image&&t instanceof self.Image||self.HTMLImageElement&&t instanceof self.HTMLImageElement)&&!t.complete||(r(t)?e&&e.call(t):i(t,e),0))},g.getTag=function(t,e){if(r(t))return t.exifdata[e]},g.getIptcTag=function(t,e){if(r(t))return t.iptcdata[e]},g.getAllTags=function(t){if(!r(t))return{};var e,n=t.exifdata,o={};for(e in n)n.hasOwnProperty(e)&&(o[e]=n[e]);return o},g.getAllIptcTags=function(t){if(!r(t))return{};var e,n=t.iptcdata,o={};for(e in n)n.hasOwnProperty(e)&&(o[e]=n[e]);return o},g.pretty=function(t){if(!r(t))return"";var e,n=t.exifdata,o="";for(e in n)n.hasOwnProperty(e)&&("object"==typeof n[e]?n[e]instanceof Number?o+=e+" : "+n[e]+" ["+n[e].numerator+"/"+n[e].denominator+"]\r\n":o+=e+" : ["+n[e].length+" values]\r\n":o+=e+" : "+n[e]+"\r\n");return o},g.readFromBinaryFile=function(t){return a(t)},void 0===(o=function(){return g}.apply(e,[]))||(t.exports=o)}).call(this)}])});
//# sourceMappingURL=qiniu.min.js.map

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/css/admin.css":
/*!***************************!*\
  !*** ./src/css/admin.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./admin.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/admin.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/js/av.js":
/*!**********************!*\
  !*** ./src/js/av.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leancloud-storage */ "./node_modules/leancloud-storage/dist/av-min.js");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_0__);

var APP_ID = "d507wFUhgIfcRaj53LLKIttz-gzGzoHsz";
var APP_KEY = "y2L8kW7ejwEVt5jxA2sL1OCo";
leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.init({
  appId: APP_ID,
  appKey: APP_KEY
});

/***/ }),

/***/ "./src/js/event-hub.js":
/*!*****************************!*\
  !*** ./src/js/event-hub.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  events: {},
  emit: function emit(eventName, data) {
    //发布
    for (var key in this.events) {
      if (key === eventName) {
        var fnList = this.events[key];
        fnList.map(function (fn) {
          fn.call(undefined, data);
        });
      }
    }
  },
  on: function on(eventName, fn) {
    //订阅
    if (this.events[eventName] === undefined) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(fn);
  }
});

/***/ }),

/***/ "./src/page/admin/admin.js":
/*!*********************************!*\
  !*** ./src/page/admin/admin.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_admin_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css/admin.css */ "./src/css/admin.css");
/* harmony import */ var css_admin_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_admin_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _new_song_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-song.js */ "./src/page/admin/new-song.js");
/* harmony import */ var _song_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./song-form.js */ "./src/page/admin/song-form.js");
/* harmony import */ var _song_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./song-list */ "./src/page/admin/song-list.js");
/* harmony import */ var _upload_song_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload-song.js */ "./src/page/admin/upload-song.js");





_new_song_js__WEBPACK_IMPORTED_MODULE_1__["default"].controller.init(_new_song_js__WEBPACK_IMPORTED_MODULE_1__["default"].view, _new_song_js__WEBPACK_IMPORTED_MODULE_1__["default"].model);
_song_form_js__WEBPACK_IMPORTED_MODULE_2__["default"].controller.init(_song_form_js__WEBPACK_IMPORTED_MODULE_2__["default"].view, _song_form_js__WEBPACK_IMPORTED_MODULE_2__["default"].model);
_song_list__WEBPACK_IMPORTED_MODULE_3__["default"].controller.init(_song_list__WEBPACK_IMPORTED_MODULE_3__["default"].view, _song_list__WEBPACK_IMPORTED_MODULE_3__["default"].model);
_upload_song_js__WEBPACK_IMPORTED_MODULE_4__["default"].controller.init(_upload_song_js__WEBPACK_IMPORTED_MODULE_4__["default"].view, _upload_song_js__WEBPACK_IMPORTED_MODULE_4__["default"].model);

/***/ }),

/***/ "./src/page/admin/new-song.js":
/*!************************************!*\
  !*** ./src/page/admin/new-song.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js/event-hub.js */ "./src/js/event-hub.js");

var view = {
  el: ".newSong",
  template: "\n        \u65B0\u5EFA\u6B4C\u66F2\n        ",
  render: function render(data) {
    $(this.el).html(this.template);
  }
};
var model = {};
var controller = {
  init: function init(view, model) {
    var _this = this;

    this.view = view;
    this.model = model;
    this.view.render(this.model.data);
    this.active();
    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("new", function (data) {
      _this.active();
    });
    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("select", function (data) {
      _this.deactive();
    });
    $(this.view.el).on("click", function () {
      js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("new");
      js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("addMode");
    });
  },
  active: function active() {
    $(this.view.el).addClass("active");
  },
  deactive: function deactive() {
    $(this.view.el).removeClass("active");
  }
}; //controller.init(view, model);

/* harmony default export */ __webpack_exports__["default"] = ({
  view: view,
  model: model,
  controller: controller
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/page/admin/song-form.js":
/*!*************************************!*\
  !*** ./src/page/admin/song-form.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js/event-hub.js */ "./src/js/event-hub.js");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leancloud-storage */ "./node_modules/leancloud-storage/dist/av-min.js");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_av_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js/av.js */ "./src/js/av.js");


 //初始AV

var view = {
  el: ".page>main>.songMessage",
  init: function init() {
    this.$el = $(this.el);
  },
  template: "\n            <form class=\"form\">\n                <div class=\"row\">\n                    <label>\u6B4C\u540D</label>\n                     <input name=\"name\" type=\"text\" value=\"__name__\">\n                </div>\n                <div class=\"row\">\n                    <label>\u6B4C\u624B</label>\n                    <input name=\"singer\" type=\"text\" value=\"__singer__\">\n                </div>\n                <div class=\"row\">\n                    <label>\u5916\u94FE</label>\n                    <input name=\"url\" type=\"text\" value=\"__url__\">\n                </div>\n                <div class=\"row\">\n                    <label>\u5C01\u9762</label>\n                    <input name=\"cover\" type=\"text\" value=\"__cover__\">\n                </div>\n                <div class=\"row\">\n                    <label class=\"lyric\">\u6B4C\u8BCD</label>\n                    <textarea name=\"lyrics\" rows=\"20\" cols=\"50\">__lyrics__</textarea>\n                </div>\n                <div class=\"row actions\">\n                    <button type=\"submit\">\u4FDD\u5B58</button>\n                </div>\n            </form>\n            <p class=\"message\"></p>\n            ",
  render: function render() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    //ES6语法，如果data为空或者undefined,那么data就是空对象
    var placeholders = ["name", "url", "singer", "id", "cover", "lyrics"];
    var html = this.template;
    placeholders.map(function (string) {
      html = html.replace("__".concat(string, "__"), data[string] || "");
    });
    this.$el.html(html);

    if (data.cover) {
      this.$el.prepend("<img class=\"cover\" src=\"".concat(data.cover, "\" style=\"display:block\">"));
    }

    if (data.id) {
      this.$el.prepend("<h3>编辑歌曲</h3>");
    } else {
      this.$el.prepend("<h3>新建歌曲</h3>");
    }
  },
  reset: function reset() {
    this.render({});
  }
};
var model = {
  data: {
    name: "",
    singer: "",
    url: "",
    id: "",
    cover: "",
    lyrics: ""
  },
  create: function create(data) {
    var _this = this;

    var Song = leancloud_storage__WEBPACK_IMPORTED_MODULE_1___default.a.Object.extend("Song");
    var song = new Song();
    song.set("name", data.name);
    song.set("singer", data.singer);
    song.set("lyrics", data.lyrics);
    song.set("url", data.url);
    song.set("cover", data.cover);
    return song.save().then(function (newSong) {
      var id = newSong.id,
          attributes = newSong.attributes; // this.data.id=id
      // this.data.name=attributes.name
      // this.data.singer=attributes.url

      Object.assign(_this.data, {
        id: id,
        //...attributes,
        name: attributes.name,
        singer: attributes.singer,
        lyrics: attributes.lyrics,
        url: attributes.url,
        cover: attributes.cover
      });
    }, function (error) {
      console.error(error);
    });
  },
  update: function update(data) {
    var _this2 = this;

    var song = leancloud_storage__WEBPACK_IMPORTED_MODULE_1___default.a.Object.createWithoutData("Song", this.data.id);
    song.set("name", data.name);
    song.set("singer", data.singer);
    song.set("lyrics", data.lyrics);
    song.set("url", data.url);
    song.set("cover", data.cover);
    return song.save().then(function (response) {
      Object.assign(_this2.data, data);
      return response;
    });
  }
};
var controller = {
  init: function init(view, model) {
    var _this3 = this;

    this.view = view;
    this.view.init();
    this.model = model;
    this.view.render(this.model.data);
    this.bindEvents();
    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("select", function (data) {
      _this3.model.data = data;

      _this3.view.render(_this3.model.data);
    });
    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("new", function (data) {
      if (_this3.model.data.id) {
        _this3.model.data = {
          name: "",
          url: "",
          singer: "",
          id: "",
          lyrics: ""
        };
      } else {
        Object.assign(_this3.model.data, data);
      }

      _this3.view.render(_this3.model.data);
    });
  },
  create: function create() {
    var _this4 = this;

    var needs = "name singer url cover lyrics".split(" ");
    var data = {};
    needs.map(function (string) {
      data[string] = _this4.view.$el.find("[name=\"".concat(string, "\"]")).val();
    });
    this.model.create(data).then(function () {
      _this4.view.reset();

      var string = JSON.stringify(_this4.model.data);
      var object = JSON.parse(string);
      js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("create", object);
      $(_this4.view.el).find(".message").text("保存成功").fadeIn(500).fadeOut(500);
    });
  },
  update: function update() {
    var _this5 = this;

    var needs = "name singer url cover lyrics".split(" ");
    var data = {};
    needs.map(function (string) {
      data[string] = _this5.view.$el.find("[name=\"".concat(string, "\"]")).val();
    });
    this.model.update(data).then(function () {
      js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("update", JSON.parse(JSON.stringify(_this5.model.data)));
      $(_this5.view.el).find(".message").text("更新成功").fadeIn(500).fadeOut(500);
    });
  },
  bindEvents: function bindEvents() {
    var _this6 = this;

    //事件委托
    this.view.$el.on("submit", "form", function (e) {
      e.preventDefault();
      var songData = [];

      for (var i = 0; i < 4; i++) {
        songData.push($(_this6.view.el).find("input").eq(i).val());
      }

      songData.push($(_this6.view.el).find("textarea").val());
      var isReady = songData.every(function (item) {
        return item;
      });
      if (!isReady) return; //判断歌曲信息是否已经填写完成

      if (_this6.model.data.id) {
        _this6.update();
      } else {
        _this6.create();
      }
    });
    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("setCoverUrl", function (url) {
      _this6.view.$el.find('input[name="cover"]').val(url);

      _this6.view.$el.prepend("<img class=\"cover\" src=\"".concat(url, "\">"));
    });
    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("setSongUrl", function (url) {
      _this6.view.$el.find('input[name="url"]').val(url);
    });
    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("editMode", function () {
      _this6.view.$el.find("textarea").css({
        height: "235px"
      });
    });
  }
}; //controller.init(view, model);

/* harmony default export */ __webpack_exports__["default"] = ({
  view: view,
  model: model,
  controller: controller
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/page/admin/song-list.js":
/*!*************************************!*\
  !*** ./src/page/admin/song-list.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js/event-hub.js */ "./src/js/event-hub.js");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leancloud-storage */ "./node_modules/leancloud-storage/dist/av-min.js");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_av_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js/av.js */ "./src/js/av.js");


 //初始AV

var view = {
  el: "#songList-containner",
  template: "\n                 <ul class=\"songList\">   \n                </ul>",
  render: function render(data) {
    var $el = $(this.el);
    $el.html(this.template);
    var songs = data.songs,
        selectSongId = data.selectSongId;
    var liList = songs.map(function (song) {
      var $li = $("<li></li>").text(song.name).attr("data-song-id", song.id);

      if (song.id === selectSongId) {
        $li.addClass("active");
      }

      return $li;
    });
    $el.find("ul").empty();
    liList.map(function (domLi) {
      $el.find("ul").append(domLi);
    });
  },
  clearActive: function clearActive() {
    $(this.el).find(".active").removeClass("active");
  }
};
var model = {
  data: {
    songs: [],
    selectSongId: undefined
  },
  find: function find() {
    var _this = this;

    var query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_1___default.a.Query("Song");
    return query.find().then(function (songs) {
      _this.data.songs = songs.map(function (song) {
        //return {id:song.id,...song.attributes}
        return {
          id: song.id,
          cover: song.attributes.cover,
          lyrics: song.attributes.lyrics,
          name: song.attributes.name,
          url: song.attributes.url,
          singer: song.attributes.singer
        };
      });
      return songs;
    });
  }
};
var controller = {
  init: function init(view, model) {
    this.view = view;
    this.model = model;
    this.model.find();
    this.view.render(this.model.data);
    this.bindEvents();
    this.bindEventHub();
    this.getAllSongs();
  },
  getAllSongs: function getAllSongs() {
    var _this2 = this;

    return this.model.find().then(function () {
      _this2.view.render(_this2.model.data);
    });
  },
  bindEvents: function bindEvents() {
    var _this3 = this;

    $(this.view.el).on("click", "li", function (e) {
      var songId = e.currentTarget.getAttribute("data-song-id");
      _this3.model.data.selectSongId = songId;

      _this3.view.render(_this3.model.data);

      var data;
      var songs = _this3.model.data.songs;

      for (var i = 0; i < songs.length; i++) {
        if (songs[i].id === songId) {
          data = songs[i];
          break;
        }
      }

      js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("select", JSON.parse(JSON.stringify(data)));
      js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("editMode");
    });
  },
  bindEventHub: function bindEventHub() {
    var _this4 = this;

    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("create", function (songData) {
      _this4.model.data.songs.push(songData);

      _this4.view.render(_this4.model.data);

      $(_this4.view.el).find("li").removeClass("active");
    });
    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("new", function () {
      _this4.view.clearActive();
    });
    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("uploading", function () {
      $(_this4.view.el).siblings(".uploadMask").css({
        display: "block"
      });
    });
    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("uploadDone", function () {
      $(_this4.view.el).siblings(".uploadMask").css({
        display: "none"
      });
    });
    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("update", function (song) {
      var songs = _this4.model.data.songs;

      for (var i = 0; i < songs.length; i++) {
        if (songs[i].id === song.id) {
          Object.assign(songs[i], song);
        }
      }

      _this4.view.render(_this4.model.data);
    });
  }
}; //controller.init(view, model);

/* harmony default export */ __webpack_exports__["default"] = ({
  view: view,
  model: model,
  controller: controller
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/page/admin/upload-song.js":
/*!***************************************!*\
  !*** ./src/page/admin/upload-song.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js/event-hub.js */ "./src/js/event-hub.js");
/* harmony import */ var qiniu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qiniu-js */ "./node_modules/qiniu-js/dist/qiniu.min.js");
/* harmony import */ var qiniu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qiniu_js__WEBPACK_IMPORTED_MODULE_1__);


var view = {
  el: "main>.uploadArea",
  template: " \n            <div class=\"selectCover\">\n                <div class=\"addBtn\">\n                    <svg class=\"icon\" aria-hidden=\"true\">\n                        <use xlink:href=\"#icon-img\"></use>\n                    </svg>\n                    <div class=\"\">\u6DFB\u52A0\u5C01\u9762</div>                  \n                </div>\n                <div class=\"uploadBar\">\n                    <div class=\"progress\"></div>\n                </div>\n                <input type=\"file\" accept=\"image/jpg, image/png, image/jpeg, image/gif\">\n            </div>\n            <div class=\"selectSong\">\n                <div class=\"addBtn\">\n                    <svg class=\"icon\" aria-hidden=\"true\">\n                        <use xlink:href=\"#icon-music\"></use>\n                    </svg>\n                    <div>\u6DFB\u52A0\u6B4C\u66F2</div>\n                </div>\n                <div class=\"uploadBar\">\n                <div class=\"progress\"></div>\n            </div>\n                <input type=\"file\"  accept=\"audio/mp3\">\n            </div>\n            <div class=\"uploadBtn\">\n                <svg class=\"icon\" aria-hidden=\"true\">\n                    <use xlink:href=\"#icon-upload\"></use>\n                </svg>\n                <div class=\"action\">\u70B9\u51FB\u4E0A\u4F20</div>\n            </div>\n            <!--<p>\u70B9\u51FB\u6DFB\u52A0\u6309\u94AE\u6216\u62D6\u66F3\u6587\u4EF6\u5230\u6B64\u5904\uFF08\u6587\u4EF6\u5927\u5C0F\u6700\u597D\u4E0D\u8981\u8D85\u8FC740MB\uFF09</p>-->",
  render: function render() {
    var $el = $(this.el);
    $el.html(this.template);
  },
  find: function find(selector) {
    return $(this.el).find(selector)[0];
  }
};
var model = {
  data: {
    status: "open"
  }
};
var controller = {
  init: function init(view, model) {
    this.view = view;
    this.model = model;
    this.view.render();
    this.bindEvents();
  },
  bindEvents: function bindEvents() {
    //添加封面文件和歌曲文件
    var self = this;
    $(self.view.el).find("uploadBtn").css({
      border: "1px solid red"
    });
    $(this.view.el).find("input").on("click", function (e) {
      $(this).unbind("change").bind("change", function () {
        self.files = $(this)[0].files[0];

        if (self.files) {
          $(this).prev().addClass("ready");
        }
      });
    });
    $(this.view.el).find(".uploadBtn").on("click", function () {
      self.uploadFiles();
      js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("uploading");
    });
    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("editMode", function () {
      $(self.view.el).css({
        display: "none"
      });
    });
    js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("addMode", function () {
      $(self.view.el).css({
        display: "flex"
      });
    });
  },
  uploadFiles: function uploadFiles() {
    //向服务器获取token
    var self = this;
    $.ajax({
      url: "http://www.jenvyxu.xyz:4000/uptoken",
      success: function success(res) {
        var token = JSON.parse(res).uptoken;
        var domain = JSON.parse(res).domain;
        var config = {
          useCdnDomain: true,
          disableStatisticsReport: false,
          retryCount: 6,
          region: qiniu_js__WEBPACK_IMPORTED_MODULE_1__["region"].z2
        };
        var putExtra = {
          fname: "",
          params: {},
          mimeType: null
        };
        self.uploadWithQiniu(token, putExtra, config, domain);
      }
    });
  },
  uploadWithQiniu: function uploadWithQiniu(token, putExtra, config, domain) {
    var self = this;

    var error = function error(res) {};

    var songUrl;
    var coverUrl;
    var coverFile = $(this.view.el).find("input[type=file]")[0].files[0];
    var songFile = $(this.view.el).find("input[type=file]")[1].files[0];

    if (songFile) {
      var key = songFile.name;

      var next = function next(res) {
        var total = res.total;
        $(self.view.el).find(".progress").eq(1).css({
          width: total.percent + "%"
        });
      };

      var complete = function complete(res) {
        setTimeout(function () {
          $(self.view.el).find(".progress").eq(1).css({
            width: 0
          });
          $(self.view.el).find(".uploadBar").eq(1).removeClass("ready");
        }, 500);
        songUrl = encodeURI("http://".concat(domain, "/").concat(key));
        js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("setSongUrl", songUrl);
        js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("uploadDone");
      };

      var subObject = {
        next: next,
        error: error,
        complete: complete
      };
      var observable = qiniu_js__WEBPACK_IMPORTED_MODULE_1__["upload"](songFile, key, token, putExtra, config);
      var subscription = observable.subscribe(subObject);
    }

    if (coverFile) {
      var _key = coverFile.name;

      var _next = function _next(res) {
        var total = res.total;
        $(self.view.el).find(".progress").eq(0).css({
          width: total.percent + "%"
        });
      };

      var _complete = function _complete(res) {
        setTimeout(function () {
          $(self.view.el).find(".progress").eq(0).css({
            width: 0
          });
          $(self.view.el).find(".uploadBar").eq(0).removeClass("ready");
        }, 500);
        coverUrl = encodeURI("http://".concat(domain, "/").concat(_key));
        js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("setCoverUrl", coverUrl);
        js_event_hub_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("uploadDone");
      };

      var _subObject = {
        next: _next,
        error: error,
        complete: _complete
      };

      var _observable = qiniu_js__WEBPACK_IMPORTED_MODULE_1__["upload"](coverFile, _key, token, putExtra, config);

      var _subscription = _observable.subscribe(_subObject);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  view: view,
  model: model,
  controller: controller
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });