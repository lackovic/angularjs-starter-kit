// albums.service.js
(function () {
    'use strict';

    angular
        .module('app')
        .factory('albumsService', AlbumsService);

    function AlbumsService(apiBase, $http) {

        return {
            getAlbums: getAlbums
        };

        ////////////

        function getAlbums() {
            return $http
                .get(apiBase + 'albums', {
                    cache: true
                })
                .then(function (response) {
                    return response.data;
                });
        }

    }

})();