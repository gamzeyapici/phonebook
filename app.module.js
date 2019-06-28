'use strict';
(function () {
    angular.module('p-app', [
        'ui.router',
        'ngResource'
    ])
        .run(function () { })
        .component('product', {
            template: "<div>{{product}}</div>, <div>product</div>",
            controller: function ($scope) {

                $scope.product = "productComponentElement";

            }
        })
})();
