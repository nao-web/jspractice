var add1 = add.curry(1);
document.writeln(add1(6));	//7

Function.method('curry', function () {
	var args = arguments, that = this;
	return function () {
		return that.apply(null, args.concat(arguments));
	};
});	//何かが間違えてる・・・


Function.method('curry', function() {
	var slice = Array.prototype.slide,
		args = slide.apply(arguments),
		that = this;
	return function () {
		return that.apply(null, args.concat(slice.apply(arguments)));
	};
});