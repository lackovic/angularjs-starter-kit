// app.module.js
(function () {
    'use strict';

    angular.module('app').config(function ($stateProvider) {
        var states = [{
            name: 'home',
            url: '',
            template: '<home></home>'
        }, {
            name: 'home2',
            url: '/',
            template: '<home></home>'
        }, {
            name: 'page1',
            url: '/page1',
            template: '<page1></page1>'
        }, {
            name: 'page2',
            url: '/page2',
            template: '<page2></page2>'
        }];
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });

})(); 