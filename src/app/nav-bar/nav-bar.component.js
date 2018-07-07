// home.component.js
(() => {

    angular
        .module('app')
        .component('navBar', {
            controller: 'NavBarController',
            controllerAs: 'vm',
            templateUrl: 'app/nav-bar/nav-bar.html'
        });

})();