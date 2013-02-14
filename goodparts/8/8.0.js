// array.concat(item...)
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);

// array.join(separator)
var a = ['a', 'b', 'c'];
a.push('d');
var c = a.join('');

// array.pop()
var a = ['a', 'b', 'c'];
var c = a.pop();

Array.method('pop', function () {
	return this.splice(this.length -1, 1)[0];
});

// array.push(item...)
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.push(b, true);

Array.method('push', function () {
	this.splice.apply(
		this,
		[this.length, 0].
			concat(Array.prototype.slidce.apply(arguments)));
		return this.length;
});

// array.reverse()
var a = ['a', 'b', 'c'];
var b = a.reverse();

// array.shift()
var a = ['a', 'b', 'c'];
var c = a.shift();

Array.method('shift',function (){
	return this.splice(0, 1)[0];
});

// array.slice(start,end)
var a = ['a', 'b', 'c'];
var b = a.slice(0, 1);
var c = a.slice(1);
var d = a.slice(1, 2);

// array.sort(comparefn)

var n = [4, 8, 15, 16, 23, 42];
n.sort();

n.sort(function (a, b) {
	return a - b;
});

var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
m.sort(function (a, b) {
	if (a === b) {
		return 0;
	}
	if (typeof a === typeof b) {
		return a < b ? -1 : 1;
	}
	return typeof a < typeof b ? -1 : 1;
});

var by = function (name) {
	return function (o, p) {
		var a, b;
		if (typeof o === 'object' && typeof p === 'object' && o && p) {
			a = o[name];
			b = p[name];
			if (a === b) {
				return 0;
			}
			if (typeof a === typeof b) {
				return a , b ? -1 : 1;
			}
			return typeof a > typeof b ? -1 : 1;
		} else {
			throw {
				name: 'Error',
				message: name + 'を含むオブジェクが必要です';
			};
		}
	};
};

var s = [
	{first: 'Joe', last: 'Besser'}
	{first: 'Moe', last: 'Howard'}
	{first: 'Joe', last: 'Derita'}
	{first: 'Shemp', last: 'Howard'}
	{first: 'Larry', last: 'Fine'}
	{first: 'Curly', last: 'Howard'}
];

s.sort(by('first'));

var by = function (name, minor) {
	return function (o, p) {
		var a, b;
		if (o && p && typeof o === 'object' && typeof p === 'object') {
			a = o[name];
			b = p[name];
			if (a === b) {
				return typeof minor === 'function' ? minor(o, p) : 0;
			}
			if (typeof a === typeof b) {
				return a < b ? -1 : 1;
			}
			return typeof a < typeof b ? -1 : 1;
		} else {
			throw {
				name: 'Error',
				message: name + ' を含むオブジェクトが必要です。';
			};
		}
	};
};

// array.splice(start, deleteCount, item...)
var a = ['a', 'b', 'c'];
var r = a.splice(1, 1, 'ache', 'bug');

