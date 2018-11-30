man = {
  name: 'John',
  surname: 'Doe',
  age: 87,
  email: 'oldjohn@gmail.com'
};

function objWithoutProperties(obj, arrProp) {
  let newObj = {};
  Object.keys(obj).forEach((i) => { if (arrProp.indexOf(i) === -1) newObj[i] = obj[i] });
  return newObj;
}

console.log(objWithoutProperties(man, ['age', 'name']));