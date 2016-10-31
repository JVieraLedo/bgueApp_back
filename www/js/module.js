(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin',
            [
                'ui.bootstrap',
                'ui.router',
                'ngCookies',
                'bgueAdmin.directives',
                'bgueAdmin.controllers',
                'bgueAdmin.services'
            ]);
    angular
        .module('bgueAdmin.directives', []);
    angular
        .module('bgueAdmin.controllers', []);
    angular
        .module('bgueAdmin.services', [])

})(window.angular);
