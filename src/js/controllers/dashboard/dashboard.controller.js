(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin.controllers')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', '$filter', 'dataService'];

    function DashboardCtrl($scope, $filter, dataService) {
        var vm = $scope;

        vm.orders = [];

        dataService.getDataBBDD('orders').then(
            function (response) {
                var orders = [];
                Object.keys(response.val()).forEach(function(key) {
                    orders.push({key: key, value: response.val()[key]});
                });
                $scope.orders = orders;
                console.log($scope.orders);
            }
        );


        
    }

})(window.angular);