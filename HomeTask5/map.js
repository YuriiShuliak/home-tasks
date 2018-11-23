(function () {
	var func = function (a) {
		return a + 2;
	}
	var arr = [26, -3, -0.7, 0];

	function map(foo, array) {
		var result = [];
		for (var i = 0; i < array.length; i++) {
			result.push(foo(array[i]));
		}
		return result;
	}

	console.log(map(func, arr));
}())

