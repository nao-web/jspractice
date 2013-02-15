var corolla = CarMaker.factory('Compact');
var solstice =  CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');

corolla.drive();
solstice.drive();
cherokee.drive();

var corolla = CarMaker.factory('Compact');

function CarMaker() {}

CarMaker.prototype.drive = function () {
	return "Vroom, I have" + this.doors + "doors"; 
};

CarMaker.factory = function (type) {
	var constr = type,
	newcar;

	if (typeof CarMaker[constr] !== "function") {
		throw {
			name: "Error",
			message: constr + "doesn't exist"
		};
	}

	if (typeof CarMaker[constr].prototype.drive !== "function") {
		CarMaker[constr].prototype = new CarMaker();
	}
	newcar = new CarMaker[constr]();
	return newcar;
};

CarMaker.Compact = function () {
	this.doors = 4;
};

CarMaker.Convertible = function () {
	this.doors = 2;
};

CarMaker.SUV = function () {
	this.doors = 17;
};

// 7.2.1

var o = new Object();
	n = new Object(1);
	s = Object('1');
	b = Object(true);

	//テスト
	o.constructor === Object;
	n.constructor === Number;
	s.constructor === String;
	b.constructor === Boolean;