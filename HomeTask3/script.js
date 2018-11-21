(function(){
var signs = {
	sum: '+',
	diff: '-',
	mult: '*',
	div: '/'
};
var actions = {};
actions.sum = function(a, b) {
	return a + b;
}
actions.diff = function(a, b) {
	return a - b;
}
actions.mult = function(a, b) {
	return a * b;
}
actions.div = function(a, b) {
	if (b === 0) return false;
	return a / b;
}

var firstItem = checkItem('Введите первое число');
if (firstItem === false) return;
var secondItem = checkItem('Введите второе число');
if (secondItem === false) return;
var userSign;
top:
while (true) {
	userSign = prompt('Введите знак действия (+, -, *, /)');
	if (userSign === null) return;
	for (var key in signs) {
		if (userSign !== signs[key]) continue;
		var result = actions[key](+firstItem, +secondItem);
		if (!result) {
			document.write('<h3>На ноль делить нельзя!</h3>');
			break top;
		}
		result = +result.toFixed(10);
		document.write('<h3>' + firstItem + ' ' + userSign + ' ' + secondItem +
		' = ' + result + '</h3>');
		break top;
	}
	alert('Нужно ввести корректный знак действия!');
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function checkItem(message) {
	while (true) {
		var item = prompt(message);
		if (item === null) return false;
		if (isNumeric(item)) break;
		alert('Нужно ввести число!');
	}
	return item;
}
function randomInteger() {
 console.log('sdfsfd');	
}
})();