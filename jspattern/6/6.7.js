function inherit(C, P) {
	var F = function () {};
	F.prototype = P.prototype;
	C.prototype = new F();
}

// 6.7.1

function inherit(C, P) {
	var F = function () {};
	F.prototype = P.prototype;
	C.prototype = new F();
	C.uber = P.prototype;
}

// 6.7.2

function Parent() {}
function Child() {}
inherit(Child, Parent);

var kid = new Child();
kid.constructor.name;
kid.constructor === Parent;

function inherit(C, P) {
	var F = function () {};
	F.prototype = P.prototype;
	C.prototype = new F();
	C.uber = P.prototype;
	C.prototype.constructor = C;
}

var inherit = (function () {
	var F = function () {};
	return function (C, P) {
		F.prototype = P.prototype;
		C.prototype = new F();
		C.uber = P.prototype;
		C.prototype.constructor = C;
	}
}());