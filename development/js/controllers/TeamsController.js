(function() {

    'use strict';

    var app = angular.module('app');

    app.controller('TeamsController', ['DataService', '$stateParams', TeamsController]);

    function TeamsController(DataService, $stateParams) {

        var vm = this;

        vm.nameFilter = null;

        vm.year = $stateParams.year;

        vm.test = 'test';

        DataService.getTeams(vm.year)
            .then(function(response) {
                vm.teams = response.data.MRData.StandingsTable.StandingsLists[0];
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
