// Copyright (c) Microsoft. All rights reserved.  Licensed under the MIT license. See LICENSE file in the project root for full license information.

(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin',
            [
                'ui.bootstrap',
                'ui.router',
                'ngCookies',
                'bgueAdmin.controllers']
        );

    angular
        .module('bgueAdmin.controllers', []);

})(window.angular);