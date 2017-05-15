(function() {

    'use strict';

    var app = angular.module('app');

    app.controller('DriverController', ['DataService', '$stateParams', DriverController]);

    function DriverController(DataService, $stateParams) {

        var vm = this;

        vm.year = 2013;

        vm.id = $stateParams.id;

        vm.test = 'test';

        DataService.getDriverDetails(vm.year, vm.id)
            .then(function(response) {
                vm.driver = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
            })
            .catch(function(error) {
                throw error;
            });

        DataService.getDriverRaces(vm.year, vm.id)
            .then(function(response) {
                vm.races = response.data.MRData.RaceTable.Races;
            })
            .catch(function(error) {
                throw error;
            });

    }
}());
