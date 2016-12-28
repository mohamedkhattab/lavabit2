var mailClient = angular.module('mailClient', []);

mailClient.controller('inboxController', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.id = $("#_id").val();
    $scope.inbox = [];
    $scope.message = {};
    $scope.mail = {
        "from": "",
        "to": "",
        "subject": "",
        "text": ""
    }

    $http({
        method: 'GET',
        url: '/user/fetch/' + $scope.id,
    }).then(function successCallback(response) {
        $scope.inbox = response.data.inbox;
    }, function errorCallback(response) {
        console.log(response);
    }); 

    console.log($scope.id);

    $scope.fetchMsg = function(_msgid) {
        $http({
            method: 'GET',
            url: '/user/fetchmsg/' + _msgid,
        }).then(function successCallback(response) {
            $scope.message = response;
        }, function errorCallback(response) {
            console.log(response);
        }); 
    };

    $scope.sendMail = function() {
        console.log("hellow ordl")
        $http.post('/user/send/' + $scope.id, {
            "from": $scope.mail.from,
            "to": $scope.mail.to,
            "subject": $scope.mail.subject,
            "text": $scope.mail.text
        }, {}).then(function successCallback(response) {
            $scope.message = response;
        }, function errorCallback(response) {
            console.log(response);
        });
    };

    $scope.logout = function() {
        $http.post('/user/logout', {}, {})
        .then(function successCallback(response) {
            $window.location.href = '/';
        }, function errorCallback(response) {
            console.log(response);
        });
    };

}]);