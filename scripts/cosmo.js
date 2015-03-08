var app = angular.module('cosmoApp', ['ngRoute'])
.config(['$routeProvider', 
function($routeProvider){
	$routeProvider
	.when("/", {templateUrl: "partials/home.html", controller : 'PageCtrl'})
	.when("/services", {templateUrl: "/partials/services.html", controller : "PageCtrl"})
	.when("/gallery", {templateUrl: "/partials/gallery.html", controller : "PageCtrl"})
	.when("/about", {templateUrl: "/partials/about.html", controller : "PageCtrl"})
	.when("/contact", {templateUrl: "/partials/contact.html", controller : "PageCtrl"})
	.otherwise({redirectto: "/"});
}]).controller("PageCtrl", function($scope)
{
	$scope.load = function () { 
		alert(parseInt($('#navbar').css("height"))); 
	};
});
