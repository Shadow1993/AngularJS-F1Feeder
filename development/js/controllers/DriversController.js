(function() {

    'use strict';

    var app = angular.module('app');

    app.controller('DriversController', ['DataService', DriversController]);

    function DriversController(DataService) {

        var vm = this;

        vm.nameFilter = null;

        vm.year = 2013;

        vm.test = 'test';

        DataService.getDrivers(vm.year)
            .then(function(response) {
                vm.drivers = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            })
            .catch(function(response) {
                throw response;
            });

        vm.searchFilter = function(driver) {
            var keyword = new RegExp(vm.nameFilter,'i');
            return !vm.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
        };

    }
}());
