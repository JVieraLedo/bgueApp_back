(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin')
        .directive('rdLoading', rdLoading);

    function rdLoading() {
        return {
            restrict: 'AE',
            template:
                '<div class="loading">' +
                '<div class="double-bounce1"></div>' +
                '<div class="double-bounce2"></div>' +
                '</div>'
        };
    }

})(window.angular);