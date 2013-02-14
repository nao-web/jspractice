//4.3.1
var myObject = {
	value:0,
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
document.writeln(myObject.value);	//1

myObject.increment(2);
document.writeln(myObject.value);	//3

//4.3.2
var sum = add (3,4);	//sumは7

//myobjectにdoubleメソッドを追加する
myobject.double = function () {
	var that = this; // 値の待避

	var helper = function () {
		that.value = add(that.value, that.value);
	};

	helper(); //helperを関数として呼び出す
};

//doubleをメソッドとして呼び出す

myObject.double();
document.writeln(myObject.value);

//4.3.3

//Quoという名のコンストラクタ関数を生成する。
//これはstatusプロパティを持つオブジェクトを生成する。
var Quo = function (string) {
	this.status = string;
};

//get_statusというパブリックメソッドを
//Quoのすべてのインスタンスで利用可能にする

Quo.prototype.get_status = function () {
	return this.status;
};

//Quoのインスタンスを生成する

var myQuo = new Quo("confused");
document.writeln(myQuo.get_status());	//confused

//4.3.4

//2つの数値からなる配列を作り、それらを足し合わせる
var array = [3, 4];
var sum = add.apply(null,array);	//sumは7

//statusというメンバを持つオブジェクトを生成する

var statusObject = {
	status: 'A-OK'
};

//statusObjectオブジェクトはQuo.prototypeを継承していない。
//しかし、statusObjectがget_statusメソッドを持っていないにも
//かかわらず、statusObjectのget_statusメソッドを呼び出す
//ことが可能になる

var status = Quo.prototype.get_status.apply(statusObject);

//statusは'A-OK'