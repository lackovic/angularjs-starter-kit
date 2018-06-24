// page1.controller.js
(function () {
    'use strict';

    angular
        .module('app')
        .controller('Page1Controller', Page1Controller);

    function Page1Controller() {
        var vm = this;
        vm.message = 'Page 1!';
    }

})();