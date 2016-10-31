(function (angular) {
    'use strict';

    angular.module('bgueAdmin')
        .controller('IndexCtrl', ['$scope', '$cookieStore', '$window', IndexCtrl]);

    function IndexCtrl($scope, $cookieStore, window) {
        var vm = this;
        var mobileView = 992;

        vm.getWidth = function () {
            return window.innerWidth;
        };

        $scope.$watch(vm.getWidth, function (newValue, oldValue) {
            if (newValue >= mobileView) {
                if (angular.isDefined($cookieStore.get('toggle'))) {
                    vm.toggle = !$cookieStore.get('toggle');
                } else {
                    vm.toggle = true;
                }
            } else {
                vm.toggle = false;
            }
        });

        window.onresize = function () {
            $scope.$apply();
        };
    }

})(window.angular);