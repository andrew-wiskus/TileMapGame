myApp.controller("HomeController", ["$scope", "$http", "$document", "$timeout", "$location", 'AuthFactory', 'UserFactory', function($scope, $http, $document, $timeout, $location, AuthFactory, UserFactory) {


    $scope.user = {};
    $scope.firebaseUser;
    //auth variables
    var userFactory = UserFactory;
    var signIn = userFactory.signIn();
    var signOut = userFactory.signOut();
    $scope.auth = AuthFactory
    $scope.user.exampledb = 'loading'; //kind of hacky way to make a loading screen.. there are much better ways using the same concept :P
    //clickfunctions
    $scope.login = function() {
        signIn();
    }
    $scope.logOff = function(){
        signOut();
    }
    $scope.postData = function(data) {
        var datestr = new Date()
        datestr = datestr.toString();
        console.log(datestr);
        var dbRef = firebase.database()
            .ref()
            .child('exampledb')
            .child($scope.user.uid)
            .push({
                date: datestr,
                data: data
            })
    }



    //MARK:------FIREBASE BRAIN
    //listens to changes for database refrences. ie: task added to db.ref(user.uid) -> fires function to update scope.
    //ps. this is always running and listening for changes, even user == null.
    $scope.auth.$onAuthStateChanged(function(user) {
        $scope.firebaseUser = user;
        console.log('firebase user: ', user);
        if (user != null) {
            $scope.user.uid = user.uid;
            $scope.user.email = user.email;

            //LISTNER: examppledb
            var exampleListener = firebase.database()
            .ref()
            .child('exampledb')
            .child(user.uid)

            //.on('value', -> is a catch all. you can use .on('child_added') and other listeners for optimization;
            exampleListener.on('value', data=>{ //es6 == ('value', function(data){});
              console.log('database: ', data.val());
              var tempArray = makeSnapshotObject(data.val());

              $timeout(function(){ //need $timeout in all firebase listeners because its asynch :)
                $scope.user.exampledb = tempArray
                console.log('user:', $scope.user);
              }, 0) // setting timer at 0 makes sure the function runs after data is loaded


            });


        }
    });




    //UTILITY FUNCTIONS
    function makeSnapshotObject(data) {
        var tempArray = [];
        _.pairs(data) //uses underscorejs to format object and update $scope.user.taskList
            .forEach(function(dataArray) {
                dataArray[1].key = dataArray[0];
                tempArray.push(
                    dataArray[1]
                )
            })

        return tempArray;
    }



    //------------------------------------------------------------------------------
    //--------------------------EXAMPLE FIREBASE FUNCTIONS--------------------------
    //------------------------------------------------------------------------------

    //MARK:------DELETE REQUEST
    // function deleteTask(task) {
    //     var dbRef = firebase.database()
    //         .ref()
    //         .child('taskdb')
    //         .child($scope.user.uid)
    //         .child(task.key)
    //         .remove();
    // }

    //MARK: POST REQUEST ------------------------------------------------
    // function postData(data){
    //   var datestr = new Date()
    //   dateStr = dateStr.toString();
    //   var dbRef = firebase.database()
    //   .ref()
    //   .child('exampledb')
    //   .child($scope.user.uid)
    //   .push({date: datestr, data: data})
    // }

    //MARK: GET REQUEST --------------------------------------------------
    // function updateUserObject() {
    //
    //     var exampleDB = firebase.database()
    //         .ref()
    //         .child('exampleDB')
    //         .child(user.uid); //CREATES FIREBASE REFRENCE FOR ALL DATA CREATED BY CURRENT USER
    //
    //     var tempArray = makeSnapshotObject(data); //NECESSARY TO GET KEYS OF OBJECTS
    //
    //
    //     //updates $scope.user
    //     //NOTE: NEED $TIMEOUT IN AN ASYNC CALL VIA FIREBASE
    //     $timeout(function() {
    //         $scope.user.db = tempArray;
    //         findFoldersToShow();
    //     }, 0);
    //
    //
    // }

    //MARK: PUT REQUEST --------------------------------------------------
    // function updateListItem(task) {
    //     var dbRef = firebase.database()
    //         .ref()
    //         .child('taskdb')
    //         .child($scope.user.uid)
    //         .child(task.key)
    //         .child('is_complete')
    //         .set(true)
    //
    //     // NOTE: if you update multiple lines you must set the FULL object
    //     //
    //     //
    //     //     var dbRef = firebase.database() //creates ref
    //     //         .ref()
    //     //         .child('taskdb')
    //     //         .child($scope.user.uid)
    //     //         .child(task.key) //finds the tasks key
    //     //         .set({ //replaces the full object. (FULL OBJECT) v imporant.
    //     //             date: task.date,
    //     //             title: task.title,
    //     //             scrum: task.scrum,
    //     //             folder: task.folder,
    //     //             is_complete: task.is_complete
    //     //         });
    // }

    //MARK:EXAMPLE
    //----FIREBASE BRAIN
    //listens to changes for database refrences. ie: task added to db.ref(user.uid) -> fires function to update scope.
    //ps. this is always running and listening for changes, even user == null.
    // $scope.auth.$onAuthStateChanged(function(user) {
    //
    //     if (user != null) {




    // //LISTENER: USER TASK LIST
    // var taskRef = firebase.database()
    //     .ref()
    //     .child('taskdb')
    //     .child(user.uid)
    // taskRef.on('value', snap => {
    //     //scope init funcs.
    //     console.log('ish changed in db :)')
    //     updateUserObject(user, snap.val()) //snap.val() = user tasklist;
    // })
    //
    //
    // //LISTENER: GLOBAL BUG_INFO LIST
    // var bugRef = firebase.database()
    //     .ref()
    //     .child('taskdb')
    //     .child('bugs')
    // bugRef.on('value', snap => {
    //     var tempArray = makeSnapshotObject(snap.val())
    //     $timeout(function() {
    //         $scope.user.bugs = tempArray;
    //     }, 0);
    // })
    //
    //
    // //LISTENER: SHARED POJO LISTS
    // var pojoRef = firebase.database()
    //     .ref()
    //     .child('pojodb')
    //
    // // pojoRef.push({members:['wskcontact@gmail.com', 'andrewwiskus@gmail.com'], taskList: [{scrum:2,title:'make this work'}, {scrum:5, title:'fix this ish'}], title: 'myfirstpojo'});
    // //badbadbadbadbad TODO: OPTIMIZE THIS //WILL CAUSE PROBLEMS IN FUTURE IF YOU DONT!!
    // pojoRef.on('value', data => {
    //     var userPojos = [];
    //     var pojos = makeSnapshotObject(data.val()) // yes.. we're listening for all of them atm and pulling all in.. wtf
    //     pojos.forEach(pojo => {
    //         var isMember = _.indexOf(pojo.members, user.email);
    //         if (isMember != -1) {
    //             userPojos.push(pojo);
    //         }
    //     })
    //
    //     $timeout(function() {
    //         $scope.user.pojos = userPojos;
    //     }, 0)
    //
    // });
    //
    //
    // //LISTENER: FRIENDS LIST/REQUESTS
    // var friendRef = firebase.database()
    //     .ref()
    //     .child('frienddb')
    //     .child(user.uid)
    // friendRef.on('value', x => {
    //     var tempArray = makeSnapshotObject(x.val())
    //
    //     $timeout(function() {
    //         $scope.user.friends = tempArray;
    //         findFriendRequests()
    //     })
    // })
    //
    //
    //
    // //LISTENER: GLOBAL USERDB W/ PUBLIC INFO
    // var userdbRef = firebase.database()
    //     .ref()
    //     .child('userdb')
    // checkNewUser(userdbRef, user)
    //
    // //LISTENER: USER SETTINGS
    // var currentUserRef = firebase.database()
    //     .ref()
    //     .child('userdb')
    //     .child(user.uid)
    // currentUserRef.on('value', x => {
    //     var tempArray = makeSnapshotObject(x.val())
    //         //IF USER SETTINGS CHANGE:
    //         //update $scope.user.settings
    // })
    //
    // //LISTNER: TIMER -need for offline->online capablities
    // //uses time started + time paused refrences to calcualte time remaining while comparing current time:
    // //is_paused: time | null;
    // //amount paused: int | null;
    // //started_at: time;


    //
    //     }
    // });








    //Cool functions

    //KEY EVENT LISTENER !!! :D
    // $document.bind("keydown", function(event) {
    //     console.log(event);
    //     if (event.key == "Tab") {

    //         event.preventDefault(); //would prevent from tabbing all over the screen
    //     }
    // });


}]);
