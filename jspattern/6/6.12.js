notmyobj.dostuff.call(myobj, param1, p2, p3);

notmyobj.doStuff.apply(myobj, [param1, p2, p3]);

// 6.12.1

function f() {
	var args = [].slice.call(arguments, 1, 3);
	return arugs;
}

f(1, 2, 3, 4, 5, 6);

// 6.12.2

var one = {
	name: "object",
	say: function (greet) {
		return greet + ", " + this.name;
	}
};

one.say('h1');

var two = {
	name: "another object"
};

var say = one.say;
say('hoho');

var yetanother = {
	name: "Yet another object",
	method: function (callback) {
		return callback('Hola');
	}
};
yetanother.method(one.say);

function bind(o, m) {
	return function () {
		return m.apply(o, [].slice.call(arguments));
	};
}

var twosay = bind(two, one.say);
twosay('yo');

var newFunc = obj,someFunc.bind(myobj, 1, 2, 3);

if (typeof Function.prototype.bind === "undefined") {
	Function.prototype.bind = function (thisArg) {
		var fn = this,
			slice = Array.prototype.slice,
			args = slice.call(arguments, 1);

		return function () {
			return fn.apply(thisArg, args.concat(slice.call(arguments)));
		};
	};
}

var twosay2 = one.say.bind(two);
twosay2('Bonjour');

var twosay3 = one.say.bind(two, 'Enchante');
twosay3();