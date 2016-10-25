﻿app = angular.module('HangmanApp');
app.controller('CategoriesDetailsController', function ($scope, $interval, $window) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.randomword = [];
    $scope.displayedWord = [];
    $scope.totalLives = 10;
    $scope.remainingLives = 10;
    $scope.category = "Sports";
    $scope.level = "Medium";
    $scope.complete = false;
    $scope.disableAllButtons = false;

    $scope.onImageClick = function (id) {
        if (checkLevelSelected()) {
            //redirect to /Categories/Details/" + id + "level=" + $scope.level;
        }


    };

    $scope.clickedButtons = [];
    $scope.clickedButtonsList = [];

    $scope.displayVariable = function () {
        var element = document.getElementById("selectedrandomword");
        if(element)
        {
            var text = element.innerHTML;
            if (text)
            {
                $scope.myVariable = text.trim().toUpperCase();
                console.log($scope.myVariable);
                element.innerHTML = "";
                $scope.wordLength = $scope.myVariable.length;
                var str = "";
                for(var i=0; i < $scope.wordLength; i++)
                {
                    if ($scope.myVariable.charAt(i) == ' ' || $scope.myVariable.charAt(i) == '-') {
                        $scope.randomword[i] = { value: $scope.myVariable.charAt(i) };
                    } else {
                        $scope.randomword[i] = { value: "_" };
                    }
                    //$scope.randomword[i] = { value: "_", found: false};
                    $scope.displayedWord[i] = $scope.myVariable.charAt(i);
                }
                $interval.cancel(stop);
            }            
        }
        

    };

    var stop = $interval($scope.displayVariable, 100);
    

    $scope.keybordrows = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z','X','C','V','B','N','M']];

    $scope.recordClick = function (alphabet) {
        var found = false;
        for (var i = 0; i < $scope.wordLength ; i++)
        {
            if ($scope.myVariable.charAt(i) == alphabet)
            {                
                $scope.randomword[i].value = alphabet;
                $scope.randomword[i].found = true;
                found = true;
            }
            
            /*var clickedButtonsList = _.map($scope.clickedButtons, function (clickedButton) {
                return clickedButton.value;
            });
            
            if (_.contains(clickedButtonsList,alphabet))
            {
                

                console.log("clickedButtons: " + clickedButtons);
            }*/
            
        }
        $scope.clickedButtons.push({
            value: alphabet,
            found: found
        });
        $scope.clickedButtonsList = _.map($scope.clickedButtons, function (clickedButton) {
            return clickedButton.value;
        });
        if (!found)
        {
            $scope.remainingLives--;
        }
        $scope.complete = false;
        var matchCount = 0;
        for (var j = 0; j < $scope.randomword.length; j++)
        {
            if($scope.randomword[j].value == $scope.displayedWord[j])
            {
                matchCount++;
            }
        }
        if (matchCount == $scope.randomword.length)
        {
            $scope.complete = true;
        }
        if ($scope.complete)
        {
            $scope.game = {
                message: "You Win!",
                status: "won",
                class: 'text-success'
            }
            $scope.disableAllButtons = true;
            console.log("You Win!");
        }
        if($scope.remainingLives == 0)
        {
            $scope.game = {
                message: "You Lose!",
                status: "lost",
                class: 'text-danger'
            }
            $scope.disableAllButtons = true;
            for (var i = 0; i < $scope.wordLength; i++) {
                if ($scope.randomword[i].value != $scope.displayedWord[i]) {
                    $scope.randomword[i].value = $scope.displayedWord[i];
                }                 
            }
            console.log("You Lose!");
        }
    };

    $scope.replay = function () {
        $window.location.reload();
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