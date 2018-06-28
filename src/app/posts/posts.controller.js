// posts.controller.js
(function () {
    'use strict';

    angular
        .module('app')
        .controller('PostsController', PostsController);

    function PostsController() {
        var vm = this;
        vm.header = 'Posts';

        activate();

        ////////////

        function activate() {
            // Resolve start-up logic
        }

    }

})();