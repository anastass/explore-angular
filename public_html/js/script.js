(function () {
    var app = angular.module("app", []);

    var MainController = function ($scope, $http) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the user";
        };

        $http.get("https://api.github.com/users/jgarcial")
                .then(onUserComplete, onError);
    };

    app.controller("MainController", ["$scope", "$http", MainController]);
}());

