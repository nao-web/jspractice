var parent = {
	name: "Papa"
};

var child = object(parent);
alert(child.name);

function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

// 6.9.1

function Person() {
	this.name = "Adam";
}

Person.prototype.getName = function () {
	return this.name;
};

var papa = new Person();

var kid = object(papa);

kid.getName();

function Person() {
	this.name = "Adam";
}
Person.prototype.getName = function () {
	return this.name;
};

var kid = object(Person.prototype);

typeof kid.getName;
typeof kid.name;

// 6.9.2

var child = Object.create(parent);

var child = Object.create(parent, {
	age: { value: 2 }
});

child.hasOwnProperty("age");

YUI().use('*', function (Y) {
	var child = Y.Object(parent);
});