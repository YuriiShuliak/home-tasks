

var firstItem = +checkItem('Введите первое число. Разделитель дробной части "."');
var secondItem = +checkItem('Введите второе число. Разделитель дробной части "."');
var arrSigns = ['+', '-', '*', '/'];
var userSign;

while (true) {
	userSign = prompt('Введите знак действия (+, -, *, /)');
	if ( arrSigns.indexOf(userSign) !== -1 ) break;
	alert('Нужно ввести корректный знак действия!');
}


function sum(a, b) {
	return a + b;
}
function diff(a, b) {
	return a - b;
}
function mult(a, b) {
	return a * b;
}
function div(a, b) {
	return a / b;
}







function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function checkItem(message) {
	while (true) {
		var item = prompt(message);
		if (isNumeric(item)) break;
		alert('Нужно ввести число!');
	}
	return item;
}
