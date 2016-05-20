(function() {

  // объявление переменных
  var searchHeader = document.querySelector('.search-form-header a');
  var dateInInput = document.getElementById('date-in');
  var dateOutInput = document.getElementById('date-out');
  var buttonAdultsMinus = document.querySelector('.adults-icon.icon-minus');
  var buttonAdultsPlus = document.querySelector('.adults-icon.icon-plus');
  var buttonKidsMinus = document.querySelector('.kids-icon.icon-minus');
  var buttonKidsPlus = document.querySelector('.kids-icon.icon-plus');
  var adultsInput = document.getElementById('adults');
  var kidsInput = document.getElementById('kids');
  var searchFormContainer = document.querySelector('.modal-search-form');
  var searchForm = document.querySelector('.search-form form');
  var searchFormSubmitButton = document.querySelector('.search-form-button');

  // отладочный код


  /** функция изменения значения поля
  * @param {element} input
  * @param {boolean} change
  */
  var changeInputValue = function(input, change) {
  var currentValue = parseInt(input.value);
  var maxNum = parseInt(input.max);
  var minNum;
  if (input === adultsInput) {
    minNum = parseInt(input.min) || 1;
  } else {
    minNum = parseInt(input.min) || 0;
  }

  if (change) {
    if(input.max === '' || currentValue < maxNum ) {
    input.value = currentValue + 1;
    }
  } else {
    if(currentValue > minNum) {
      input.value = currentValue - 1;
    }
  }
};

  /** функция отправки формы
  *
  */
  var searchFormSubmit = function() {
    searchFormContainer.classList.remove('search-form-error');
    searchForm.submit();
  };

  /** функция валидации формы поиска
  *
  */
  var validateSearchForm = function() {
    if (!dateInInput.value) {
      console.log('Заполните дату заезда');
      dateInInput.focus();
    } else if (!dateOutInput.value) {
      console.log('Заполните дату выезда');
      dateOutInput.focus();
    } else if (!adultsInput.validity.valid) {
      console.log('Заполните, пожалуйста, правильно поле "Количество взрослых"');
      adultsInput.focus();
    } else if (!kidsInput.validity.valid) {
      console.log('Заполните, пожалуйста, правильно поле "Количество детей"');
      kidsInput.focus();
    } else {
      searchFormSubmit();
      return;
    }

  };

  // функция обработчика кнопки на отправку формы
  var checkSubmit = function(evt) {
    evt.preventDefault();
    validateSearchForm();
  };

  // установка обработчиков событий на кнопки "-" и "+"
  var formEvent = function(evt) {
    switch (evt.target) {
      case buttonAdultsMinus:
        changeInputValue(adultsInput, false);
        break;
      case buttonAdultsPlus:
        changeInputValue(adultsInput, true);
        break;
      case buttonKidsMinus:
        changeInputValue(kidsInput, false);
        break;
      case buttonKidsPlus:
        changeInputValue(kidsInput, true);
        break;
      case searchFormSubmitButton:
        checkSubmit(evt);
        break;
      default:
    }
  };


  /** функция показа формы поиска
  *
  */
    var searchFormOn = function() {
      searchFormContainer.classList.add('on');
      searchFormContainer.addEventListener('click', formEvent);
    };

/** функция скрытия формы поиска
*
*/
  var searchFormOff = function() {
    searchFormContainer.classList.remove('on');
    searchFormContainer.removeEventListener('click', formEvent);
  };


  /** функция выбора показа формы поиска
  *
  */
  showSearchForm = function() {
    if (searchFormContainer.classList.contains('on')) {
      searchFormOff();
    } else {
      searchFormOn();
    }
  };

  searchHeader.addEventListener('click', function(evt) {
    evt.preventDefault();
    showSearchForm();
  });

})();
