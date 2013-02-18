// 8.5.1

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = handleResponse;

xhr.open("GET", "page.html", true);
xhr.send();

var i, xhr, activeXids = [
	'MSXML2.XMLHTTP.3.0',
	'MSXML2.XMLHTTP',
	'Microsoft.XMLHTTP'
];

if (typeof XMLHttpRequest === "function") {
	xhr = new XMLHttpRequest();
} else {
	for (i = 0; i < activeXids.length; i += 1) {
		try {
			xhr = new ActiveXObject(activeXids[i]);
			break;
			} catch (e) {}
		}
	}

xhr.onreadystatechange = function () {
	if (xhr.readyState !== 4) {
		return false;
	}
	if (xhr.status !== 200) {
		alert("Error, status code: " + xhr.status);
		return false;
	}
	document.body.innerHTML += "<pre>" + xhr.responseText + "<\/pre>";
};

xhr.open("GET", "page.html", true);
xhr.send("");

// 8.5.2

var script = document.createElement("script");
script.src = url;
document.body.appendChild(script);

myHandler({"hello": "world"});

// 8.5.2.1

<button id="new">New game</button>
<button id="server">Server play</button>

<td id="cell-1">&nbsp;</td>
<td id="cell-2">&nbsp;</td>
<td id="cell-3">&nbsp;</td>

var ttt = {

	played: [],
	get: function (id) {
		return document.getElementById(id);
	},
	this.get('new').onclick = this.newGame;
	this.get('server').onclick = this.remoteRequest;
},
newGame: function () {
	var tds = document.getElementsByTagName("td"),
		max = tds.length,
		i;
	for (i = 0; i < max; i += 1) {
		tds[i].innerHTML = "&nbsp;";
	}
	ttt.played = [];
},
remoteRequest: function () {
	var script = document.createElement("script");
	script.src = "server.php?callback=ttt.serverPlay&played=" + ttt.played.join(',');
	document.body.appendChild(script);
},
serverPlay: function (data) {
	if (data.error) {
		alert(data.error);
		return;
	}
	data = parseInt(data, 10);
	this.played.push(data);

	this.get('cell-' + data).innerHTML = '<span class="server">X<\/span>';
	setTimeout(function () {
		ttt.clientPlay();
	}, 300);
},
clientPlay: function () {
	var data = 5;
￼
	if (this.played.length === 9) {
		alert("Game over");
		return;
	}
	while (this.get('cell-' + data).innerHTML !== "&nbsp;") {
		data = Math.ceil(Math.random() * 9);
	}
	this.get('cell-' + data).innerHTML = 'O';
	this.played.push(data);
	}
};

ttt.serverPlay({"error": "Error description here"});
ttt.serverPlay(3);

// 8.5.3

new Image().src = "http://example.org/some/page.php";

