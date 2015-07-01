var app = angular.module('copyPastaApp', ['ngRoute'])
	.config(['$routeProvider', 
		function($routeProvider){
			$routeProvider
			.when("/", {templateUrl: "partials/screenshot.html", controller : 'PageCtrl'})
			.otherwise({redirectto: "/"});
		}])
	.controller("PageCtrl", function($scope)
	{
		alert($scope);
	});

