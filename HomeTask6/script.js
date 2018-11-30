var compareObjects = function (o1, o2, key) {
  if (!key) key = 'name';
  return o1[key] === o2[key] ? true : false;
}

// CONSTANTS
const SIZE_SMALL = {
  name: 'small',
  price: 50,
  kk: 20
};
const SIZE_LARGE = {
  name: 'large',
  price: 100,
  kk: 40
};
const STUFFING_CHEESE = {
  name: 'cheese',
  price: 10,
  kk: 20
};
const STUFFING_POTATO = {
  name: 'potato',
  price: 15,
  kk: 10
};
const STUFFING_SALAD = {
  name: 'salad',
  price: 20,
  kk: 5
};
const TOPPING_SPICE = {
  name: 'spice',
  price: 15,
  kk: 0
};
const TOPPING_MAYO = {
  name: 'mayo',
  price: 20,
  kk: 5
};
// !!!!!!!!!

var Hamburger = function (size, stuffing) {
  this._size = size;
  this._stuffing = stuffing;
  this._toppings = [];
}

Hamburger.prototype.getSize = function () {
  return this._size.name;
}

Hamburger.prototype.getStuffing = function () {
  return this._stuffing.name;
}

Hamburger.prototype.getToppings = function () {
  return this._toppings;
}

Hamburger.prototype.addTopping = function (newTopping) {
  for (var i = 0; i < this._toppings.length; i++) {
    if (compareObjects(newTopping, this._toppings[i])) {
      console.log('Такой топпинг уже есть');
      return false;
    }
  }
  this._toppings.push(newTopping);
  return newTopping;
}

Hamburger.prototype.removeTopping = function (newTopping) {
  for (var i = 0; i < this._toppings.length; i++) {
    if (compareObjects(newTopping, this._toppings[i])) {
      this._toppings.splice(i, 1);
      return newTopping;
    }
  }
  console.log('Такого топпинга нет');
  return false;
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




var burger1 = new Hamburger(SIZE_LARGE, STUFFING_CHEESE);
