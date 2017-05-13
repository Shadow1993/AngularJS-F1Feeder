'use strict';

var app = angular.module('app', ['ui.router']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('index', {
            abstract: true,
            views: {
                '': {
                    templateUrl: './../templates/index.html'
                },
                'navigation@index': {
                    templateUrl: './../templates/navigation.html'
                },
                'main@index': {
                    templateUrl: './../templates/main.html'
                }
            }
        })
        .state('main', {
            abstract: true,
            parent: 'index',
            templateUrl: './../templates/main.html'
        })
        .state('main.drivers', {
            url: '/drivers',
            controller: 'DriversController',
            controllerAs: 'drivers',
            templateUrl: './../templates/drivers.html'
        })
        .state('main.driver', {
            url: '/drivers/{id}',
            templateUrl: './../templates/driver.html',
            controller: 'DriverController',
            controllerAs: 'driver'
        })
        .state('main.teams', {
            url: '/teams',
            templateUrl: './../templates/teams.html'
        })
        .state('main.races', {
            url: '/races',
            templateUrl: './../templates/races.html'
        });

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/drivers');

});
