({
	maxwidth: 600,
	maxheight: 400,

	gimmeMax : function () {
		return this.maxwidth + "x" + this.maxheight;
	},

	init: function () {
		console.log(this.gimmeMax());
	}
}).init();

({...}).init();
({...}.init());