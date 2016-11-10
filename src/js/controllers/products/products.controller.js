(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin.controllers')
        .controller('ProductsCtrl', ProductsCtrl);

    ProductsCtrl.$inject = ['$scope', '$cookieStore'];

    function ProductsCtrl($scope, $cookieStore) {
        var vm = this;
        
    }

})(window.angular);