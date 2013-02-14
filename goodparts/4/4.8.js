var hanoi = function (disc, src, aux, dst) {
	if(disc > 0) {
		hanoi(disc -1,src, dst, aux);
		document.writeln('Move disc' + disc + ' from ' + src + ' to ' + dst);
		hanoi(disc -1, aux, src, dst);
	}
};

hanoi(3, 'Src', 'Aux', 'Dst');

var walk_the_DOM = function walk(node, func) {
	func(node);
	node = node.firstChild;
	while (node) {
		walk(node, func);
		node = node.nextSibling;
	}
}

var getElementByAttribute = function (act, value) {
	var results = [];

	walk_the_DOM(document.body, function (node){
		var actual = node.nodeType === 1 && node.getAttribute(att);
		if (typeof actual === 'string' &&
			(actual === value || typeof value !== 'string')) {
			results.push(node);
		}
	});

	return results;
};

var factorial = function factorial(i, a) {
	a = a|| 1;
	if (i < 2) {
		return a;
	}
	return factorial(i -1, a * i);
};

document.writeln(factorial(4));		//24