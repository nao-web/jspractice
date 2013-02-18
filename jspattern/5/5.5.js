// 5.5.1

new Sandbox (function (box) {
	// ...
});

Sandbox(['ajax', 'event'], function (box) {
	// console.log(box);
});

Sandbox('ajax', 'dom', function (box) {
	// console.log(box);
});

Sandbox('*', function (box) {
	// ...
});

Sandbox(function (box) {
	// console.log(box);
});

Sandbox('dom', 'event', function (box) {
	Sandbox('ajax', function (box) {
		// ...
	});
});

// 5.5.2

Sandbox.modules = {};

Sandbox.modules.dom = function (box) {
	box.getElement = function () {};
	box.getStyle = function () {};
	box.foo = "bar";
};

Sandbox.modules.event = function (box) {
	box.attachEvent  = function () {};
	box.dettachEvent = function () {};
};

Sandbox.modules.ajax = function (box) {
	box.makeRequest = function () {};
	box.getResponse = function () {};
};

// 5.5.3

function Sandbox() {
	var args = Array.prototype.slice.call(argments),
		callback = args.pop(),
		modules = (args[0] && typeof args[0] === "string") ? args : args[0],
		i;

	if (!(this instanceof Sandbox)) {
		return new Sandbox(modules, callback);
	}

	this.a = 1;
	this.b = 2;

	if(!modules || modules === '*') {
		modules = [];
		for (i in Sandbox.modules) {
			if (Sandbox.modules.hasOwnProperty(i)) {
				modules.push(i);
			}
		}
	}
	for (i = 0; i < modules.length; i += 1) {
		Sandbox.modules[modules[i]](this);
	}

	callback(this);
}

Sandbox.prototype = {
	name: "My Application",
	varsion: "1.0",
	getName: function () {
		return this.name;
	}
};