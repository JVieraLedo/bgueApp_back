(function (angular) {
    'use strict';

    /**
     * Route configuration for the bgueAdmin module.
     */
    angular
        .module('bgueAdmin')
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                // For unmatched routes
                $urlRouterProvider.otherwise('/');

                // Application routes
                $stateProvider
                    .state('dashboard', {
                        custom: 'Dashboard',
                        url: '/Dashboard',
                        views: {
                            "menu": {
                                templateUrl: 'templates/menu.html',
                                controller: 'MenuCtrl',
                                controllerAs: 'menuCtrl'
                            },
                            "header": {
                                templateUrl: 'templates/header.html',
                                controller: 'HeaderCtrl',
                                controllerAs: 'headCtrl'
                            },
                            "container": {
                                templateUrl: 'templates/dashboard.html',
                                controller: 'DashboardCtrl',
                                controllerAs: 'dashCtrl'
                            }
                        }
                    })
                    .state('tables', {
                        custom: 'Tablas',
                        url: '/Tables',
                        views: {
                            "menu": {
                                templateUrl: 'templates/menu.html',
                                controller: 'MenuCtrl',
                                controllerAs: 'menuCtrl'
                            },
                            "header": {
                                templateUrl: 'templates/header.html',
                                controller: 'HeaderCtrl',
                                controllerAs: 'headCtrl'
                            },
                            "container": {
                                templateUrl: 'templates/tables.html',
                                controller: 'ProductsCtrl',
                                controllerAs: 'productCtrl'
                            }
                        }
                    });
            }
        ]);
    angular.module('bgueAdmin').run(['$state',
        function ($state) {
            $state.go('dashboard');
        }
    ]);
})(window.angular);