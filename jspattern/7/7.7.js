// 7.7.1.3

<p><span id="toggle-all">Toggle Checked</span></p>
<ol id="vids">
	<li><input type="checkbox" checked><a href="http://new.music.yahoo.com/videos/--2158073">Gravedigger</a></li>
	<li><input type="checkbox" checked><a href="http://new.music.yahoo.com/videos/--4472739">Save Me</a></li>
	<li><input type="checkbox" checked><a href="http://new.music.yahoo.com/videos/--45286339">Crush</a></li>
	<li><input type="checkbox" checked><a href="http://new.music.yahoo.com/videos/--2144530">Dont Drink The Water</a></li>
	<li><input type="checkbox" checked><a href="http://new.music.yahoo.com/videos/--217241800">Funny the Way It Is</a></li>
	<li><input type="checkbox" checked><a href="http://new.music.yahoo.com/videos/--2144532">What Would You Say</a></li>
</ol>

// 7.7.1.4
var $ = function (id) {
	return document.getElementById(id);
};

$('vids').onclick = function (e) {
	var src, id;
		
	e = e || window.event;
	src = e.target || e.srcElement;
	
	if (src.nodeName !== "A") {
		return;
	}
	
	if (typeof e.preventDefault === "function") {
		e.preventDefault();
	}
	e.returnValue = false;
	
	id = src.href.split('--')[1];
	
	if (src.className === "play") {
		src.parentNode.innerHTML = videos.getPlayer(id);
		return;
	}

	src.parentNode.id = "v" + id;
	videos.getInfo(id);
};

$('toggle-all').onclick = function (e) {
	var hrefs, i,
	max,
	id;
	hrefs = $('vids').getElementsByTagName('a');
	for (i = 0, max = hrefs.length; i < max; i += 1) {
		if (hrefs[i].className === "play") {
			continue;
		}
	if (!hrefs[i].parentNode.firstChild.checked) {
		continue;
	}
	id = hrefs[i].href.split('--')[1];
	hrefs[i].parentNode.id = "v" + id;
	videos.getInfo(id);
	}
};

// 7.7.1.5

var videos = {

	getPlayer: function (id) {...},
	updateList: function (data) {...},
	
	getInfo: function (id) {
		
		var info = $('info' + id);

		if (!info) {
			http.makeRequest([id], "videos.updateList");
			return;
		}
￼
		if (info.style.display === "none") {
			info.style.display = '';
		} else {
			info.style.display = 'none';
		}
	}
};

// 7.7.1.6

var http = {
	makeRequest: function (ids, callback) {
		var url = 'http://query.yahooapis.com/v1/public/yql?q=',
			sql = 'select * from music.video.id where ids IN ("%ID%")',
			format = "format=json",
			handler = "callback=" + callback,
			script = document.createElement('script');
		
		sql = sql.replace('%ID%', ids.join('","'));
		sql = encodeURIComponent(sql);
		
		url += sql + '&' + format + '&' + handler;
		script.src = url;
		
		document.body.appendChild(script);
	}
};

// 7.7.1.7

select * from music.video.id where ids IN ("2158073", "123456")

proxy.makeRequest(id, videos.updateList, videos);

var proxy = { ids: [],
	delay: 50,
	timeout: null,
	callback: null,
	context: null,
	makeRequest: function (id, callback, context) {
		this.ids.push(id);

		this.callback = callback;
		this.context = context;
		
		if (!this.timeout) {
			this.timeout = setTimeout(function () {
				proxy.flush();
			}, this.delay);
		}
	},
	flush: function () {
		http.makeRequest(this.ids, "proxy.handler");
￼		
		this.timeout = null;
		this.ids = [];
	},
	handler: function (data) {
		var i, max;

		if (parseInt(data.query.count, 10) === 1) {
			proxy.callback.call(proxy.context, data.query.results.Video);
			return;
		}
		
		for (i = 0, max = data.query.results.Video.length; i < max; i += 1) {
			proxy.callback.call(proxy.context, data.query.results.Video[i]);
		}
	}
};