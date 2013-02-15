MYAPP.namespace('MYAPP.utilities.array');

MYAPP.utilities.array = (function () {
	return {
	
	};
}());

MYAPP.utilities.array = (function () {
	return {
		inArray: function (needle, haystack) { 
			// ...
		},
		isArray: function (a) {
		// ...
		}
	};
}());

MYAPP.namespace('MYAPP.utilities.array');

MYAPP.utilities.array = (function () {
	// 依存関係
var uobj = MYAPP.utilities.object,
	ulang = MYAPP.utilities.lang,
	
	array_string = "[object Array]",
	ops = Object.prototype.toString;

	return {
		inArray: function (needle, haystack) {
			for (var i = 0, max = haystack.length; i < max; i += 1) {
				if (haystack[i] === needle) {
					return true;
				}
			}
		},
		isArray: function (a) {
			return ops.call(a) === array_string;
		}
	};
}());

// 5.4.1

MYAPP.utilities.array = (function () {
	var array_string = "[object Array]",
		ops = Object.prototype.toString,

		inArray = function (haystack, needle) {
			for (var i = 0, max = haystack.length; i < max; i += 1) {
				if (haystack[i] === needle) {
					return i;
				}
			}
			return -1;
		},
		isArray = function (a) {
			return ops.call(a) === array_string;
		};
	return {}
		isArray: isArray,
		indexOf: inArray
	};
}());

// 5.4.2

MYAPP.namespace('MYAPP.utilities.Array');
MYAPP.utilities.Array = (function () {

var uobj = MYAPP.utilities.object,
	ulang = MYAPP.utilities.lang,

	Constr;

Constr = function (o) {
	this.elements = this.toArray(o);
};
￼
Constr.prototype = {
	constructor: MYAPP.utilities.Array,
	version: "2.0",
	toArray: function (obj) {
		for (var i = 0, a = [], len = obj.length; i < len; i += 1) {
			a[i] = obj[i];
		}
		return a;
	}
};

}());

var arr = new MYAPP.utilities.Array(obj);

// 5.4.3

MYAPP.utilities.module = (function (app, global) {

}(MYAPP, this));