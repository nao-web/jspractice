// たくさんのデータを足しわせる関数を作成する
// 関数内で定義されている変数sumの定義は、関数外で
// 定義されているsumを邪魔することはない。関数内では
// その関数内で定義された方しか見えていない

var sum = function () {
	var i, sum = 0;
	for (i = 0; i < arguments.length; i += 1) {
		sum += arguments[i];
	}
	return sum;
};

document.writeln(sum(4, 8, 15, 16, 23, 42));	//108