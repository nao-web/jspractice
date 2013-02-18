// アンチパターン
if (navigator.userAgent.indexOf('MSIE') !== -1) {
	document.attachEvent('onclick', console.log);
}

// より良いやり方
if (document.attachEvent) {
	document.attachEvent('onclick', console.log);
}
// より限定したやり方
if (typeof document.attachEvent !== "undefined") {
	document.attachEvent('onclick', console.log);
}