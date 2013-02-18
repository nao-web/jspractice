var myFunction = function () {
	var event = YAHOO.util.Event,
	dom = YAHOO.util.Dom;
};

function test1() {
	alert(MYAPP.modules.m1);
	alert(MYAPP.modules.m2);
	alert(MYAPP.modules.m51);
}

// minify
alert(MYAPP.modules.m1);alert(MYAPP.modules.m2);alert(MYAPP.modules.m51)

function test2() {
	var modules = MYAPP.modules;
	alert(modules.m1);
	alert(modules.m2);
	alert(modules.m51);
}

// minify
var a=MYAPP.modules;alert(a.m1);alert(a.m2);alert(a.m51)