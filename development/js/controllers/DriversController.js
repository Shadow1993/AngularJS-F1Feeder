(function() {

    'use strict';

    var app = angular.module('app');

    app.controller('DriversController', ['DataService', DriversController]);

    function DriversController(DataService) {

        var vm = this;

        vm.year = 2013;

        vm.test = 'test';

        DataService.getDrivers(vm.year)
            .then(function(response) {
                console.log(response);
                vm.drivers = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                console.log(vm.drivers);
            })
            .catch(function(response) {
                throw response;
            });

    }
}());