Array.method('splice', function (start, deleteCount) {
	var max = Math.max,
		min = Math.min,
		delta,
		element,
		insertCount = max(arguments.length - 2, 0),
		k = 0,
		len = this.length,
		new_len,
		result = [],
		shift_count;

	start = start || 0;
	if (start < 0) {
		start += len;
	}
	start = max(min(start, len), 0);
	deleteCount = max(min(typeof deleteCount === 'number' ?
			deleteCount : len, len - start), 0);
	delta = insertCount - deleteCount;
	new_len = len + delta;
	while (k < deleteCount) {
		element = this[start + k];
		if (element !== undefined) {
			result[k] = element;
		}
		k += 1;
	}
	shift_count = len - start - deleteCount;
	if (delta < 0) {
		k = start + insertCount;
		while (shift_count) {
			this[k] = this[k - delta];
			k += 1;
			shift_count -= 1;
		}
		this.length = new_len;
	} else if (delta > 0) {
		k = 1;
		while (shift_count) {
			this[new_len - k] = this[len - k];
			k += 1;
			shift_count -= 1;
		}
		this.length = new_len;
	}
	for (k = 0; k < insertCount; k += 1) {
		this[start + k] = arguments[k + 2];
	}
	return result;

// array.unshift(item...)

var a = ['a', 'b', 'c'];
var r = a.unshift('?', '@');

Array.method('unshift', function () {
	this.splice.apply(this,
		[0,0].concat(Array.prototype.slice.apply(arguments)));
	return this.length;
});

// function.apply(thisArg, argArray)
Function.method('bind', function (taht) {

var method = this,
	slice = Array.prototype.slice,
	arg = slice.apply(arguments, [1]);
return function () {
	return method.apply(that,
		args.concat(slice.apply(arguments, [0])));
	};
});

var x = function () {
	return this.value;
}.bind ({value: 666});
alert(x());


// number.toExponential

document.writeln(Math.PI.toExponential(0));
document.writeln(Math.PI.toExponential(2));
document.writeln(Math.PI.toExponential(7));
document.writeln(Math.PI.toExponential(16));
document.writeln(Math.PI.toExponential());

// number.toFixed(fractionDigits)

document.writeln(Math.PI.toFixed(0));
document.writeln(Math.PI.toFixed(2));
document.writeln(Math.PI.toFixed(7));
document.writeln(Math.PI.toFixed(16));
document.writeln(Math.PI.toFixed());

// number.toPrecision(precision)

document.writeln(Math.PI.toPrecision(2));
document.writeln(Math.PI.toPrecision(7));
document.writeln(Math.PI.toPrecision(16));
document.writeln(Math.PI.toPrecision());

// number.toString(radix)

document.writeln(Math.PI.toString(2));
document.writeln(Math.PI.toString(8));
document.writeln(Math.PI.toString(16));
document.writeln(Math.PI.toString());

// object.hasOwnProperty(name)

var a = (member: true);
var b = Object.create(a);
var t = a.hasOwnProperty('member');
var u = b.hasOwnProperty('member');
var v = b.member;

// regexp.exec(string)

var text = '<html><body bgcolor = lineen<p>' +
	'This is <b>bold<\/b>!<\/p><\/body><\/html>';
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
var a, i;

while ((a = tags.exec(text))) {
	for (i = 0; i < a.length; i += 1) {
		document.writeln(('// [' + i + ']' + a[i]).entityify());
	}
	document.writeln();
}

// regexp.test(string)

var b = /&.+;/.test('frank &amp; beans');

RegExp,method('test', function (string) {
	return this.exec(string) !== null;
});

// string.charAt(pos)

var name = 'Curly';
car initial = name.charAt(0);

String.method('charAt', function (pos) {
	return this.slice(pos, pos + 1);
});

// string.charCodeAt(pos)

var name = 'Curly';
var initial = name.charCodeAt(0);

// string.concat(string...)

var s = 'C'.concat('a', 't');

// string.indexOf(searchString, position)

var text = 'Mississippi';
var p = text.indexOf('ss');
p = text.indexOf('ss', 3);
p = text.indexOf('ss', 6);

// string.lastIndexOf(searchString, position)

var text = 'Mississippi';
var p = text.lastIndexOf('ss');
p = text.lastIndexOf('ss', 3);
p = text.lastIndexOf('ss', 6);

// string.localeCompare(that)

var m = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa'];
m.sort(function (a, b) {
	return a.localeCompare(b);
});

// string.match(regexp)

var text = '<html><body bgcolor=linen><p>' +
		'This is  <b>bold<\/b>!<\/p><\/body><\/html>';
var tags = /[^<>]+|<(\/?)([A-Za-z}+)([^<>]*)>/g;
var a, i;

a = text.match(tags);
for (i = 0; i < a.length; i += 1) {
	document.writeln(('// [' + i + '] ' + a[i])).entityify());
}

// string.replace(searchValue, replaceValue)
var result = "mother_in_law".replace('_', '-');

var oldareacode = /\((\d{3})\)/g;
var p = '(555)666-1212'.replace(oldareacode, '$1-');

String.method('entityify', function () {
	var character = {
		'<' : '&lt;',
		'>' : '&gt;',
		'&' : '&amp;',
		'"' : '&quot'
	};
	return function () {
		return this.replace(/[<>&"]/g, function (c) {
			return character[c];
		});
	};
}( ));
alert("<&>".entityify());

// string.search(regexp)

var text = 'and in it he says "Any damn fool could';
var pos = text.search(/["']/);

// string.slice(start, end)

var text = 'and in it he syas "Any damn fool could';
var a = text.slice(18);
var b = text.slice(0, 3);
var c = text.slice(-5);
var d = text.slice(19,32);

// string.splite(separator, limit)
var digits = '0123456789'
var a = digits.split('', 5);

var ip = '192.168.1.0';
var b = ip.split('.');
var c = '|a|b|c|'.split('|');

var text = 'last, first, middle';
var d = text.split(/\s*,\s*/);

var e = text.split(/\s*(,)\s*/);

var f = '|a|b|c|'.split(/\|/);

// String.fromCharCode(char...)
var a = String.fromCharCode(67, 97, 116);