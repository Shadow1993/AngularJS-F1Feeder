(function() {

    'use strict';

    var app = angular.module('app');

    app.controller('TeamController', ['DataService', '$stateParams', TeamController]);

    function TeamController(DataService, $stateParams) {

        var vm = this;

        vm.nameFilter = null;

        vm.year = 2013;

        vm.id = $stateParams.id;

        vm.test = 'test';

        console.log('TEAM');

        DataService.getTeamDetails(vm.year, vm.id)
            .then(function(response) {
                console.log(response);
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
