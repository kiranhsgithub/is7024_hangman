app = angular.module('HangmanApp');
app.controller('CategoriesDetailsController', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.onImageClick = function (id) {
        if (checkLevelSelected()) {
            //redirect to /Categories/Details/" + id + "level=" + $scope.level;
        }


    };

    function checkLevelSelected() {
        if ($scope.level == 1) {
            return true;
        }
        return false;

    }

    //ngclick="onImageClick(1)"
    //Checl if level is selected and redirect toURL
    //create one controller file inside /scripts/app
    //add ngclick for levels 
    //Check if Category is selected redirect to URL 
    //go to index.html and add data-ng-controller refer to /Categories/Details.cshtml

});