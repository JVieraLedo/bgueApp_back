(function (angular) {
    'use strict';

    angular.module('bgueAdmin.controllers')
        .controller('IndexCtrl', IndexCtrl);
    
    IndexCtrl.$inject = ['$scope', '$localStorage', '$window'];

    function IndexCtrl($scope, localStorage, window) {
        var vm = this;
        var mobileView = 992;

        vm.getWidth = function () {
            return window.innerWidth;
        };

        $scope.$watch(vm.getWidth, function (newValue, oldValue) {
            if (newValue >= mobileView) {
                if (angular.isDefined(localStorage.toggle)) {
                    vm.toggle = !localStorage.toggle;
                    localStorage.$default({
                        toggle: vm.toggle
                    });
                    $scope.$broadcast('hover-menu', { toggle: $scope.vm.toggle });
                } else {
                    localStorage.$default({
                        toggle: false
                    });
                }
            } else {
                localStorage.$default({
                    toggle: false
                });
                vm.toggle = false;
                $scope.$broadcast('hover-menu', { toggle: $scope.vm.toggle });
            }
        });

        window.onresize = function () {
            $scope.$apply();
        };
    }

})(window.angular);