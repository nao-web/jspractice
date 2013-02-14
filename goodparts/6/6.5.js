var is_array = function (value) {
	return value &&
		typeof value === 'object' &&
		value.constructor === Array;
};

var is_array = function (value) {
	return value &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		typeof value.splice  === 'function' &&
		!(value.propertyIsEnumerable('length'));
};