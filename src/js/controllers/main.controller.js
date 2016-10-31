(function (angular) {
    'use strict';

    angular.module('bgueAdmin')
        .controller('MainCtrl', ['$scope', '$cookieStore', MainCtrl]);

    function MainCtrl($scope, $cookieStore) {
        var vm = this;

        vm.toggleSidebar = function () {
            $scope.vm.toggle = !$scope.vm.toggle;
            $cookieStore.put('toggle', $scope.vm.toggle);
        };
    }

})(window.angular);