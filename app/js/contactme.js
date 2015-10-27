var myModule = (function () {
  var init = function () {
        _setUpListeners();
        // сюда пишем то, что должно произойти сразу
    };

    var _setUpListeners = function () {
       $('#contact-form').on('submit', _validateIt);
       $('form').on('keydown', '.wrong', _removeErr);
       $('form').on('reset', '.wrong', _cleanForm);
    };

    var _removeErr = function() {
        $(this).removeClass('wrong');
    };

    var _cleanForm = function(forma) {
        var forma = $(this);
        form.find('input').removeClass('wrong');
    };

        var _validateIt = function (e) {
      e.preventDefault();
        var form = $('form'),
            url = "contact.php",
            sendToServer = _formAjax(form, url),
            data = form.serialize(); // получаем и обрабатываем данные из формы

            var _formAjax = function (form, url) {
                  if (!validateThis) return false;
              $.ajax({
                 url: url,
                 type: 'POST',
                 dataType: 'json',
                 data: data
             })
             .done(function() {
                 console.log("success");
                 $('form').find('input, textarea').removeClass('wrong');
             })
             .fail(function() {
                 console.log("error");
                 $('form').find('input, textarea').addClass('wrong');
             });
           
           //return _formAjax;
    };

    return _formAjax;
  };

  /* Все, что пишется до ретурна, нельзя поменять из консоли и вообще поменять */
  return {
        init: init
    };

})();

myModule.init();