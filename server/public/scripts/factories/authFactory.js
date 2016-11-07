(function() {
    'use strict';

    angular.module('myApp')
        .factory('AuthFactory', ['$firebaseAuth', Auth]);

    function Auth($firebaseAuth) {
        return $firebaseAuth();
    }
})();
