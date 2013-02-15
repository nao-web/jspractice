var myobj = {
	myprop: 1,
	getProp: function () {
		return this.myprop;
		}
	};
console.log(myobj.myprop); 
console.log(myobj.getProp());

function Gadget() {
	this.name = 'iPod';
	this.stretch = function () {
		return 'iPad';
	};
}

var toy = new Gadget();
console.log(toy.name);
console.log(toy.stretch());

// 5.3.1

function Gadget() {
	var name = 'iPod';
	this.getName = function () {
		return name;
	};
}
var toy = new Gadget();
console.log(toy.name); // undefined
console.log(toy.getName()); // "iPod"

function Gadget() {
	var specs = {
		screen_width: 320,
		screen_height: 480,
		color: "white"
	};

	this.getSpecs = function () {
		return specs;
	};
}

var toy = new Gadget(),
	specs = toy.getSpecs();

specs.color = "black";
specs.price = "free";

console.dir(toy.getSpecs());

// 5.3.4

var myobj;
(function () {
	var name = "my, oh my";
	
	myobj = {
		getName: function () {
			return name;
		}
	}; 
}());

myobj.getName();	// "my, oh my"

var myobj = (function () {
	var name = "my, oh my";
	
	return {
		getName: function () {
			return name;
		}
	};
}());
myobj.getName(); // "my, oh my"

// 5.3.5

function Gadget() {
	var name = 'iPod';
	this.getName = function () {
		return name;
	};
}
Gadget.prototype = (function () {
	var browser = "Mobile Webkit";
	return {
		getBrowser: function () {
￼			return browser;
		}
	};
}());

var toy = new Gadget();
console.log(toy.getName());
console.log(toy.getBrowser());

// 5.3.6

var myarray;

(function () {

	var astr = "[object Array]",
		toString = Object.prototype.toString;
	function isArray(a) {
		return toString.call(a) === astr;
	}
	
	function indexOf(haystack, needle) {
		var i = 0,
			max = haystack.length;
		for (; i < max; i += 1) {
			if (haystack[i] === needle) {
				return i;
			}
		}
		return -1;
	}

	myarray = {
		isArray: isArray,
		indexOf: indexOf,
		inArray: indexOf
	};

}());

myarray.isArray([1,2]); // true
myarray.isArray({0: 1}); // false
myarray.indexOf(["a", "b", "z"], "z"); // 2
myarray.inArray(["a", "b", "z"], "z"); // 2

myarray.indexOf = null;
myarray.inArray(["a", "b", "z"], "z"); // 2