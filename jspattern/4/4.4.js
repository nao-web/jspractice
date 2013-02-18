var scareMe = function () {
	alert("Boo!");
	scareMe = function () {
		alert("Double boo!");
	};
};

scareMe();	//Boo!
scareMe();	//Double Boo!

scarMe.property = "properly";

var prank = scareMe;

var spooky = {
	boo: scareMe
};

prank();	//Boo!
prank();	//Boo!

console.log(prank.property);	//properly

spooky.boo();
spooky.boo();
console.log(spooky.boo.property);
scareMe();	// Double boo!
scareMe();	// Double boo!
console.log(scareMe.property)	//undefined