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
                    templateUrl: './../templates/navigation.html',
                    controller: 'NavigationController',
                    controllerAs: 'nav'
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
            url: '/drivers/{year}',
            controller: 'DriversController',
            controllerAs: 'drivers',
            templateUrl: './../templates/drivers.html'
        })
        .state('main.driver', {
            url: '/drivers/{year}/{id}',
            templateUrl: './../templates/driver.html',
            controller: 'DriverController',
            controllerAs: 'driver'
        })
        .state('main.teams', {
            url: '/teams/{year}',
            templateUrl: './../templates/teams.html',
            controller: 'TeamsController',
            controllerAs: 'teams'
        })
        .state('main.team', {
            url: '/teams/{year}/{id}',
            templateUrl: './../templates/team.html',
            controller: 'TeamController',
            controllerAs: 'team'
        })
        .state('main.races', {
            url: '/races/{year}',
            templateUrl: './../templates/races.html',
            controller: 'RacesController',
            controllerAs: 'races'
        })
        .state('main.results', {
            url: '/races/{year}/{id}',
            templateUrl: './../templates/results.html',
            controller: 'ResultsController',
            controllerAs: 'results'
        });

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/drivers/2013');

});
