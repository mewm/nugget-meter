/* jshint -W097 */
'use strict';


// Declare app level module which depends on filters, and services
angular.module('nuggetMeterApp', [
	'ngRoute',
	'nuggetMeterApp.foodManager',
	'nuggetMeterApp.kitchen',
	'templates-app',
	'templates-common'
]).

config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/foodmanager',
		{ templateUrl: 'foodmanager/foodmanager.tpl.html', controller: 'FoodManagerController'}
	);

	$routeProvider.when('/kitchen',
		{ templateUrl: 'kitchen/kitchen.tpl.html', controller: 'KitchenController' }
	);

	$routeProvider.otherwise(
		{ redirectTo: '/foodmanager' }
	);

}]);
