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
                url: 'http://ergast.com/api/f1/' + year + '/constructors.json'
            });
        };

        var TeamDetails = function(year, id) {
            return $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/' + year + '/constructors/' + id + '.json'
            });
        };

        var AllRaces = function(year) {
            return $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/' + year + '.json'
            });
        };

        return {
            getDrivers: AllDrivers,
            getDriverDetails: DriverDetails,
            getDriverRaces: DriverRaces,
            getTeams: AllTeams,
            getTeamDetails: TeamDetails,
            getRaces: AllRaces
        };
    }
}());
