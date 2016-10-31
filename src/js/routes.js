(function (angular) {
    'use strict';
    /**
     * @ngdoc directive
     * @name component.app
     * @description
     * Router Inicial de la aplicación
     */
    angular
        .module('bgueAdmin')
        .config(configBgueRoute)
        .run(run);


    configBgueRoute.$inject = ['$stateProvider', '$sceDelegateProvider', '$urlRouterProvider'];
    run.$inject = ['$state'];

    function configBgueRoute($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('home', {
                views: {
                    "sidebarContainer": {
                        templateUrl: 'templates/menu.html'
                    },
                    "contentContainer": {
                        templateUrl: 'templates/dashboard-index.html'
                    }
                }
            })
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            });
    }

    function run($state) {
        $state.go('home');
    }
    
})(window.angular);