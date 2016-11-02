(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$cookieStore'];

    function MainCtrl($scope, $cookieStore) {
        var vm = this;

        vm.toggleSidebar = function () {
            $scope.vm.toggle = !$scope.vm.toggle;
            $cookieStore.put('toggle', $scope.vm.toggle);
        };
    }

})(window.angular);