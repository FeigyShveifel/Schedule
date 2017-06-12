(function () {
    'use strict';

    angular
        .module('SlApp')
        .controller('indexctrl', indexctrl);

    indexctrl.$inject = ['$scope','$location'];

    function indexctrl($scope,$location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'index';
        $scope.Route = function (name)
        {
            $location.path(name);
        };
        activate();

        function activate() { }
    }
})();
