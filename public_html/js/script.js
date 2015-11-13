(function () {
    var app = angular.module("app", []);

    var MainController = function ($scope) {
        $scope.message = "Hello world!";
    };

    app.controller("MainController", ["$scope", MainController]);
}());

