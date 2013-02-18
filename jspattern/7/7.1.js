var obj2 = {
	myprop: 'my value'
};

obj === obj2;
obj == obj2;

// 7.1.1

var uni = new Universe();
var uni2 = new Universe();
uni === uni2;

function Universe() {
	if (typeof Universe.instance === "object") {
		return Universe.instance;
	}
	this.start_time = 0;
	this.bang = "Big";

	Universe.instance = this;
 }

 var uni = new Universe();
 var uni2 = new Universe();
 uni === uni2;

 Universe.prototype.nothing = true;

 var uni = new Universe();

 Universe.prototype.everything = true;

 var uni2 = new Universe();

 uni.nothing;
 uni2.nothing;
 uni.everything;
 uni2.everything;

 uni.constructor.name;

 uni.constructor === Universe;

 function Universe() {
 	var instance;

 	Universe = function Universe() {
 		return instance;
 	};

 	Universe.prototype = this;

 	instance = new Universe();
 	instance.constructor = Universe;
 	instance.start_time = 0;
 	instance.bang = "Big";

 	return instance;
 }

Universe.prototype.nothing = true;
var uni = new Universe();
Universe.prototype.everything = true;
var uni2 = new Universe();

uni === uni2;

uni.nothing && uni.everything && uni2.nothing && uni2.everything;

uni.bang;
uni.constructor === Universe;

var Universe;

(function () {
	var instance;
	Universe = function Universe() {
		if (instance) {
			return instance;
		}

		instance = this;

		this.start_time = 0;
		this.bang = "Big";
	};
}());