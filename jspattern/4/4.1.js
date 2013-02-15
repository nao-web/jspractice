// 4.1.1

// 名前付き
var add = function add(a, b) {
	return a + b;
};
// 無名関数
var add = function (a, b) {
	return a+ b;
};

function foo() {
	// ここに関数の本体を書きます
}

// 4.1.2

callMe(function () {

});

callMe(function me() {

});

var myobject = {
	say: function () {

	}
};

function foo() {}

function local() {
	function bar() {}
	return bar;
}

// 4.1.3

function foo() {}
var bar = function () {};
var baz = function baz () {};

foo.name;
bar.name;
baz.name;

// 4.1.4

// アンチpattern

function foo() {
	alert('global foo');
}
function bar() {
	alert('global bar');
}

function hoistME() {
	console.log(typeof foo);
	console.log(typeof bar);

	function foo() {
		alert('local foo');
	}
	var bar = function () {
		alert('local bar');
	};
}
hoistMe();