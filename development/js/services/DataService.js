(function() {
    'use strict';

    var app = angular.module('app');

    app.factory('DataService', ['$http', DataService]);

    function DataService($http) {

        var AllDrivers = function(year) {
            return $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/' + year + '/driverStandings.json'
            });
        };

        var DriverDetails = function(year, id) {
            return $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/' + year + '/drivers/' + id + '/driverStandings.json'
            });
        };

        var DriverRaces = function(year, id) {
            return $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/' + year + '/drivers/' + id + '/results.json'
            });
        };

        var AllTeams = function(year) {
            return $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/' + year + '/constructorStandings.json'
            });
        };

        var TeamDetails = function(year, id) {
            return $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/' + year + '/constructors/' + id + '/constructorStandings.json'
            });
        };

        var TeamResults = function(year, id) {
            return $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/' + year + '/constructors/' + id + '/results.json'
            });
        };

        var AllRaces = function(year) {
            return $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/' + year + '/results/1.json'
            });
        };

        var Qualifiers = function(year, id) {
            return $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/' + year + '/' + id + '/qualifying.json'
            });
        };

        var Results = function(year, id) {
            return $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/' + year + '/' + id + '/results.json'
            });
        };

        return {
            getDrivers: AllDrivers,
            getDriverDetails: DriverDetails,
            getDriverRaces: DriverRaces,
            getTeams: AllTeams,
            getTeamDetails: TeamDetails,
            getTeamResults: TeamResults,
            getRaces: AllRaces,
            getQualifiers: Qualifiers,
            getResults: Results
        };
    }
}());
