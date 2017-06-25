"use strict";

angular.module('app').controller('MainController', ['$scope', ($scope) => {
  $scope.page = 'home';

  $scope.route = function(page) {
    $scope.page = page;
  }

  $scope.show = function(page) {
    return $scope.page === page;
  }

  $scope.kits = [
    {
      cost: '12.00',
      id: 0,
      image: 'assets/lidget2.jpg',
      name: 'Lidget 1.0',
      description: 'The Ultimate Lego Compatible Fidget Spinner',
      sale: 'google.com'
    },
    {
      cost: '12.00',
      id: 1,
      image: 'assets/lidget2.jpg',
      name: 'Lidget 1.0',
      description: 'The Ultimate Lego Compatible Fidget Spinner',
      sale: 'google.com'
    }
  ]
}]);
