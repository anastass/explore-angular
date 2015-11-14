(function () {
    var app = angular.module("app", []);

    var MainController = function ($scope, $http) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                    .then(onRepos, onError);
        };

        var onRepos = function (response) {
            $scope.repos = response.data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch data.";
        };

        $scope.search = function(username) {
            delete $scope.error;
            $http.get('https://api.github.com/users/' + username)
                    .then(onUserComplete, onError);
        };
        
        $scope.username = "angular";
        $scope.message = "GitHub Viewer";
        $scope.repoSortOrder = "";
    };
    
    app.controller("MainController", ["$scope", "$http", MainController]);
}());

