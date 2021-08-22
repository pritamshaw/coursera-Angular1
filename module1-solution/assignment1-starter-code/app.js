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
        $scope.CheckCount = function(){
            if($scope.Dishes.length == 0)
            {
                $scope.Message = "Please enter data first";
            }
            else
            {
                var totalDishes = CalculateDishes($scope.Dishes);
                $scope.DishesCount = totalDishes;
                
                    
                if(totalDishes == -1)
                {
                    $scope.Message = "Empty dish found!";
                }
                else if(totalDishes > 0 && totalDishes<=3)
                {
                    $scope.Message = "Enjoy!";
                }
                else
                {
                    $scope.Message = "Too much!";
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