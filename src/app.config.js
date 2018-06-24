// app.config.js
(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './app/home.html',
                data: {
                    title: 'Home'
                }
            })
            .when('/page1', {
                templateUrl: './app/page1/page1.html',
                data: {
                    title: 'Page 1'
                }
            })
            .when('/page2', {
                templateUrl: './app/page2/page2.html',
                data: {
                    title: 'Page 2'
                }
            });
    }

})();