// home.controller.js
(function () {
    'use strict';

    angular
        .module('app')
        .component('page1', {
            controller: 'Page1Controller',
            controllerAs: 'vm',
            templateUrl: 'app/page1/page1.html'
        });

})();