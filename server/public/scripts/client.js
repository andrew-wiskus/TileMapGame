var myApp = angular.module("myApp", ["ngRoute", "firebase"]);
myApp.config(['$routeProvider', '$sceDelegateProvider', function($routeProvider, $sceDelegateProvider, $mdThemingProvider) {

    $routeProvider
        .when('/gameBoard', {
            templateUrl: '/views/gameBoard.html',
            controller: 'GameBoardController'
        })
        .otherwise({
            redirectTo: 'gameBoard'
        });

}]);
