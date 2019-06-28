(function () {
    'use strict';

    function PhoneController($scope, $http, $state, $window) {

        $scope.login = {};

        $scope.list = [];
        $scope.text = '';
        $scope.password = '';
        $scope.submit = function (form) {
            if ($scope.text) {
                $scope.list.push($scope.text,$scope.password);
                $scope.text = '';
                $scope.password = '';
                debugger;
            }
            debugger;
        };

        debugger;

    }

    angular.module('p-app')
        .component('phonebook', {
            templateUrl: 'phonebook/phonebook.template.html',
            controller: ['$scope', '$http', '$window', PhoneController]
        })
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('phonebook', {
                url: '/',
                template: '<phonebook></phonebook>'
            });
        }]);
})();