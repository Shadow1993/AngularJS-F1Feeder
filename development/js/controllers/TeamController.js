(function() {

    'use strict';

    var app = angular.module('app');

    app.controller('TeamController', ['DataService', '$stateParams', TeamController]);

    function TeamController(DataService, $stateParams) {

        var vm = this;

        vm.year = $stateParams.year;

        vm.id = $stateParams.id;

        vm.test = 'test';

        DataService.getTeamDetails(vm.year, vm.id)
            .then(function(response) {
                vm.team = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0];
            })
            .catch(function(response) {
                throw response;
            });

        DataService.getTeamResults(vm.year, vm.id)
            .then(function(response) {
                vm.results = response.data.MRData.RaceTable;
            })
            .catch(function(response) {
                throw response;
            });

        vm.getTotal = function(index) {
            var total = 0;
            for (var i = 0; i < vm.results.Races[index].Results.length; i++) {
                var product = vm.results.Races[index].Results[i];
                total += Number(product.points);
            }
            return total;
        };

    }
}());
