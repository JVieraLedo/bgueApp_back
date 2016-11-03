(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin')
        .directive('hover', hover);

    hover.$inject = ['$state'];
    function hover(state) {
        return {
            restrict: 'AE',
            link: function (scope, elm, attr) {
                getCaseElement(scope.$parent.menuCtrl.toggle);

                scope.$on('hover-menu', function (event, args) {
                    getCaseElement(args.toggle);
                });

                function getCaseElement(toggle) {
                    switch (toggle) {
                        case true:
                            if (state.current.name === scope.menu.sref) {
                                elm.addClass('hover-menu');
                                elm.find('span').removeClass('hover-menu');
                            }
                            break;
                        case false:
                            if (state.current.name === scope.menu.sref) {
                                elm.find('span').addClass('hover-menu');
                                elm.removeClass('hover-menu');
                            }
                            break;
                    }
                }
            }
        };
    }

})(window.angular);