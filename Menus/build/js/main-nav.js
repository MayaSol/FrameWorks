//Чтобы выпадающее меню не заходило за правый край экрана

var hEffectItmes = document.querySelectorAll('.horiz-effect__item');


var onHEffectItemHover = function(event) {
  var dropMenu = event.currentTarget.querySelector('ul');
  if ( dropMenu ) {
    dropMenu.style.left = '';
    var rect = dropMenu.getBoundingClientRect();
    var winW = document.documentElement.clientWidth;
    var offset = rect.left + rect.width - winW;

    if ( offset > 0 ) {
      dropMenu.style.left = '-' + Math.ceil(offset) + 'px';
    };

  }
}

for(i=0;i<hEffectItmes.length;i++) {
  hEffectItmes[i].addEventListener('mouseover',onHEffectItemHover);
}



