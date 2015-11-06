var myProjects = (function () {

    // Инициализация
    var initMe = function () {
        _setUpListeners();
    };

    // Прослушка событий
    var _setUpListeners = function () {
        $('#add-new-item').on('click', _showModal); // it's the popup
        $('#add-new-project').on('submit', _addProject); // добавление проекта
    };

    // Попап
    var _showModal = function (e) {
        e.preventDefault();
        var divPopup = $('#new-progect-popup'),
            form = divPopup.find('.form');
        divPopup.bPopup({
            speed: 450,
            transition: 'slideDown',
            onClose: function(){
                form.find('.server-mes').text('').hide();
            }
        });
    };

    // Добавление проекта
    var _addProject = function (e) {
        e.preventDefault();

            var form = $(this),
                url = '../add_project.php',
                myServerAnswer = _ajaxForm(form, url);


            var successBox = form.find('.success-mes'),
                errorBox = form.find('.error-mes');

                myServerAnswer.done(function(ans) {
                    var mes = ans.mes,
                        status = ans.status;

                    if ( status === 'OK'){
                        form.trigger('reset');
                        successBox.text(mes).show();
                        errorBox.text('').hide();
                        location.reload(); // сразу перезагрузим страницу
                    } else{
                        errorBox.text(mes).show();
                        successBox.text('').hide();
                    }
                });
        };


    // Запрос на сервер
    var _ajaxForm = function (form, url) {

        // 1 проверить форму
        // 2 собрать данные из формы
        // 3 отправить запрос

        //if (!valid) return false;

        var data = form.serialize();
        var result = $.ajax({ // Возвращает Deferred Object
            type: 'POST',
            url: url,
            dataType : 'JSON',
            data: data
        });

        return result;
    };

    /* Все, что пишется до ретурна, нельзя поменять из консольки */
    return {
        init: initMe
    };

})();

myProjects.init();