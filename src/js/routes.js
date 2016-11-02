(function (angular) {
    'use strict';

    /**
     * Route configuration for the bgueAdmin module.
     */
    angular.module('bgueAdmin').config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // For unmatched routes
            $urlRouterProvider.otherwise('/');

            // Application routes
            $stateProvider
                .state('index', {
                    url: '/dashboard',
                    views: {
                        "menu": {
                            templateUrl: 'templates/menu.html',
                            controller: 'MenuCtrl',
                            controllerAs: 'menuCtrl'
                        },
                        "header": {
                            templateUrl: 'templates/header.html',
                            controller: 'MainCtrl',
                            controllerAs: 'mainCtrl'
                        },
                        "container": {
                            templateUrl: 'templates/dashboard.html',
                            controller: 'MasterCtrl',
                            controllerAs: 'masterCtrl'
                        }
                    }
                })
                .state('tables', {
                    url: '/tables',
                    views: {
                        "menu": {
                            templateUrl: 'templates/menu.html',
                            controller: 'MenuCtrl',
                            controllerAs: 'menuCtrl'
                        },
                        "header": {
                            templateUrl: 'templates/header.html',
                            controller: 'MainCtrl',
                            controllerAs: 'mainCtrl'
                        },
                        "container": {
                            templateUrl: 'templates/tables.html',
                            controller: 'MasterCtrl',
                            controllerAs: 'masterCtrl'
                        }
                    }
                });
        }
    ]);
    angular.module('bgueAdmin').run(['$state',
        function ($state) {
            $state.go('index');
        }
    ]);
})(window.angular);