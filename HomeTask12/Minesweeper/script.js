let items = 12;
let minesQuantity = 10;
let buttons = [];
let mines = new Array(items);
for (let i = 0; i < mines.length; i++) {
	mines[i] = new Array(items);
	for (let j = 0; j < mines[i].length; j++) {
		mines[i][j] = false;
	}
}
for (let n = 0; n < minesQuantity; n++) {
	while (true) {
		let i = randomInteger(0, items - 1);
		let j = randomInteger(0, items - 1);
		if (mines[i][j] === true) continue;
		mines[i][j] = true;
		break;
	}
}
for (let i = 0; i < items; ++i) {
	buttons[i] = [];
	if (i > 0) {
		document.body.appendChild(document.createElement('br'));
	}
	for (let j = 0; j < items; ++j) {
		buttons[i][j] = document.createElement('button');
		buttons[i][j].setAttribute('data-i', i);
		buttons[i][j].setAttribute('data-j', j);
		buttons[i][j].classList.add('closed');
		buttons[i][j].setAttribute('data-value', minesCounter(i, j));
		document.body.appendChild(buttons[i][j]);
	}
}

document.addEventListener('click', function (e) {
	if (e.target.nodeName !== 'BUTTON') return;
	let i = +e.target.getAttribute('data-i');
	let j = +e.target.getAttribute('data-j');
	let value = e.target.getAttribute('data-value');
	if (mines[i][j] === true) {
		alert('You lose');
		window.location.reload();
	} else {
		buttons[i][j].textContent = value;
		buttons[i][j].removeAttribute('class');
		openNeighboringItems(i, j);
	}
	if (isWon()) {
		alert('Congratulations! You won!');
		window.location.reload();
	}
});

document.addEventListener('contextmenu', function (e) {
	if (e.target.nodeName !== 'BUTTON') return;
	e.preventDefault();
	let i = +e.target.getAttribute('data-i');
	let j = +e.target.getAttribute('data-j');
	let value = e.target.getAttribute('data-value');
	if (!buttons[i][j].textContent) {
		buttons[i][j].textContent = '*';
	} else if (buttons[i][j].textContent === '*') {
		buttons[i][j].textContent = '';
	}
});

function minesCounter(i, j) {
	let minesCount = 0;
	let n = [[i - 1, j - 1], [i - 1, j], [i - 1, j + 1], [i, j - 1], [i, j + 1], [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]];
	n.forEach(i => {
		if (i[0] >= 0 && i[1] >= 0 && i[0] < items && i[1] < items && mines[i[0]][i[1]] === true) minesCount++;
	});
	return minesCount === 0 ? '' : minesCount;
}
function openNeighboringItems(i, j) {
	if (buttons[i][j].getAttribute('data-value') !== '') return;
	let n = [[i - 1, j - 1], [i - 1, j], [i - 1, j + 1], [i, j - 1], [i, j + 1], [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]];
	n.forEach(i => {
		if (i[0] < 0 || i[1] < 0 || i[0] >= items || i[1] >= items || !isClosed(i[0], i[1])) return;
		buttons[i[0]][i[1]].textContent = buttons[i[0]][i[1]].getAttribute('data-value');
		buttons[i[0]][i[1]].removeAttribute('class');
		openNeighboringItems(i[0], i[1]);
	});
}
function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1);
	rand = Math.round(rand);
	return rand;
}
function isClosed(i, j) {
	return buttons[i][j].classList.contains('closed');
}
function isWon() {
	let counter = 0;
	buttons.forEach(i => {
		i.forEach(j => { if (j.hasAttribute('class')) counter++; });
	});
	return counter === minesQuantity ? true : false;
}