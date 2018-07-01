// posts.service.js
(function () {
    'use strict';

    angular
        .module('app')
        .factory('postsService', PostsService);

    function PostsService(apiBase, $http) {

        return {
            getPosts: getPosts
        };

        ////////////

        function getPosts() {
            return $http
                .get(apiBase + 'posts', {
                    cache: true
                })
                .then(function (response) {
                    return response.data;
                });
        }

    }

})();