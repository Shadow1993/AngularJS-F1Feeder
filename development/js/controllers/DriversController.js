(function() {

    'use strict';

    var app = angular.module('app');

    app.controller('DriversController', ['DataService', DriversController]);

    function DriversController(DataService) {

        var vm = this;

        vm.test = DataService.getData(function(data) {
                vm.data = data;
            })
        console.log(vm.data);

    }
}());
