(function()
{
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController );

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.Message = "";
        $scope.Dishes = "";
        $scope.DishesCount = 0;
        $scope.MessageStyle = "";
        $scope.InputBorderStyle = "";
        $scope.CheckCount = function(){
            if($scope.Dishes.length == 0)
            {
                $scope.Message = "Please enter data first";
                $scope.MessageStyle = {"color": "red"};
                $scope.InputBorderStyle = {"border": "1px", "border-style": "solid", "border-color": "red"};
            }
            else
            {
                var totalDishes = CalculateDishes($scope.Dishes);
                $scope.DishesCount = totalDishes;
                
                    
                if(totalDishes == -1)
                {
                    $scope.Message = "Empty dish found!";
                    $scope.MessageStyle = {"color": "red"};
                    $scope.InputBorderStyle = {"border": "1px", "border-style": "solid", "border-color": "red"};
                }
                else if(totalDishes > 0 && totalDishes<=3)
                {
                    $scope.Message = "Enjoy!";
                    $scope.MessageStyle = {"color": "green"};
                    $scope.InputBorderStyle = {"border": "1px", "border-style": "solid", "border-color": "green"};
                }
                else
                {
                    $scope.Message = "Too much!";
                    $scope.MessageStyle = {"color": "green"};
                    $scope.InputBorderStyle = {"border": "1px", "border-style": "solid", "border-color": "green"};
                }
            }
        };



        function CalculateDishes(str)
        {
            var emptyFound = false;
            var Dishes = str.split(',');
            for(var i =0 ;i<Dishes.length;i++)
            {
                if(Dishes[i].trim() == '')
                {
                    emptyFound = true;
                    return -1;
                }
            }
            return Dishes.length;
        };
    }
})();