var box = document.querySelector('.box');
box.addEventListener('click', function (e) {
  var element = document.createElement('div');
  var inputs = document.querySelectorAll('input');
  element.className = 'square';

  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].checked) continue;
    element.classList.add(inputs[i].value);
  }

  element.style.left = e.offsetX + 'px';
  element.style.top = e.offsetY + 'px';
  box.appendChild(element);
});