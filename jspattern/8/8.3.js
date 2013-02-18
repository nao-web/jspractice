// 中途半端な解決
var b = document.getElementById('clickme'),
	count = 0;
b.onclick = function () {
	count += 1;
	b.innerHTML = "Click me: " + count;
};

var b = document.getElementById('clickme');
if (document.addEventListener) {
	b.addEventListener('click', myHandler, false);
	} else if (document.attachEvent) {
		b.attachEvent('onclick', myHandler);
	} else {
		b.onclick = myHandler;
	}

	function myHandler(e) {
		var src, parts;
		
		e = e || window.event;
		src = e.target || e.srcElement;
		parts = src.innerHTML.split(": ");
		parts[1] = parseInt(parts[1], 10) + 1;
		src.innerHTML = parts[0] + ": " + parts[1];
	
		if (typeof e.stopPropagation === "function") {
			e.stopPropagation();
		}
		if (typeof e.cancelBubble !== "undefined") {
			e.cancelBubble = true;
		}
		if (typeof e.preventDefault === "function") {
			e.preventDefault();
		}
		if (typeof e.returnValue !== "undefined") {
			e.returnValue = false;
		} 
	}

// 8.3.2

<div id="click-wrap">
<button>Click me: 0</button>
<button>Click me too: 0</button>
<button>Click me three: 0</button>
</div>

// イベントと発生元の要素を取得

e = e || window.event;
src = e.target || e.srcElement;
if (src.nodeName.toLowerCase() !== "button") {
	return;
}

Y.delegate('click', myHandler, "#click-wrap", "button");

function myHandler(e) {
	var src = e.currentTarget,
		parts;
	
	parts = src.get('innerHTML').split(": ");
	parts[1] = parseInt(parts[1], 10) + 1;
	src.set('innerHTML', parts[0] + ": " + parts[1]);
	
	e.halt();
}