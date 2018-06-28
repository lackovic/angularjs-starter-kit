// albums.controller.js
(function () {
    'use strict';

    angular
        .module('app')
        .controller('AlbumsController', AlbumsController);

    function AlbumsController(apiBase, $http) {
        var vm = this;
        vm.$onInit = onInit;
        vm.albums = null;
        vm.header = 'Albums';

        activate();

        ////////////

        function activate() {
            // Resolve start-up logic
            $http.get(apiBase + 'albums')
                .then(function (response) {
                    vm.albums = response;
                });
        }

        function onInit() {
            // Initialization logic that relies on bindings being present
            // should be put in this method, which is guarranteed to
            // always be called after the bindings have been assigned.
        }
    }

})();