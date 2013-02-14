Array.dim = function (dimension, initial) {
	var a = [], i;
	for (i = 0; i < dimension; i += 1) {
		a[i] = initial;
	}
	return a;
};

var myArray = Array.dim(10, 0);

var matrix = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8]
];

matrix[2][1]

for(i = 0; i <n; i += 1) {
	my_array[i] = [];
}

Array.matrix = function (m, n, initial) {
	var a, i, j, mat = [];
	for (i = 0; i < m; i += 1) {
		a = [];
		for (j = 0; j < n; j += 1) {
			a[j] =initial;
		}
		mat[i] = a;
 	}
 	return mat;
}

var myMatrix = Array.matrix(4, 4, 0);
document.writeln(myMatrix[3][3]);

Array.identity = function (n) {
	var i, mat = Array.matrix(n, n, 0);
	for (i = 0; i < n; i += 1) {
		mat[i][i] = 1;
	}
	return mat;
};

myMatrix = Array.indentity(4);
document.writeln(myMatrix[3][3]);