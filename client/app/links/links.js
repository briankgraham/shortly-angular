angular.module('shortly.links', [])

.controller('LinksController', function ( $scope, Links) {
  $scope.data = {};
  $scope.addLink = function ( link ) {
    Links.addLink(link)
      .then(function (resp) {
        console.log(resp);
      });
      $scope.data.links.push(link);
    };
    $scope.getLinks = function () {
    Links.getLinks()
      .then(function (resp) {
        //fetch server
        $scope.data.links = resp.data;
      });
  };
  $scope.getLinks();
});
