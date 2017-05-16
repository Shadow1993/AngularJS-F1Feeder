(function() {

    'use strict';

    var app = angular.module('app');

    app.controller('RacesController', ['DataService', RacesController]);

    function RacesController(DataService) {

        var vm = this;

        vm.nameFilter = null;

        vm.year = 2013;

        vm.test = 'test';

        DataService.getRaces(vm.year)
            .then(function(response) {
                console.log(response);
                vm.races = response.data.MRData.RaceTable;
            })
            .catch(function(response) {
                throw response;
            });

        vm.searchFilter = function(team) {
            var keyword = new RegExp(vm.nameFilter,'i');
            return !vm.nameFilter || keyword.test(team.name) || keyword.test(team.nationality);
        };

    }
}());
