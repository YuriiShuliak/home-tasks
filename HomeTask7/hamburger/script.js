const SIZES = [
  {
    name: 'large',
    price: 100,
    kk: 40,
    image: 'img/large.jpg'
  },
  {
    name: 'small',
    price: 50,
    kk: 20,
    image: 'img/small.jpg'
  }
];
const STUFFINGS = [
  {
    name: 'cheese',
    price: 10,
    kk: 20
  },
  {
    name: 'potato',
    price: 15,
    kk: 10
  },
  {
    name: 'salad',
    price: 20,
    kk: 5
  }
];
const TOPPINGS = [
  {
    name: 'spice',
    price: 15,
    kk: 0
  },
  {
    name: 'mayo',
    price: 20,
    kk: 5
  }
];


var Hamburger = function (size, stuffing) {
  this._size = size;
  this._stuffing = stuffing;
  this._toppings = [];
}
Hamburger.prototype.addTopping = function (newTopping) {
  this._toppings.push(newTopping);
}
Hamburger.prototype.calculatePrice = function () {
  let price = this._size.price + this._stuffing.price;
  for (let i = 0; i < this._toppings.length; i++) {
    price += this._toppings[i].price;
  }
  return price;
}
Hamburger.prototype.calculateKk = function () {
  let kk = this._size.kk + this._stuffing.kk;
  for (let i = 0; i < this._toppings.length; i++) {
    kk += this._toppings[i].kk;
  }
  return kk;
}

let burger = new Hamburger(SIZES[0], STUFFINGS[0]);
let size = document.querySelector('#size');
let stuffing = document.querySelector('#stuffing');
let price = document.querySelector('#price');
let kk = document.querySelector('#kk');
let toppings = document.querySelectorAll('.toppings');
let image = document.querySelector('img.rounded');
let chooseBox = document.querySelector('.choose-box');

price.textContent = burger.calculatePrice();
kk.textContent = burger.calculateKk();

chooseBox.addEventListener('change', (e) => {
  let burgerSize = SIZES.find((i) => i.name === size.value);
  let burgerStuffing = STUFFINGS.find((i) => i.name === stuffing.value);
  let burgerToppings = Array.prototype.filter.call(toppings, (i) => i.checked === true);

  burger = new Hamburger(burgerSize, burgerStuffing);
  burgerToppings.forEach((i) => {
    TOPPINGS.forEach((j) => { if (j.name === i.value) burger.addTopping(j) });
  });
  price.textContent = burger.calculatePrice();
  kk.textContent = burger.calculateKk();
  image.src = burgerSize.image;
});