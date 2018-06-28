// posts.controller.js
(function () {
    'use strict';

    angular
        .module('app')
        .controller('PostsController', PostsController);

    function PostsController(apiBase, $http) {
        var vm = this;
        vm.$onInit = onInit;
        vm.header = 'Posts';
        vm.posts = null;

        activate();

        ////////////

        function activate() {
            // Resolve start-up logic
            $http.get(apiBase + 'posts')
                .then(function (response) {
                    vm.posts = response.data;
                });
        }

        function onInit() {
            // Initialization logic that relies on bindings being present
            // should be put in this method, which is guarranteed to
            // always be called after the bindings have been assigned.
        }
    }

})();