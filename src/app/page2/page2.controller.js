// page1.controller.js
(function () {
    'use strict';

    angular
        .module('app')
        .controller('Page2Controller', Page2Controller);

    function Page2Controller() {
        var vm = this;
        vm.message = 'Page 2!';

        activate();

        ////////////

        function activate() {
            // Resolve start-up logic
        }
    }

})();