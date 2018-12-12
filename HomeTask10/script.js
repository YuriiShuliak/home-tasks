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
let current = $('.silver')[0];

$('.color').on('click', function () {
  if (current === this) return;
  $('.color').each(function (i, elem) {
    $(elem).removeClass('active');
  });
  $(this).addClass('active');
  $('.text').hide();
  $('.more').text('More');
  current = this;
  let picture = IMAGES.find(e => $(this).hasClass(e.color));
  $('.image').attr('src', picture.src);
  $('.text').html(picture.text);
});

$('.more').on('click', function () {
  $('.text').toggle();
  $('.more').text() === 'Hide' ? $('.more').text('More') : $('.more').text('Hide');
});