var myProjects = (function () {

    // �������������
    var initMe = function () {
        _setUpListeners();
    };

    // ��������� �������
    var _setUpListeners = function () {
        $('#add-new-item').on('click', _showModal); // it's the popup
        $('#add-new-project').on('submit', _addProject); // ���������� �������
    };

    // �����
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

    // ���������� �������
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
                        location.reload(); // ����� ������������ ��������
                    } else{
                        errorBox.text(mes).show();
                        successBox.text('').hide();
                    }
                });
        };


    // ������ �� ������
    var _ajaxForm = function (form, url) {

        // 1 ��������� �����
        // 2 ������� ������ �� �����
        // 3 ��������� ������

        //if (!valid) return false;

        var data = form.serialize();
        var result = $.ajax({ // ���������� Deferred Object
            type: 'POST',
            url: url,
            dataType : 'JSON',
            data: data
        });

        return result;
    };

    /* ���, ��� ������� �� �������, ������ �������� �� ��������� */
    return {
        init: initMe
    };

})();

myProjects.init();