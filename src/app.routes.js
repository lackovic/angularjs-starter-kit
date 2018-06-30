// app.module.js
(function () {
    'use strict';

    angular.module('app')

        .config(function ($stateProvider, $urlRouterProvider) {
            var states = [{
                name: 'home',
                url: '',
                template: '<home></home>',
                data: {
                    pageTitle: 'Home'
                }
            }, {
                name: 'albums',
                url: '/albums',
                template: '<albums></albums>',
                data: {
                    pageTitle: 'Albums'
                }
            }, {
                name: 'posts',
                url: '/posts',
                template: '<posts></posts>',
                data: {
                    pageTitle: 'Posts'
                }
            }];
            states.forEach(function (state) {
                $stateProvider.state(state);
            });
            $urlRouterProvider.when('/', ['$state', '$match', function ($state, $match) {
                $state.go('home');
            }]);
        })

        .run(
            ['$rootScope', '$state', '$stateParams',
                function ($rootScope, $state, $stateParams) {
                    // It's very handy to add references to $state and $stateParams to the $rootScope
                    // so that you can access them from any scope within your applications.For example,
                    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
                    // to active whenever 'contacts.list' or one of its decendents is active.
                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams;
                }
            ]
        );

})();