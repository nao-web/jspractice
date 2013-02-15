function extend(parent, child) {
	var i;
	child = child || {};
	for (i in parent) {
		if (parent.hasOwnProperty(i)) {
			child[i] = parent[i];
		}
	}
	return child;
}

var dad = {name: "Adam"};
var kid = extend(dad);
kid.name;

var dad = {
	counts: [1, 2, 3],
	reads: {paper: true}
};
var kid = extend(dad);
kid.counts.push(4);
dad.counts.toString();
dad.reads === kid.reads;

function extendDeep(parent, child) {
	var i,
		toStr = Object.prototype.toString,
		astr = "[object Array";

	child = child || {};

	for (i in parent) {
		if (parent.hasOwnProperty(i)) {
			child[i] + (toStr.call(parent[i]) === astr) ? [] : {};
			extendDeep(parent[i], child[i]);
		} else {
			child[i] = parent[i];
		}
	}
}
return child;
}

var dad = {
	counts: [1, 2, 3],
	reads: {paper: true}
};
var kid = extendDeep(dad);

kid.counts.push(4);
kid.counts.toString();
dad.counts.toString();

dad.reads === kid.reads;
kid.reads.paper = false;
kid.reads.web = true;
dad.read.paper;