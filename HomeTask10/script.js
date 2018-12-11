const IMAGES = [
  {
    color: 'black',
    src: 'img/black.png',
    text: 'Black phone description'
  },
  {
    color: 'silver',
    src: 'img/silver.png',
    text: 'Silver phone description'
  },
  {
    color: 'gold',
    src: 'img/gold.png',
    text: 'Golden phone description'
  },
];


$('.color').on('click', function () {
  $('.color').each(function (i, elem) {
    $(elem).removeClass('active');
  })
  $(this).addClass('active');
  let picture = IMAGES.find(e => $(this).hasClass(e.color));
  $('.image').attr('src', picture.src);
  $('.text').html(picture.text);
});

$('.more').on('click', function () {
  $('.text').toggle();
  $('.more').text() === 'Hide' ? $('.more').text('More') : $('.more').text('Hide');
});
