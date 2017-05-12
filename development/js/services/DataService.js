(function() {
    'use strict';

    var app = angular.module('app');

    app.factory('DataService', ['$http', DataService]);

    function DataService($http) {

        var AllDrivers = function() {
            return $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/drivers.json'
            });
        };

        return {
            getDrivers: AllDrivers
        };
    }
}());
