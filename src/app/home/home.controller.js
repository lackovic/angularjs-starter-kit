// home.controller.js
(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;
        vm.header = 'Home sweet home!';

        activate();

        ////////////

        function activate() {
            // Resolve start-up logic
        }
    }

})();