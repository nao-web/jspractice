function inherit(C, P) {
	C.prototype = new P();
}

var kid = new Child();
kid.say();

// 6.3.1

var kid = new Child();
kid.name = "Patrick";
kid.say();

// 6.3.2

var s = new Child('Seth');
s.say();