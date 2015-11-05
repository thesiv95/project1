var myModule = (function () {

    var initMe = function () {
        _setUpListeners();
        // сюда пишем то, что должно произойти сразу

    };

    var _setUpListeners = function () {

    };


    /* Все, что пишется до ретурна, нельзя поменять из консольки */
    return {
        init: initMe
    };

})();

myModule.init();