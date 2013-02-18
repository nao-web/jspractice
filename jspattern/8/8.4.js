// 8.4.2

var ww = new Worker('my_web_worker.js');
ww.onmessage = function (event) {
	document.body.innerHTML +=
		"<p>message from the background thread: " + event.data + "</p>";
};

var end = 1e8, tmp = 1;

postMessage('hello there');

while (end) {
	end -= 1;
	tmp += end;
	if (end === 5e7) {
		postMessage('halfway there, `tmp` is now '+ tmp);
	}
}

postMessage('all done');