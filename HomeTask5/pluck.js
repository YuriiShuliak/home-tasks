(function () {
	var characters = [
		{ 'name': 'barney', 'age': 36 },
		{ 'name': 'fred', 'age': 40 }
	];

	function pluck(array, key) {
		var result = [];
		for (var i = 0; i < array.length; i++) {
			if (!array[i][key]) {
				result.push('В элементе с индексом ' + i + ' нет свойства "' + key + '"');
				continue;
			}
			result.push(array[i][key]);
		}
		return result;
	}

	console.log(pluck(characters, 'name'));
}())

