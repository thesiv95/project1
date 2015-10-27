jQuery(document).ready(function($) {

	var form = $.find('form');

	$('#popup_press').on('click', function(event) {
		event.preventDefault();
		$('#to_popup').css('display', 'block');
		$('#form').bPopup({
			speed: 500,
    		transition: 'slideDown'
		});
	});

	$('#form').on('submit', function(event) {
		event.preventDefault();
		validateForm;
	});

	$('#closePopup').on('click', function(event){
        //event.preventDefault();
        popup.close();
    });



    /***********************/

    var createQtip = function(element, position){
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


				var elements = form.find('input, textarea, mark').not('input[type="file"], input[type="hidden"]'),
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



});