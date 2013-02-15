var myFunc = function (param) {
	if (!myFunc.cache[param]) {
		var result = {};

		myFunc.cache[param] = result;
	}
	return myFunc.cache[param];
};

myFunc.cache = {};

var myFunc = function () {
	var cachekey = JSON.stringify(Array.prototype.slice.call(argments)),
		result;
	if (!myFunc.cache[cachekey]) {
		result = {};

		myFunc.cache[cachekey] = result;
	}
	return myFunc.cache[cachekey];
};

myFunc.cache = {};

var myFunc = function (param) {
	var f = argments.callee,
	result;

	if (!f,cache[param]) {
		result = {};
		f.cache[param] = result;
	}
	return f.cache[param];
};

myFunc.cache = {};