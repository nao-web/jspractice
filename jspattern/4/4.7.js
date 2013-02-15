var utils = {
	addListner: function (el, type, fn) {
		if (typeof window.addEventListener === 'function') {
			el.addEventListener(type, fn, false);
		} else if (typeof document.attachEvent === 'function') {
			el.attachEvent('on' + type, fn);
		} else {
			el['on' + type] = fn;
		}
	},
	reniveListener: function (el, type, fn) {
		//同様の処理
	}
};

var utils = {
	addListner: null,
	removeListener: null
};

if (typeof window.addEventListener === 'function') {
	utils.addListner = function (el, type, fn) {
		el.addEventListener(type, fn, false);
	};
	utils.removeListener = function (el, type, fn) {
		el.removeEventListener(type, fn, false);
	};
} else if (typeof document.attachEvent === 'function') {
	utils.addListner = function (el, type, fn) {
		el.attachEvent('on' + type, fn);
	};
	utils.removeListener = function (el, type, fn) {
		el.detachEvent('on + type, fn');
	};
} else {
	utils.addListner = function (el, type, fn) {
		el['on' + type] = fn;
	};
	utils.removeListener = function (el, type, fn) {
		el['on' + type] = null;
	};
}