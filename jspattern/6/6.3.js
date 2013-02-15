function inherit(C, P) {
	C.prototype = new P();
}

var kid = new Child();
kid.say();