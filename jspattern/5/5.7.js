Math.PI;
Math.SQRT2;
Number.MAX_VALUE;

var Widget = function () {
	// ...
};

Widget.MAX_HEIGHT = 320;
Widget.MAX_WIDTH = 480;

set(name, value)

isDefined(name)

get(name)

var constant = (function () {
	var constatns = {},
		ownProp = Object.prototype.hasOwnProperty,
		allowed = {
			string: 1,
			number: 1,
			boolean: 1
		},
		prefix = (Math.random() + "_").slice(2);
	return {
		set: function (name, value) {
			if (this.isDefined(name)) {
				return false;
			}
			if (!ownProp.call(allowed, typeof value)) {
				return false;
			}
			constants[prefix + name] = value;
			return true;
		},
		isDefined: function (name) {
			return ownProp.call(constants, prefix + name);
		},
		get: function (name) {
			if (this.isDefined(name)) {
				return constants[prefix + name];
			}
			return null;
		}
	};
}());

constant.isDefined("maxwidth");

constant.set("maxwidth", 480);

constant.isDefined("maxwidth");

constant.set("maxwidth", 320);

constant.get("maxwidth");