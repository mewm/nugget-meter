/* jshint -W097 */
'use strict';


// Declare app level module which depends on filters, and services
angular.module('nuggetMeterApp', [
	'ngRoute',
	'nuggetMeterApp.foodManager',
	'nuggetMeterApp.kitchen'
]).

config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/foodmanager',
		{ templateUrl: 'app/foodmanager/foodmanager.tpl.html', controller: 'FoodManagerController'}
	);

	$routeProvider.when('/kitchen',
		{ templateUrl: 'app/kitchen/kitchen.tpl.html', controller: 'KitchenController' }
	);

	$routeProvider.otherwise(
		{ redirectTo: '/foodmanager' }
	);

}]);
