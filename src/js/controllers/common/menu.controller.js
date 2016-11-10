(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin.controllers')
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$scope', 'MENU', '$localStorage'];

    function MenuCtrl($scope, MENU, localStorage) {
        var vm = this;
        vm.toggle = $scope.vm.toggle;

        vm.toggleSidebar = function () {
            $scope.vm.toggle = !$scope.vm.toggle;
            localStorage.$default({
                toggle: $scope.vm.toggle
            });
            $scope.$broadcast('hover-menu', { toggle: $scope.vm.toggle });
        };

        vm.listMenu = MENU;
    }

})(window.angular);