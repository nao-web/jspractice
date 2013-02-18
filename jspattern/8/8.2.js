// アンチパターン
for (var i = 0; i < 100; i += 1) {
	document.getElementById("result").innerHTML += i + ", "; 
}

// よりよいやり方：ローカル変数を更新する
var i, content = "",
for (i = 0; i < 100; i += 1) {
	content += i + ",";
}
document.getElementById("result").innerHTML += content;

// アンチパターン
var padding = document.getElementById("result").style.padding,
	margin = document.getElementById("result").style.margin;

// より良いやり方
var style = document.getElementById("result").style,
	padding = style.pading,
	margin = style.margin;

// 8.2.2

// アンチパターン
var p, t;

p = document.createElement('p');
t = document.createTextNode('first paragraph');
p.appendChild(t);
document.body.appendChild(p);

p = document.createElement('p');
t = document.createTextNode('second paragraph');
p.appendChild(t);
document.body.appendChild(p);

var p, t, frag;

frag = document.createDocumentFragment();

p = document.createElement('p');
t = document.createTextNode('first paragraph');
p.appendChild(t);
frag.appendChild(p);

p = document.createElement('p');
t = document.createTextNode('second paragraph');
p.appendChild(t);
frag.appendChild(p);

document.body.appendChild(frag);

var oldnode = document.getElementById('result'),
	clone = oldnode.cloneNode(true);

oldnone.parentNode.replaceChild(clone, oldnode);