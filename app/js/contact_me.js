var contactMe = (function (){

    var init = function(){
            _setUpListeners();
        },
        _setUpListeners = function (){
            $('#contact-me').on('submit', _submitForm);
        },
        _submitForm = function (e) {


            e.preventDefault();

            var form = $(this),
                url = '/send_mail.php',
                defObject = _ajaxForm(form, url);

            if (defObject) {
                defObject.done(function(ans) {
                    var mes = ans.mes,
                        status = ans.status;

                    if ( status === 'OK'){
                        form.trigger('reset');
                        form.find('.success-mes').text(mes).show();
                    } else{
                        form.find('.error-mes').text(mes).show();
                    }
                });
            }
        },
        _ajaxForm = function (form, url) {

            if (!validation.validateForm(form)) return false;
            var data = form.serialize();

            return $.ajax({
                type: 'POST',
                url: url,
                dataType : 'JSON',
                data: data
            }).fail( function(ans) {
                form.find('.error-mes').text('На сервере произошла ошибка').show();
            });
        };

    return {
        init: init
    };

})();

contactMe.init();