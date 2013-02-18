// 5.6.1

var Gadget = function () {};

Gadget.isShiny = function () {
	return "you bet";
};

Gadget.prototype.setPrice = function (price) {
	this.price = price;
};

Gadget.isShiny(); // "you bet"

var iphone = new Gadget();
iphone.setPrice(500);

typeof Gadget.setPrice; // "undefined"
typeof iphone.isShiny; // "undefined"

Gadget.prototype.isShiny = Gadget.isShiny;
iphone.isShiny(); // "you bet"

var Gadget = function (price) {
this.price = price;
};

Gadget.isShiny = function () {
	var msg = "you bet";
	if (this instanceof Gadget) {
		msg += ", it costs $" + this.price + '!';
	}
	return msg;
};

Gadget.prototype.isShiny = function () {
	return Gadget.isShiny.call(this);
}
;
Gadget.isShiny(); // "you bet"

var a = new Gadget('499.99');
a.isShiny(); // "you bet, it costs $499.99!"

// 5.6.2

var Gadget = (function () {
	var counter = 0;

	return function () {
		console.log(counter += 1); 
	};
}());

var g1 = new Gadget();
var g2 = new Gadget();
var g3 = new Gadget();

var Gadget = (function () {
	var counter = 0;
	NewGadget;

	NewGadget = function () {
		counter += 1;
	};

	NewGadget.prototype.getLastId = function () {
		return counter;
	};

	return NewGadget;
}());

var iphone = new Gadget();
iphone.getLastId();
var ipod = new Gadget();
ipod.getLastId();
var ipad = new Gadget();
ipad.getLastId();