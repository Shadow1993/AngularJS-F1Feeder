(function() {

    'use strict';

    var app = angular.module('app');

    app.controller('DriverController', ['DataService', DriverController]);

    function DriverController(DataService) {

        var vm = this;

        vm.test = 'test';

        DataService.getDrivers()
            .then(function(data) {
                vm.drivers = data;
                console.log(vm.drivers);
            })
            .catch(function(response) {
                throw response;
            });

    }
}());
