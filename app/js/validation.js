var validation = (function (){

    var init = function(){
            console.log('Инициализация модуля validation');
            _setUpListners();
        },
        validateForm = function (form) {
            console.log('Проверяем форму');

            var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
                valid = true;

            $.each(elements, function(index, val) {
                var element = $(val),
                    val = element.val(),
                    pos = element.attr('qtip-position');

                if(val.length === 0){
                    element.addClass('has-error');
                    _createQtip(element, pos);
                    valid = false;
                }

            });

            return valid;
        },
        _setUpListners = function () {
            $('form').on('keydown', '.has-error', _removeError);
            $('form').on('reset', _clearForm);
        },
        _removeError = function() {

            $(this).removeClass('has-error');
        },
        _clearForm = function(form) {


            var form = $(this);
            form.find('.input, .textarea').trigger('hideTooltip');
            form.find('.has-error').removeClass('has-error');
            form.find('.error-mes, success-mes').text('').hide();
        },
        _createQtip = function (element, position) {


            if (position === 'right') {
                position = {
                    my: 'left center',
                    at: 'right center'
                }
            }else{
                position = {
                    my: 'right center',
                    at: 'left center',
                    adjust: {
                        method: 'shift none'
                    }
                }
            }


            element.qtip({
                content: {
                    text: function() {
                        return $(this).attr('qtip-content');
                    }
                },
                show: {
                    event: 'show'
                },
                hide: {
                    event: 'keydown hideTooltip'
                },
                position: position,
                style: {
                    classes: 'qtip-mystyle qtip-rounded',
                    tip: {
                        height: 10,
                        width: 16
                    }
                }
            }).trigger('show');
        };

    return {
        init: init,
        validateForm: validateForm
    };

})();

validation.init();