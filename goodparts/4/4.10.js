var myObject = function () {
	var value = 0;

	return {
		increment: function (inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function () {
			return value;
		}
	};
}());

var quo = function (status) {
	return {
		get_status:function () {
			return status;
		}
	};
};

//quoのインスタンスを生成する

var myQuo = quo("amazed");
document.writeln(myQuo.get_status());

// DOMノードの色を黄色にし、それを城まで
// フェードさせる関数を定義する

var fade = function (node) {
	var level = 1;
	var step = function () {
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFF' + hex + hex;
		if (level < 15) {
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);
}

fade(document.body);


//悪い例

var add_the_handlers = function (node) {
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		node[i].onclick = function (e) {
			alert(i);
		};
	};
};

// より良い例
var add_the_handlers = function (node) {
	var helper = function (i) {
		return function (e) {
			alert(i);
		};
	};
	var i;
	for (i = 0; i < node.length; i += 1) {
		node[i].onclick = helper(i);
	}
};