var image, price;
var color = prompt('Введите цвет из предложенных (Серебрянный, Черный, Золотой)');
if (color === null) {
	document.write('<h3>До свидания!</h3>');
} else {
	color = color.toLowerCase(); 
	if (color === 'серебрянный') {
		image = 'img/silver.png';
	} else if (color === 'черный') {
		image = 'img/black.png';
	} else if (color === 'золотой') {
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
			price = 32999;
		} else if (+memory === 256) {
			price = 39999;
		} else if (+memory === 512) {
			price = 49999;
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
