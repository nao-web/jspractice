function writeCode(callback) {
	callback();
}

function introduceBugs() {
	//bug
}

writeCode(introduceBugs);

// 4.2.1

var findNodes = function () {
	var i = 100000,
		nodes = [],
		found;
	while (i) {
		i -= 1;
		nodes.push(found);
	}
	return nodes;
};

var hide = function (nodes) {
	var i = 0, max = nodes.length;
	for(; i < masx; i += 1) {
		nodes[i].style.display = "none";
	}
};

hide(findNodes());

var findNodes = function (callback) {
	var i = 100000,
		nodes = [],
		found;

		if(typeof callback !== "function") {
			callback = false;
		}
		while (i) {
			i -= 1;

			if (callback) {
				callback(found);
			}
			nodes.push(found);
		}
		return nodes;
	};

var hide = function (node) {
	node.style.display = "node";
};

findeNodes(hide);

findeNodes(function (node) {
	node.style.display = "block";
});

// 4.2.2

var  myapp = {};
myapp.color = "green";
myapp.paint = function (node) {
	if(typeof callback === "function") {
		callback(found);
	}
};

findNodes(myapp.paint, myapp);

var findNodes = function (callback, callback_obj) {
	if (typeof callback === "function") {
		callback.call(callback_obj, found);
	}
};

findNodes(myapp.paint, myapp);

findNodes("paint",myapp);

var findNodes = function (callback, callback_obj) {
	if (typeof callback === "string") {
		callback = callback_obj[callback];
	}

	if (typeof callback === "function") {
		callback.call(callback_obj, found);
	}
};

// 4.2.3

document.addEventListener("click", console.log, false);

// 4.2.4

var thePlotThickens = function () {
	console.log('500ミリ秒後…');
};
setTimeout(thePlotThickens, 500);