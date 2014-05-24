// global ctrlers
var candy = angular.module('candy', ['store'])

.controller('search', function($scope, Store) {
  $scope.fetch = function() {
    // console.log($scope.search.keyword)
  }
})

.controller('boardsNav', function($scope, Store) {
  $scope.status = {}
  $scope.status.show = false;
  $scope.list = function() {
    if (!$scope.status.show) {
      if (!$scope.boards) {
        // $scope.arrow = 'icon-spinner icon-spin';
        Store.board.get({}, function(result) {
          if (result.stat !== 'ok') return false;
          $scope.boards = result.boards;
          $scope.status.show = true;
          // $scope.arrow = 'icon-circle-arrow-up';
        });
      } else {
        $scope.status.show = true;
        // $scope.arrow = 'icon-circle-arrow-up';
      }
    } else {
      $scope.status.show = false;
      // $scope.arrow = 'icon-circle-arrow-down';
    }
  }
});