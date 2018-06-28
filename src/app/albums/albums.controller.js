// albums.controller.js
(function () {
    'use strict';

    angular
        .module('app')
        .controller('AlbumsController', AlbumsController);

    function AlbumsController() {
        var vm = this;
        vm.header = 'Albums';

        activate();

        ////////////

        function activate() {
            // Resolve start-up logic
        }

    }

})();