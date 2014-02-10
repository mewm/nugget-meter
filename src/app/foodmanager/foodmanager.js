/* jshint -W097 */
'use strict';

var foodManager = angular.module('nuggetMeterApp.foodManager',[
	'nuggetMeterApp.foodService',
	'ngTouch'
]);

foodManager.controller('FoodManagerController', ['$scope', 'foodService', function($scope, foodService) {

	$scope.foods = foodService.getAll();

	$scope.removeFood = function(food) {

		var idx = $scope.foods.indexOf(food);
		foodService.remove(idx);
		$scope.foods.splice(idx, 1);

	};


	$scope.addNewFood = function() {
		foodService.add($scope.newFood);
		$scope.foods = foodService.getAll();
	};

	$scope.intervals = [];
	for(var i = 1; i <= 120; i++) {
		$scope.intervals.push(i);
	}

	$scope.submit = function() {
		$scope.newFood.cooking_time = null;
		$scope.newFood.name = '';
		$scope.foodForm.$setPristine();
	};


}]);