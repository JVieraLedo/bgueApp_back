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

    angular
        .module('bgueAdmin')

        .constant('MENU',
            [
                {sref: 'index', name: 'Dashboard', icon:'fa-tachometer'},
                {sref: 'tables', name: 'Pedidos', icon:'fa-table'},
                {sref: 'tables', name: 'Productos', icon:'fa-server'}
            ]
        );

})(window.angular);