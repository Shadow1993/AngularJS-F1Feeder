(function() {

    'use strict';

    var app = angular.module('app');

    app.controller('ResultsController', ['DataService', '$stateParams', ResultsController]);

    function ResultsController(DataService, $stateParams) {

        var vm = this;

        vm.year = $stateParams.year;

        vm.id = $stateParams.id;

        vm.test = 'test';

        DataService.getQualifiers(vm.year, vm.id)
            .then(function(response) {
                vm.qualify = response.data.MRData.RaceTable.Races[0];
            })
            .catch(function(response) {
                throw response;
            });

        DataService.getResults(vm.year, vm.id)
            .then(function(response) {
                vm.results = response.data.MRData.RaceTable.Races[0];
            })
            .catch(function(response) {
                throw response;
            });

        vm.getTime = function(driver) {
            if (driver.Q4) {
                return driver.Q4;
            } else if (driver.Q3) {
                return driver.Q3;
            } else if (driver.Q2) {
                return driver.Q2;
            } else if (driver.Q1) {
                return driver.Q1;
            } else {
                return 'No Results';
            }
        };

    }
}());
