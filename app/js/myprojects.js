var myModule = function () {

    // Инициализируем модуль
    var init = function () {
        _setUpListeners();
        // сюда пишем то, что должно произойти сразу
    };

    // Следим за событиями
    var _setUpListeners = function () {
       $('#popup_press').on('click', _showModal); // open modal window
       $('#form').on('submit', _addProject); // форма добавления
    };

    // Работа с модальным окном (загрузка проекта)
    var _showModal = function(e) {
    	e.preventDefault();
    	var thePopup = $('#new-project-popup');
    		form = thePopup.find('#form');

    	thePopup.bPopup({
    		speed: 600,
    		transition: 'slideDown',
    		onclose: function() {
    			form.find('.server-msg').text('').hide();
    			form.trigger('reset');
    		}
    	});
    };

    // Собственно, добавление проекта - вызываем функцию _formAjax.
    var _addProject = function (e) {
    	e.preventDefault();

    	// variables
    	var form = $(this),
    		url = "../server_files/add.php",
    		sendToServer = _formAjax(form, url);

    		if (sendToServer) {
    			// Отправляем запрос на сервер ТОЛЬКО если получили ответ
	    		var successBox = form.find('.success-msg'),
	    			errorBox = form.find('.error-msg');
	    		if (answer.status === 'ok') {
	    			errorBox.hide();
	    			successBox.text(ans.text).show();
	    		} else {
	    			successBox.hide();
	    			errorBox.text(ans.text).show();
	    		}
    		}


    /*
	Универсальная функция - для ее работы используются [form]а и [url]-адрес:
	1) Сначала она проверяет форму на правильность введенных данных.
	2) Затем с ее помощью сервер получает данные из формы. Проверка сервером описана в 
	php-файле, который мы и передаем
	3) Наконец, получаем ответ от сервера! - прошел ли запрос успешно.
    */
    var _formAjax = function (form, url) {
    	
    	if(!isValid) return false;
    	data = form.serialize(); // получаем и обрабатываем данные из формы

    	var result = $.ajax({
    		url: url,
    		type: 'POST',
    		dataType: 'json',
    		data: data
    	}).fail(function (answer){
    		form.find('.error-msg').text('Ошибка сервера! Попробуйте позже.').show();
    	});

    	return result;
    	


    	// Возвращаем ответ
    };

    /* Все, что пишется до этого ретурна, нельзя поменять из консоли */
    return {
    	// Это уже ПУБЛИЧНЫЙ метод. С ним можно делать все что хошь)))
        init: init
    };

}();

	myModule.init();
};
