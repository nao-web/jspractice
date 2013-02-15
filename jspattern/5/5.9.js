var Person = function (name) {
	this.name = name;
}.
	method('getName', function () {
		return this.name	
	}).
	method('setName', function (name) {
		this.name = name;
		return this;
	});

var a = new Person('Adam');
a.getName();
a.setName('Eve').getName();

if (typeof Function.prototype.method !== "function") {
	Function.prototype.method = function (name, implementation) {
		this.prototype[name] = implementation;
		return this;
	};
}