(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$cookieStore'];

    function MainCtrl($scope, $cookieStore) {
        var vm = this;
        
    }

})(window.angular);