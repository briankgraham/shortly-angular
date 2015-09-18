angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function () {
    // check url
     Links.addLink( $scope.link )
      .then( function ( resp ) {
        console.log("it's IN!");
        $scope.link = '';
      })
      .catch( function ( err ) {
        console.log( 'scope stuff', $scope.link );
        console.log('could nor add link ', err);
      });
    };
});
