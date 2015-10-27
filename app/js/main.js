var myModule = (function () {

    var init = function () {
        _setUpListeners();
        // сюда пишем то, что должно произойти сразу
    }

    var _setUpListeners = function () {
       $('#popup_press').on('click', _popupShow);
	   $('form').on('keydown', '.wrong', _removeErr);
       $('form').on('reset', '.wrong', _cleanForm);
	   $('form').on('submit', _tooltipInit);
    }
	
	var _popupShow = function (e) {
		e.preventDefault();
		//$.find('#to_popup').bpopup();
	};
	
	var _removeErr = function() {
        $(this).removeClass('wrong');
    };

    var _cleanForm = function(form) {
        var form = $(this);
        form.find('input, textarea').trigger('hideTooltip').removeClass('wrong');
    };
	
		
	var _tooltipInit = function () {
		var element = $('#p_title');
            pos = element.attr('qtip-position');
        _tooltipCreation(element, pos);

        var _tooltipShow = function (elemen) {
        var elem = $('#' + id),
            pos = elem.attr('qtip-position');                     
            tooltipCreation(elem, pos);
		};
	};
	
	var _tooltipCreation = function (elem, pos) {
        // позиция тултипа
        if (position === 'right') {
                        position = {
                            my: 'left center', 
                            at: 'right center'
                        };
                    }else{
                        position = {
                            my: 'right center', 
                            at: 'left center'
                        };
                    }
                    
                    elem.qtip({
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
                        position : position,
                        style: {
                            classes: 'qtip-rounded myclass'
                        }
                    }).trigger('show');
    };
	
	var validateThis = function (form) {
       
       var elems = form.find('input, textarea'),
            isValid = true;

        $.each(elems, function (index, val) {
            var elem = $('val'),
            value = elem.val(),
            pos = elem.attr('qtip-position');

            if (value.length === 0) {
                elem.addClass('wrong');
                _tooltipCreation(elem, pos);
                isValid = false;
                //console.log("Заполните это поле.");
            }



        });
        return isValid;
    };
	
	var modernizrMagic = function () {
		if(!Modernizr.input.placeholder) {
		$('input, textarea').placeholder();
		}
	};
	

    /* Все, что пишется до ретурна, нельзя поменять из консоли и вообще поменять */
    return {
        init: init,
		validateThis: validateThis,
		modernizrMagic: modernizrMagic
    };

})();

myModule.init();

