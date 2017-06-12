(function () {
    'use strict';

    angular
        .module('SlApp.home')
        .controller('homectrl', homectrl);

    homectrl.$inject = ['$scope','$location'];

    function homectrl($scope,$location) {
     
        $scope.title = 'home';
        $scope.isEnter = false;
        $scope.Enter = false;
        
        $scope.SaveEnter = function (entertime) {
            
            if ($scope.Exit == false) {
                localStorage.setItem(localStorage.length + 1, JSON.stringify({ date: new Date(), time: entertime, status: 'Enter' }));
                $scope.start = new Date(entertime);
                $scope.isEnter = false;
                $scope.Exit = false;
                $scope.Enter = true;
                
            }
            else {
                $scope.sumh = new Date(entertime).getHours() - $scope.start.getHours();
                if ($scope.sumh < 0)
                    alert("enter correct time");
                else {
                    localStorage.setItem(localStorage.length + 1, JSON.stringify({ date: new Date(), time: entertime, status: 'Exit',sumhour:$scope.sumh }));
                    $scope.isEnter = false;
                    $scope.Exit = false;
                    $scope.Enter = false;
                }
 
            }
$scope.show = !$scope.show;
        };

        

    }
})();
