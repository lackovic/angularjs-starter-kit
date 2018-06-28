// albums.controller.js
(function () {
    'use strict';

    angular
        .module('app')
        .controller('AlbumsController', AlbumsController);

    function AlbumsController() {
        var vm = this;
        vm.header = 'Albums';
        vm.$onInit = onInit;

        activate();

        ////////////

        function activate() {
            // Resolve start-up logic
        }

        function onInit() {
            // Initialization logic that relies on bindings being present
            // should be put in this method, which is guarranteed to
            // always be called after the bindings have been assigned.
        }
    }

})();