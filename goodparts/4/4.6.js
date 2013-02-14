var add = function (a,b) {
	if(typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name:'TypeError',
			message: 'add needs numbers'
		};
	}
	return a + b;
}

// 修正したadd関数を間違った方法で呼び出す
// try_it関数を作成する

var try_it = function () {
	try {
		add("seven");
	} catch (e) {
		document.writeln(e.name + ': ' + e.message);
	}
}

try_it();