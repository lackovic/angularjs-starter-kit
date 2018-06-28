// app.module.js
(function () {
    'use strict';

    const appModule = angular.module('app');

    appModule.value('debuggingBorder', true);
    appModule.value('apiBase', 'https://jsonplaceholder.typicode.com/');

    appModule.config(function ($stateProvider, $urlRouterProvider) {
        var states = [{
            name: 'home',
            url: '',
            template: '<home></home>'
        }, {
            name: 'home2',
            url: '/',
            template: '<home></home>'
        }, {
            name: 'albums',
            url: '/albums',
            template: '<albums></albums>'
        }, {
            name: 'posts',
            url: '/posts',
            template: '<posts></posts>'
        }];
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
        $urlRouterProvider.when('/', ['$state', '$match', function ($state, $match) {
            $state.go('home');
        }]);
    });

})();