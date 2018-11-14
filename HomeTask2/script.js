var image, price, memory, color;
var arrMemory = [
	{
		value: 64,
		price: 33000
	},
	{
		value: 256,
		price: 40000
	},
	{
		value: 512,
		price: 50000
	}
];
var arrColors = [
	{
		value: 'silver',
		image: 'img/silver.png',
		addPrice: 0
	},
	{
		value: 'black',
		image: 'img/black.png',
		addPrice: 500
	},
	{
		value: 'gold',
		image: 'img/gold.png',
		addPrice: 1000
	}
];

topMemory:
while (true) {
	memory = prompt('Введите объем памяти в Гб (64, 256 или 512)');
	if (memory === null) {
		document.write('<h3>До свидания!</h3>');
		break;
	} 
	for (var i = 0; i < arrMemory.length; i++) {
		if (+memory === arrMemory[i].value) {
			price = arrMemory[i].price;
			break topMemory;
		}
	}
	alert('Такого объема памяти не существует');
}

if (price) {
	color = prompt('Введите цвет из предложенных (Silver, Black, Gold)');
	if (color === null) {
		document.write('<h3>До свидания!</h3>');
	} else {
		color = color.toLowerCase();
		image = 'img/default.png';
		for (var i = 0; i < arrColors.length; i++) {
			if (color === arrColors[i].value) {
				image = arrColors[i].image;
				price += arrColors[i].addPrice; 
				break;
			}
		}
		document.write('<h3>Вот Ваш выбор</h3>');
		document.write('<img src="' + image + '">');
		if (image === 'img/default.png') {
			document.write('<h3>Такого цвета нет в наличии</h3>');
		}
		document.write('<h3>Объем памяти ' + memory + ' Гб</h3>');
		document.write('<h3>Цена ' + price + ' грн.</h3>');	
	}
}




