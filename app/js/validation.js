var validation = (function () {

    var init = function () {
        _setUpListeners();
        // сюда пишем то, что должно произойти сразу
    };

    var _setUpListeners = function () {

    };

    var _createQtip = function (element, position) {

        // Позиция

        if (position === 'right') {
            position = {
                my: 'left center',
                at: 'right center'
            }
        } else {
            position = {
                my: 'right center', // стрелочка
                at: 'left center', // тело тултипа
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

    var validateForm = function (form) {

        var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
            valid = true;

        $.each(elements, function(index, val){
            console.log(index);
            console.log(val);
        });

    };


    /* Все, что пишется до ретурна, нельзя поменять из консоли и вообще поменять */
    return {
        init: init
    };

})();

validation.init();