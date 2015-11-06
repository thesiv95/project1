var contactMe = (function () {

    var init = function () {
        _setUpListeners();
        // сюда пишем то, что должно произойти сразу
    };

    var _setUpListeners = function () {
       $('#contact-me').on('submit', _submitForm);
    };

    var _submitForm = function(e){
        e.preventDefault();

        var form = $(this),
            url = '../contact_me.php',
            defObj = _ajaxForm(form, url);

    };

    var _ajaxForm = function(){
      if (!(validation.valid)) return false;

        

    };

    /* Все, что пишется до ретурна, нельзя поменять из консоли и вообще поменять */
    return {
        init: init
    };

})();

contactMe.init();