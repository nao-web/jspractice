function Parent() {}
function Child() {}

var some_var = 1;

var module1 = {};
module1.data = {a: 1, b:2};
var module2 = {};

var MYAPP = {};
MYAPP.Parent = function () {};
MYAPP.Child = function () {};

MYAPP.some_var = 1;
MYAPP.modules = {};

MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a: 1, b: 2};
MYAPP.modules.module2 = {};

// 5.1.1
var MYAPP = {};

if (typeof MYAPP === "undefined") {
	var MYAPP = {};
}

var MYAPP = MYAPP || {};	// より短く

MYAPP.namespace('MYAPP.modules.module2');

var MYAPP = MYAPP || {};

MYAPP.namespace = function (ns_string) {
	var parts = ns_string.split('.'),
	parent = MYAPP,
	i;

if (parts[0] === "MYAPP") {
	parts = parts.slice(1);
}

for (i = 0; i < parts.length; i += 1) {
	if (typeof parent[parts[i]] === "undefined") {
		parent[parts[i]] = {};
	}
	parent = parent[parts[i]];
}
return parent;
};

var module2 = MYAPP.namespace('MYAPP.modules.module2');
module2 === MYAPP.modules.module2; // true

MYAPP.namespace('modules.module51');

MYAPP.namespace('once.upon.a.time.there.was.this.long.nested.property');