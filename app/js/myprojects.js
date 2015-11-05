var myModule = (function () {

    var initMe = function () {
        _setUpListeners();


    };

    var _setUpListeners = function () {
        $('#add-new-item').on('click', _showModal); // it's the popup
        $('#add-new-project').on('submit', _addProject); // добавление проекта
    };

    var _showModal = function (e) {
        e.preventDefault();
        $('#new-progect-popup').bPopup({
            speed: 450,
            transition: 'slideDown'
        });
    };

    var _addProject = function (e) {
        e.preventDefault();

        // vars
        var form = $(this),
            url = '../add_project.php',
            data = form.serialize();
            console.log(data);

        // ajax
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data
        }).done(function(ans) {
                if (ans.status === 'ok') {
                    console.log(ans);
                    form.find('.success-mes').text(ans.text).show();
                } else {
                    console.log(ans);
                    form.find('.error-mes').text(ans.text).show();
                }
            })
            .fail(function() {
                console.log("error");
            });


    };


    /* Все, что пишется до ретурна, нельзя поменять из консольки */
    return {
        init: initMe
    };

})();

myModule.init();