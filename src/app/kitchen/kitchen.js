/* jshint -W097 */
'use strict';

var kitchen = angular.module('nuggetMeterApp.kitchen',[
	'nuggetMeterApp.foodService'
]);


kitchen.controller('KitchenController', ['$scope', 'foodService', function($scope, foodService) {


	$scope.foods = foodService.getAll();

	foodService.updateRecipe([{}]);
	$scope.cook = foodService.getRecipe();


	$scope.addFoodToCook = function() {

		delete $scope.formError;

		if($scope.cook.indexOf($scope.prepareCook.foodItem) === -1) {

			$scope.cook.push($scope.prepareCook.foodItem);
			foodService.updateRecipe($scope.cook);

		} else {
			$scope.formError = {
				existsAlready: true
			};
		}
	};



	$scope.removeFood = function(food) {
		var idx = $scope.cook.indexOf(food);
		$scope.cook.splice(idx, 1);
	};


	//Warm up cooker
	var cookerView = new steroids.views.WebView({ location: "http://localhost/#/cooker"});
	//cookerView.preload({ id: "cookerView" });

	var slideAni = new steroids.Animation({
		transition: "slideFromLeft",
		duration: 0.2,
		curve: "easeIn",
		reversedTransition: "slideFromRight",
		reversedDuration: 0.2
	});

	$scope.goGoGo = function() {
		steroids.layers.push( {
			view: cookerView,
			keepLoading: false,
			navigationBar: false,
			tabBar: false,
			animation: slideAni
		}, {
			onSuccess: function() {




			},
			onFailure: function(error) {
				console.log("Could not push the view: " + error.errorDescription);
			}
		});
	};



}]);