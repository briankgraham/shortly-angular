angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {
    text: ''
  };

  $scope.success = true;
  $scope.fail = true;

  $scope.addLink = function () {
    // check url
    $scope.hasError = false;
     Links.addLink( $scope.link.text )
      .then( function ( resp ) {
        console.log("it's IN!");
        $scope.link.text = '';
        $scope.success = false;
        $scope.fail = true;
      })
      .catch( function ( err ) {
        $scope.fail = false;
        $scope.success = true;
      });
    };
});
