(function() {

    'use strict';

    var app = angular.module('app');

    app.controller('NavigationController', ['$state', NavigationController]);

    function NavigationController($state) {

        var vm = this;

        vm.test = 'test';

        vm.updateState = function() {
            $state.go($state.current.name, {year: vm.year});
        };

        vm.yearList = [
            2000,
            2001,
            2002,
            2003,
            2004,
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017
            ];

    }
}());
