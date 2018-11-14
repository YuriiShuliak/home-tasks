var image, price;
var color = prompt('Введите цвет из предложенных (Silver, Black, Gold)');
if (color === null) {
	document.write('<h3>До свидания!</h3>');
} else {
	color = color.toLowerCase(); 
	if (color === 'silver') {
		image = 'img/silver.png';
	} else if (color === 'black') {
		image = 'img/black.png';
	} else if (color === 'gold') {
		image = 'img/gold.png';
	} else {
		image = 'img/default.png';
	}
	var memory = prompt('Введите объем памяти в Гб (64, 256 или 512)');
	if (memory === null) {
		document.write('<h3>Вы выбрали только цвет</h3>');
		document.write('<img src="' + image + '">');
	} else {
		if (+memory === 64) {
			price = 33000;
		} else if (+memory === 256) {
			price = 40000;
		} else if (+memory === 512) {
			price = 50000;
		} 
		document.write('<h3>Вот Ваш выбор</h3>');
		document.write('<img src="' + image + '">');
		if (!price) {
			document.write('<h3>Такого объема памяти не существует</h3>');
		} else {
			document.write('<h3>Объем памяти ' + memory + ' Гб</h3>');
			document.write('<h3>Цена ' + price + ' грн.</h3>');
		}
	}	
}	
