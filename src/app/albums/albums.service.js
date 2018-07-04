// albums.service.js
(() => {
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
                .then(response => {
                    return response.data;
                });
        }

    }

})();