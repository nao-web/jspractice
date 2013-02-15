// 4.10.1

var sayHi = function (who) {
	return "Hello" + (who ? ", " + who : "") + "!"; 
};

sayHi(); // "Hello"
sayHi('world'); // "Hello, world!"
sayHi.apply(null, ["hello"]); // "Hello, hello!"

var alien = {
	sayHi: function (who) {
		return "Hello" + (who ? ", " + who : "") + "!"; 
	}
};
alien.sayHi('world'); // "Hello, world!"
alien.sayHi.apply(alien, ["humans"]); // "Hello, humans!"

sayHi.apply(alien, ["humans"]); // "Hello, humans!"
sayHi.call(alien, "humans"); // "Hello, humans!"

// 4.10.2

function add(x, y) {
	return x + y;
}

add(5, 4);
function add(5, y) {
	return 5 + y;
}
function add(5, 4) {
	return 5 + 4;
}

var add = function (x, y) {
	return x + y;
};

add.apply(null, [5, 4]); // 9

var newadd = add.partialApply(null, [5]);
newadd.apply(null, [4]); // 9

// 4.10.3
function add(x, y) {
	var oldx = x, oldy = y;
	if (typeof oldy === "undefined") {
		return function (newy) {
			return oldx + newy;
		};
	}
	return x + y;
}
typeof add(5); // "function"
add(3)(4); // 7

var add2000 = add(2000);
add2000(10); // 2010

function add(x, y) {
if (typeof y === "undefined") { 
	return function (y) {
		return x + y;
		};
	}
	return x + y;
}

function schonfinkelize(fn) {
var slice = Array.prototype.slice,
stored_args = slice.call(arguments, 1); return function () {
var new_args = slice.call(arguments), args = stored_args.concat(new_args);
return fn.apply(null, args); };
}

function add(x, y) {
	return x + y;
}
var newadd = schonfinkelize(add, 5);
newadd(4); // 9
schonfinkelize(add, 6)(7); // 13

function add(a, b, c, d, e) {
return a + b + c + d + e; }
schonfinkelize(add, 1, 2, 3)(5, 5); // 16

var addOne = schonfinkelize(add, 1);
addOne(10, 10, 10, 10); // 41
var addSix = schonfinkelize(addOne, 2, 3);
addSix(5, 5); // 16


