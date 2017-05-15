(function() {

    'use strict';

    var app = angular.module('app');

    app.controller('TeamsController', ['DataService', TeamsController]);

    function TeamsController(DataService) {

        var vm = this;

        vm.nameFilter = null;

        vm.year = 2013;

        vm.test = 'test';

        DataService.getTeams(vm.year)
            .then(function(response) {
                vm.teams = response.data.MRData.ConstructorTable;
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
