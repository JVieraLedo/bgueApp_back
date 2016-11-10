(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin.controllers')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', '$cookieStore', 'dataService'];

    function DashboardCtrl($scope, $cookieStore, dataService) {
        var vm = this;

        dataService.getDataBBDD('orders').then(
            function (response) {
                vm.orders = response.val();
                console.log(vm.orders);
            }
        );
        
    }

})(window.angular);