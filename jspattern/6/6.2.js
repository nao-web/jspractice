function Parent (name) {
	this.name = name || 'Adam';
}

Parent.prototype.say = function () {
	return this.name;
};

function Child(name) {}

inherit(Child, Parent);