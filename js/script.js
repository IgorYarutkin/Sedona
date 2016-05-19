(function() {

  // объявление переменных
  var buttonAdultsMinus = document.querySelector('.adults-icon.icon-minus');
  var buttonAdultsPlus = document.querySelector('.adults-icon.icon-plus');
  var buttonKidsMinus = document.querySelector('.kids-icon.icon-minus');
  var buttonKidsPlus = document.querySelector('.kids-icon.icon-plus');
  var adultsInput = document.getElementById('adults');
  var kidsInput = document.getElementById('kids');

  /** функция изменения значения поля
  * @param {element} input
  * @param {boolean} change
  */
  var changeInputValue = function(input, change) {
  var maxNum = parseInt(input.max);
  var minNum = parseInt(input.min);
  var currentValue = parseInt(input.value);
  if (change) {
    if(input.max === '' || currentValue < maxNum ) {
    input.value = currentValue + 1;
    }
  } else {
    if(currentValue > 0) {
      input.value = currentValue - 1;
    }
  }
};

  // установка обработчиков событий
  buttonAdultsMinus.addEventListener('click', function() {
    changeInputValue(adultsInput, false);
  });
  buttonAdultsPlus.addEventListener('click', function() {
    changeInputValue(adultsInput, true);
  });
  buttonKidsMinus.addEventListener('click', function() {
    changeInputValue(kidsInput, false);
  });
  buttonKidsPlus.addEventListener('click', function() {
    changeInputValue(kidsInput, true);
  });

})();
