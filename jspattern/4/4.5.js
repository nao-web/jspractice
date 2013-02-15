(function () {
	alett('watch out!');
}());

(function () {
	alert('watch out!');
})();

(function () {
	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		today = new Date(),
		msg = 'Today is' + days[today.getDay()] + ',' + today.getDate();

	alert(msg);
}());	//Today is Fri 13

// 4.5.1

(function (who, when) {
	console.log("I met " + who + " on " + when);
}("Joe Black", new Date()));

(function (global) {
	//globalを介してグローバルオブジェクトにアクセス
}(this));

// 4.5.2

var result = (function () {
	return 2 + 2;
}());