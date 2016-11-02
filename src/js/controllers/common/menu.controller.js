(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin.controllers')
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$scope', '$cookieStore', 'MENU'];

    function MenuCtrl($scope, $cookieStore, MENU) {
        var vm = this;

        vm.toggleSidebar = function () {
            $scope.vm.toggle = !$scope.vm.toggle;
            $cookieStore.put('toggle', $scope.vm.toggle);
        };

        vm.listMenu = MENU;
    }

})(window.angular);