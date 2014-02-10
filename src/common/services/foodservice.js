/* jshint -W097 */
'use strict';

var foodService = angular.module('nuggetMeterApp.foodService',[
	'LocalStorageModule'
]);

foodService.config(['localStorageServiceProvider', function(localStorageServiceProvider) {
	localStorageServiceProvider.setPrefix('nugget-meter');
}]);

foodService.service('foodService', ['localStorageService', '$rootScope', function(localStorageService, $rootScope) {

	var self = this;

	this.add = function(entry) {
		var currentFoods = self.getAll();

		if(currentFoods === null) {
			currentFoods = [];
		}

		currentFoods.push(entry);
		localStorageService.add('foodItems', currentFoods);

		return true;
	};

	this.remove = function(idx) {

		var currentFoods = self.getAll();
		currentFoods.splice(idx, 1);
		localStorageService.add('foodItems', currentFoods);

	};

	this.getAll = function() {

		var foods = localStorageService.get('foodItems');
		return foods;
	};



	this.updateRecipe = function(recipe) {
		localStorageService.add('recipe', recipe);
	};

	this.getRecipe = function() {
		return localStorageService.get('recipe');
	};

}]);