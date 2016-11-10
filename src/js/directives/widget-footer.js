(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin')
        .directive('rdWidgetFooter', rdWidgetFooter);

    function rdWidgetFooter() {
        return {
            requires: '^rdWidget',
            transclude: true,
            template: '<div class="widget-footer" ng-transclude></div>',
            restrict: 'E'
        };
    }
})(window.angular);