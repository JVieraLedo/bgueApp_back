(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin')
        .directive('rdWidgetFooter', rdWidgetFooter);

    function rdWidgetFooter() {
        var directive = {
            requires: '^rdWidget',
            transclude: true,
            template: '<div class="widget-footer" ng-transclude></div>',
            restrict: 'E'
        };
        return directive;
    };

})(window.angular);