// item.component.js
(() => {

    angular
        .module('app')
        .component('item', {
            controller: 'ItemController',
            controllerAs: 'vm',
            templateUrl: 'app/shared/item/item.html',
            bindings: {
                item: '='
            }
        });

})();