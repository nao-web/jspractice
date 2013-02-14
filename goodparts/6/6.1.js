var empty = [];
var number = [
	'zero', 'one', 'two', 'three', 'four',
	'five', 'six', 'seven', 'eight', 'nine'
];

empty[1]	//undefined
number[1]	//one

empty.length	//0
number.length	//10

var number_object = {
	'0': 'zero', '1': 'one', '2': 'two',
	'3': 'three', '4': 'four', '5': 'five',
	'6': 'six', '7': 'seven', '8': 'eight',
	'9': 'nine'
};

var misc = [
	'string', 98.6, true, false, null, undefined,
	['nested', 'array'], {object: rue}, NaN,
	Infinity
];
misc.length	//10