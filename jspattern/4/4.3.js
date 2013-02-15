var setup = function () {
	alert(1);
	return function () {
		alert(2);
	};
};


var my = setup();
my();

var setup = function () {
	var count = 0;
	return function () {
		return (count += 1);
	};
};

var next = setup();
next();
next();
next();
next();