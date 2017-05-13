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

        var DriverDetails = function() {
            return $http({
                method: 'GET',
                url: ''
            });
        };

        return {
            getDrivers: AllDrivers,
            getDriver: DriverDetails
        };
    }
}());
