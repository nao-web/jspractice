var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
	//xとstoogeは同じオブジェクトを参照しているので
	//nickの値はCurlyになる

var a = {}, b  = {}, c = {};
	//a,b,cはそれぞれ異なる空オブジェクトを参照している

a = b = c = {};
	//a,b,cはすべて同じ空オブジェクトを参照している