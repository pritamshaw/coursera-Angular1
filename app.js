(function()
{
    'use strict';

    angular.module('myFirstApp', [])

    .controller('myFirstController', function($scope){
        $scope.Name = "";
        $scope.TotalNumeric = 0;
        $scope.getNumeric = function(){
            var totalNumeric = CalculateNumeric($scope.Name);
            $scope.TotalNumeric = totalNumeric;
        };

        function CalculateNumeric(string)
        {
            var totalStringValue = "";
            for(var i=0; i<string.length;i++)
            {
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        };
    });

})();