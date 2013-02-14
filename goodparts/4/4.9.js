var foo = function () {
	var a = 3, b = 5;

	var bar = function () {
		var b = 7, c = 11;
	//この時点で、aは3、bは7、cは11になっている
	
		a += b + c;

	//この時点で、aは21、bは7、cは11になっている

	};

	//この時点で、aは3、bは5になり、cは未定義状態である

	bar();

	//この時点で、aは21、bは5である

};