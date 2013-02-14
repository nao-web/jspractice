var my_regexp = /"(?:\\.|[^\\\"])*"/g;

var my_regexp =
	new RegExp("\"(?:\\\\.|[^\\\\\\\"])*\"", 'g');

function make_a_matcher() {
	return /a/gi;
}

var x = make_a_matcher();
var y = make_a_matcher();

x.lastIndex = 10;

document.writeln(y.lastIndex);