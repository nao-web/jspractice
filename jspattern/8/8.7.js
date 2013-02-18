<script>
console.log("hello world");
</script>

<script src="external.js"></script>

// 8.7.1

<!doctype html>
<html>
<head>
<title>My App</title>
<!-- アンチパターン -->
<script src="jquery.js"></script>
<script src="jquery.quickselect.js"></script>
<script src="jquery.lightbox.js"></script>
<script src="myapp.js"></script>
</head>
<body>
...
</body>
</html>

// 1つにまとめる。minify
<!doctype html>
<html>
<head>
<title>My App</title>
<script src="all_20100426.js"></script>
</head>
<body>
...
</body>
</html>

// ページの終わりで読む
<!doctype html>
<html>
<head>
<title>My App</title>
</head>
<body>
...
<script src="all_20100426.js"></script>
</body>
</html>

// 8.7.2

<!doctype html>
<html>
<head>
<title>My App</title>
</head>
<!-- チャンク#1の終わり -->
<body>
...
<script src="all_20100426.js"></script>
</body>
</html>
<!-- チャンク#2の終わり -->

<!doctype html> <html>
<head>
<title>My App</title>
<script src="all_20100426.js"></script> </head>
<!-- チャンク#1の終わり --> <body>
... </body> </html>
<!-- チャンク#2の終わり -->

<!doctype html>
<html>
<head>
<title>My App</title>
</head>
<body>
<div id="header">
<img src="logo.png" />￼
...
</div>
<!-- チャンク#1の終わり -->

<!-- チャンク#2の終わり -->
<script src="all_20100426.js"></script>
</body>
</html>
<!-- チャンク#3の終わり -->

// 8.7.3

var script = document.createElement("script");
script.src = "all_20100426.js";
document.documentElement.firstChild.appendChild(script);

var mynamespace = {
	inline_scripts: []
};

<script>
mynamespace.inline_scripts.push(function () {
	console.log("I am inline");
});
</script>

var i, scripts = mynamespace.inline_scripts, max = scripts.length;
for (i = 0l i < max; max += 1) {
	script[i]();
}
 
// 8.7.3.1

document.documentElement.firstChild.appendChild(script);
document.getElementsByTagName("head")[0].appendChild(script);
document.body.appendChild(script);

var first_script = document.getElementsByTagName('script')[0];
first_script.parentNode.insertBefore(script, first_script);

// 8.7.4

<!-- チャンク#2の終わり -->
<script src="all_20100426.js"></script>
<script>
window.onload = function () {
	var script = document.createElement("script");
	script.src = "all_lazy_20100426.js";
	document.documentElement.firstChild.appendChild(script);
};
</script>
</body>
</html>
<!-- チャンク#3の終わり -->

// 8.7.5

require("extra.js", function () {
	functionDefinedInExtraJS();
});

function require(file, callback) {
	var script = document.getElementsByTagName('script')[0], newjs = document.createElement('script');

	newjs.onreadystatechange = function () {
		if (newjs.readyState === 'loaded' || newjs.readyState === 'complete') {
			newjs.onreadystatechange = null;
			callback();
		}
	};

	newjs.onload = function () {
		callback();
	};

	newjs.src = file;
	script.parentNode.insertBefore(newjs, script);
}

<?php
header('Content-Type: application/javascript');
sleep(1);
?>
function extraFunction(logthis) {
	console.log('loaded and executed');
	console.log(logthis);
}

require('ondemand.js.php', function () {
	extraFunction('loaded from the parent page');
	document.body.appendChild(document.createTextNode('done!'));
});

// 8.7.6

new Image().src = "preloadme.js";

var obj = document.createElement('object');
obj.data = "preloadme.js";
document.body.appendChild(obj);

var preload;
if (/*@cc_on!@*/false) {
	preload = function (file) {
		new Image().src = file;
	};
} else {
	preload = function (file) {
		var obj = document.createElement('object'),
		body = document.body; obj.width = 0;

		obj.height = 0;
		obj.data = file;
		body.appendChild(obj);
	};
}

preload('my_web_worker.js');