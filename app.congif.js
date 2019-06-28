(function () {
    angular.module('p-app')
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            
            $urlRouterProvider.otherwise('/');

            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');
        });
})();