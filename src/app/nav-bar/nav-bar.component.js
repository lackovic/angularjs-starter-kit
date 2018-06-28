// home.component.js
(function () {
    'use strict';

    angular
        .module('app')
        .component('navBar', {
            controller: 'NavBarController',
            controllerAs: 'vm',
            templateUrl: 'app/nav-bar/nav-bar.html'
        });

})();