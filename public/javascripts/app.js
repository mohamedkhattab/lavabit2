var mailClient = angular.module('mailClient', []);

mailClient.controller('inboxController', ['$scope', '$http', function($scope, $http) {
    $scope.id = $("#_id").val();
    $scope.inbox = [];
    $http({
        method: 'GET',
        url: '/user/fetch/' + $scope.id,
    }).then(function successCallback(response) {
        $scope.inbox = response.data.inbox;
    }, function errorCallback(response) {
        console.log(response);
    });

    console.log($scope.id);
}]);
