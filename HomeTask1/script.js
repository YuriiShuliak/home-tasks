var image, price;
var color = prompt('Введите цвет из предложенных (Серебрянный, Черный, Золотой)');
if (color === null) {
	document.write('До свидания!');
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
		document.write('Вы выбрали только цвет');
		document.write('<br><img src="' + image + '"><br>');
	} else {
		if (+memory === 64) {
			price = 32999;
		} else if (+memory === 256) {
			price = 39999;
		} else if (+memory === 512) {
			price = 49999;
		} 
		document.write('Вот Ваш выбор');
		document.write('<br><img src="' + image + '"><br>');
		if (!price) {
			document.write('Такого объема памяти не существует');
		} else {
			document.write('Объем памяти ' + memory + ' Гб<br>');
			document.write('Цена ' + price + ' грн.');
		}
	}	
}	
