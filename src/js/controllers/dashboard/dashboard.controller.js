(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin.controllers')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', '$cookieStore'];

    function DashboardCtrl($scope, $cookieStore) {
        var vm = this;
        
    }

})(window.angular);