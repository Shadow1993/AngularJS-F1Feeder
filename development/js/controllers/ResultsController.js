(function() {

    'use strict';

    var app = angular.module('app');

    app.controller('ResultsController', ['DataService', '$stateParams', ResultsController]);

    function ResultsController(DataService, $stateParams) {

        var vm = this;

        vm.year = 2013;

        vm.id = $stateParams.id;

        vm.test = 'test';

        DataService.getQualifiers(vm.year, vm.id)
            .then(function(response) {
                vm.qualify = response.data.MRData.RaceTable.Races[0];
                console.log(vm.qualify);
            })
            .catch(function(response) {
                throw response;
            });

    }
}());
