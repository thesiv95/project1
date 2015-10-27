var validation = (function(){

    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){
        $('form').on('keydown', '.wrong', _removeError);
        $('form').on('reset', clearForm);
    };

    var _removeError = function(){
        $(this).removeClass('wrong');
    };

    var clearForm = function(form){
        var form = $(this);
        form.find('input, textarea').trigger('hideTooltip');
        form.find('input, textarea').removeClass('wrong');
    };

    var _createQtip = function(element, position){
        if(position === 'right'){
            position = {
                            my:'left center',
                            at:'right center'
                        }
            }else{
                position = {
                            my:'right center',
                            at:'left center',
                            adjust: {
                                method: 'shift none'
                            }
                        }
                    }
                element.qtip({
                        content:{
                            text: function(){
                                return $(this).attr('qtip-content');
                            }
                        },
                        show:{
                            event:'show'
                        },
                        hide:{
                            event:'keydown hideTooltip'
                        },
                        position:position,
                        style:{
                            classes: 'qtip-rounded',
                            tip:{
                                height:10,
                                width:16
                            }
                        }
                }).trigger('show');

            };
            var validateForm = function(form){


                var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
                valid = true;

                $.each(elements, function(index, val){
                var element = $(val),
                val = element.val(),
                pos = element.attr('qtip-position');

                if(val.length === 0){
                    element.addClass('wrong');
                    _createQtip(element, pos);
                    valid = false;
                }
                });
                return valid;
            };

            return{
                init: init,
                validateForm: validateForm,
            };
        })();
        validation.init();