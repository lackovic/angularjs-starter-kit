// albums.component.js
(() => {

    angular
        .module('app')
        .component('albums', {
            controller: 'AlbumsController',
            controllerAs: 'vm',
            templateUrl: 'app/albums/albums.html'
        });

})();