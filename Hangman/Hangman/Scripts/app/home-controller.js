app = angular.module('HangmanApp');
app.controller('HomeController', function ($scope,$window) {
    $scope.level = 1;

    $scope.redirect = function (category) {
        $window.location.href = '/Categories/Details/' + category + '?level=' + $scope.level;
    };
});