(function() {
    'use strict';

    var app = angular.module('app');

    app.factory('DataService', ['$http', '$q', DataService]);

    function DataService($http) {

        // var deferred = $q.defer();

        var AllData = function(successcb) {
            $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/drivers.json'
            })
            .success(function(data) {
                successcb(data);
                console.log(data);
                // deferred.resolve(data);
            });
        };

        return {
            getData: AllData
        };
    }
}());
