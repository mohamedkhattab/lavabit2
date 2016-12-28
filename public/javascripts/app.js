var mailClient = angular.module('mailClient', []);

mailClient.controller('inboxController', ['$scope', function($scope) {
    $scope.result = [{
        from: "h@h.com",
        to: "r@r.com",
        subject: "afgwegwegw",
        text: "hello world!!!!!!"
    },
    {
        from: "h@h.com",
        to: "r@r.com",
        subject: "afgwegwegw",
        text: "hello world!!!!!!"
    },
    {
        from: "h@h.com",
        to: "r@r.com",
        subject: "afgwegwegw",
        text: "hello world!!!!!!"
    },
    {
        from: "h@h.com",
        to: "r@r.com",
        subject: "afgwegwegw",
        text: "hello world!!!!!!"
    }];

    $scope.matata = "hakuna matata";
}]);
