var myModule = (function () {

    var init = function () {
        _setUpListeners();
    };

    var _setUpListeners = function () {
       $('form').on('submit', _loginProcedure);
       $('form').on('keydown', '.wrong', _removeErr);
       $('form').on('reset', '.wrong', _cleanForm);
    };

    var _removeErr = function() {
        $(this).removeClass('wrong');
    };

    var _cleanForm = function(forma) {
        var forma = $(this);
        form.find('input').removeClass('wrong');
    };

    // Login

    var _loginProcedure = function (e) {
        e.preventDefault();
        var loginOK,
            data = '',
            f_login = $('#f_login'),
            f_password = $('#f_password'),
            f_remember = $('#f_remember');

            // Send info to server

            if (f_login.val() === '' || f_password.val() === '') {
                loginOK = false;
                data = 'Login failed. No AJAX';
                f_login.addClass('wrong');
                f_password.addClass('wrong');
            } else {
                loginOK = true;
                data = $('form').serialize();
                f_login.removeClass('wrong');
                f_password.removeClass('wrong');
            }

            console.log(data);

            if (!loginOK) return false;

            $.ajax({
                url: 'login.php',
                type: 'POST',
                data: data
            })
            .done(function() {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            });
            

    };

    /* Все, что пишется до ретурна, нельзя поменять из консоли и вообще поменять */
    return {
        init: init
    };

})();

myModule.init();