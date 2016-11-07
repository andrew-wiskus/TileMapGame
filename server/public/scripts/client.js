var myApp = angular.module("myApp", ["ngRoute", "firebase"]);
myApp.config(['$routeProvider', '$sceDelegateProvider', function($routeProvider, $sceDelegateProvider, $mdThemingProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/main.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: 'home'
        });

}]);
