(function (angular) {
    'use strict';

    angular.module('bgueAdmin.controllers')
        .controller('HeaderCtrl', HeaderCtrl);

    HeaderCtrl.$inject = ['$state'];

    function HeaderCtrl($state) {
        var vm = this;
        vm.state = $state.current.custom;
    }

})(window.angular);