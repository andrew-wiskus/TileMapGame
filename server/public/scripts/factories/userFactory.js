myApp.factory('UserFactory', ['$http', function($http) {

    // var provider = new firebase.auth.GithubAuthProvider();
    var provider = new firebase.auth.GoogleAuthProvider();

    function signIn() {
        firebase.auth()
            .signInWithPopup(provider)
            .then(function(result) {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log('this is the user:', user);
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }



    function signOut() {
        firebase.auth()
            .signOut()
            .then(function() {
                console.log('Sign-out successful.');
            }, function(error) {
                console.log('error signing out');
            });
    };

    return {
        signIn: function() {
            return signIn;
        },
        signOut: function() {
            return signOut;
        }

    };
}]);
