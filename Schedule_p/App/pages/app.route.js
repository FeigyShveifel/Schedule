/// <reference path="index.html" />
/// <reference path="index.html" />
/// <reference path="home/home.tmpl.html" />

(function () {
    'use strict';

    angular.module('SlApp.route').
    config(function ($routeProvider) {
        $routeProvider
            .when('/index', {
                controller: 'indexctrl',
                templateUrl: 'index.html'
            }).
        when('/home', {
            controller: 'homectrl',
            templateUrl: 'home/home.tmpl.html'
        }).
        when('/schedule', {
            controller: 'schedulectrl',
            templateUrl: 'schedule/schedule.tmpl.html'
        });
    });
})();