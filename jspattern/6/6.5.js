function Child(a, b, c, d) {
	Parent.apply(this, arguments);
}
Child.prototype = new Parent();

function Parent(name) {
	this.name = name || 'Adam';
}

Parent.prototype.say = function () {
	return this.name;
}

function Child(name) {
	Parent.apply(this, arguments);
}
Child.prototype = new Parent();

var kid = new Child("Patrick");
kid.name;
kid.say();
delete kid.name;
kid.say();