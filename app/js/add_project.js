var addProject = (function (){

    var init = function(){
            _setUpListeners();
        },
        _setUpListeners = function (){
            $('#add-new-item').on('click', _showModal);
            $('#add-new-project').on('submit', _addProject);
            $('#fileupload').on('change', _changefileUpload);
        },
        _getNameFromPath = function (path) {
            return path.replace(/\\/g, '/').replace(/.*\//, '');
        },
        _changefileUpload = function (){
            var input = $(this),
                name = _getNameFromPath(input.val());

            $('#filename')
                .val(name)
                .trigger('hideTooltip')
                .removeClass('has-error');
        },
        _showModal = function (){
            $('#new-progect-popup').bPopup({
                speed: 650,
                transition: 'slideDown',
                onClose: function () {
                    this.find('.form').trigger("reset");
                }
            });
        },
        _addProject = function (e){

            e.preventDefault();

            var form = $(this),
                url = '../add_proj.php',
                defObject = _ajaxForm(form, url);

            if (defObject) {
                defObject.done(function(ans) {
                    var mes = ans.mes,
                        status = ans.status;

                    if ( status === 'OK'){
                        form.trigger('reset');
                        form.find('.success-mes').text(mes).show();
                        location.reload();
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


if($('#add-new-project').length){
    addProject.init();
}
