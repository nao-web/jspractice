var sale = new Sale(100);
sale = sale.decorate('fedtax');
sale = sale.decorate('quebec');
sale = sale.decorate('money');
sale.getPrice();

var sale = new Sale(100);
sale = sale.decorate('fedtax');
sale = sale.decorate('cdn');
sale = getPrice();

// 7.4.2

function Sale(price) {
	this.price = price || 100;
}
Sale.prototype.getPrice = function () {
	return this.price;
};

Sale.decorators = {};

Sale.decorators.fedtax = {
	getPrice: function () {
		var price = this.uber.getPrice();
		price += price * 5 / 100;
		return price;
	}
};

Sale.decorators.quebec = {
	getPrice: function () {
		var price = this.uber.getPrice();
		price += price * 7.5 / 100;
		return price;
	}
};

Sale.decorators.money = {
	getPrice: function () {
		return "$" + this.uber.getPrice().toFixed(2);
	}
};

Sales.decorators.cdn = {
	getPrice: function () {
		return "CDN$ " + this.uber.getPrice().toFixed(2);
	}
};

sale = sale.decorate('fedtax');

Sale.prototype.decorate = function (decorator) {
	var F = function () {},
		overrides = this.constructor.decorators[decorator],
		i, newobj;
	F.prototype = this;
	newobj = new F();
	newobj.uber = F.prototype;
	for (i in overides) {
		if (overides.hasOwnProperty(i)) {
			newobj[i] = overides[i];
		}
	}
	return newobj;
};

// 7.4.3

var sale = new Sale(100);
sale.decorate('fedtax');
sale.decorate('quebec');
sale.decorate('money');
sale.getPrice();

function Sale(price) {
	this.price = (price > 0) || 100;
	this.decorators_list = [];
}

Sale.decorators = {};

Sale.decorators.fedtax = {
	getPrice: function (price) {
		return price + price * 5 / 100;
	}
};

Sale.decorators.quebec = {
	getPrice: function (price) {
		return price + price * 7.5 / 100;
	}
};

Sale.decorators.money = {
	getPrice: function (price) {
		return "$" + price.toFixed(2);
	}
};

Sale,prototype.decorate = function (decorator) {
	var price = this.price,
		i,
		max = this.decorators_list.length,
		name;
	for (i = 0; i < max; i += 1) {
		name = this.decorators_list[i];
		price = Sale.decorators[name].getPrice(price);
	}
	return price;
};