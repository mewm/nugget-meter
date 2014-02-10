/* jshint -W097 */
'use strict';

var cooker = angular.module('nuggetMeterApp.cooker',[
	'ngTouch',
	'nuggetMeterApp.foodService'
]);


cooker.controller('cookerController', ['$scope', 'foodService', function($scope, foodService) {

	var init = function() {
		$scope.recipe = foodService.getRecipe();
	};

	init();


	$scope.goKitchen = function() {


	};









}]);