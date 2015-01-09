'use strict';

angular.module('myApp.adsList', ['ngResource', 'ngRoute'])
  .factory('Ads', [
    '$resource',
    function ($resource) {
      return $resource(
        'http://softuni-ads.azurewebsites.net/api/Ads',
        {},
        {
          query: {
            method: 'GET',
            isArray: false
          }
        }
      );
    }
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/adsList/list.html',
      controller: 'adsList'
    });
  }])
  .controller('adsList', ['$scope', 'Ads', function($scope, Ads) {
    $scope.ads = Ads.query();
  }]);
