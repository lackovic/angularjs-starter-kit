// albums.controller.js
(function () {
    'use strict';

    angular
        .module('app')
        .component('album', {
            controller: 'AlbumController',
            controllerAs: 'vm',
            templateUrl: 'app/albums/album/album.html',
            bindings: {
                album: '='
            }
        });

})();