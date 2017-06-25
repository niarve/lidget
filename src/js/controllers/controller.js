"use strict";

angular.module('app').controller('MainController', ['$scope', ($scope) => {
  $scope.page = 'home';
  console.log('showing', $scope.show);

  $scope.route = function(page) {
    $scope.page = page;
  }

  $scope.show = function(page) {
    return $scope.page === page;
  }
}]);
