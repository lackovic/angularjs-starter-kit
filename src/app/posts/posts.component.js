// posts.component.js
(function () {
    'use strict';

    angular
        .module('app')
        .component('posts', {
            controller: 'PostsController',
            controllerAs: 'vm',
            templateUrl: 'app/posts/posts.html'
        });

})();