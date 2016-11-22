myApp.controller("GameBoardController", ["$scope", "$http", "$document", "$window", "$timeout", "$location", 'AuthFactory', 'UserFactory',
    function($scope, $http, $document, $timeout, $window, $location, AuthFactory, UserFactory) {

        //need to ajax call this folder, but dont know how to make folder configured to 'browsable';

        var imageDict = [{
                id: 103,
                desc: ''
            }, {
                id: 106,
                desc: ''
            }, {
                id: 108,
                desc: ''
            }, {
                id: 109,
                desc: ''
            }, {
                id: 194,
                desc: ''
            },

            {
                id: 406,
                desc: ''
            }, {
                id: 407,
                desc: ''
            }, {
                id: 412,
                desc: ''
            }, {
                id: 414,
                desc: ''
            }, {
                id: 420,
                desc: ''
            }, {
                id: 448,
                desc: ''
            }, {
                id: 449,
                desc: ''
            }, {
                id: 450,
                desc: ''
            }, {
                id: 451,
                desc: ''
            }, {
                id: 452,
                desc: ''
            }, {
                id: 453,
                desc: ''
            }, {
                id: 454,
                desc: ''
            }, {
                id: 455,
                desc: ''
            }, {
                id: 456,
                desc: ''
            }, {
                id: 457,
                desc: ''
            }, {
                id: 471,
                desc: ''
            }, {
                id: 472,
                desc: ''
            }, {
                id: 473,
                desc: ''
            }, {
                id: 474,
                desc: ''
            },

            {
                id: 598,
                desc: ''
            }, {
                id: 599,
                desc: ''
            },

            {
                id: 600,
                desc: ''
            }, {
                id: 601,
                desc: ''
            }, {
                id: 670,
                desc: ''
            }, {
                id: 671,
                desc: ''
            },

            {
                id: 708,
                desc: ''
            }, {
                id: 709,
                desc: ''
            }, {
                id: 710,
                desc: ''
            }, {
                id: 711,
                desc: ''
            }, {
                id: 724,
                desc: ''
            }, {
                id: 777,
                desc: ''
            }, {
                id: 778,
                desc: ''
            }, {
                id: 779,
                desc: ''
            }, {
                id: 780,
                desc: ''
            }, {
                id: 781,
                desc: ''
            }, {
                id: 782,
                desc: ''
            }, {
                id: 783,
                desc: ''
            }, {
                id: 784,
                desc: ''
            }, {
                id: 785,
                desc: ''
            }, {
                id: 786,
                desc: ''
            }, {
                id: 787,
                desc: ''
            }, {
                id: 788,
                desc: ''
            }, {
                id: 789,
                desc: ''
            }, {
                id: 790,
                desc: ''
            },

            {
                id: 1284,
                desc: ''
            },

            {
                id: 1509,
                desc: ''
            },

            {
                id: 3152,
                desc: ''
            }, {
                id: 3153,
                desc: ''
            }, {
                id: 3154,
                desc: ''
            }, {
                id: 3155,
                desc: ''
            }, {
                id: 3156,
                desc: ''
            }, {
                id: 3157,
                desc: ''
            },

            {
                id: 3166,
                desc: ''
            }, {
                id: 3167,
                desc: ''
            }, {
                id: 3168,
                desc: ''
            }, {
                id: 3169,
                desc: ''
            }, {
                id: 3170,
                desc: ''
            }, {
                id: 3171,
                desc: ''
            }, {
                id: 3172,
                desc: ''
            }, {
                id: 3173,
                desc: ''
            }, {
                id: 3174,
                desc: ''
            }, {
                id: 3175,
                desc: ''
            }, {
                id: 3176,
                desc: ''
            }, {
                id: 3177,
                desc: ''
            }, {
                id: 3178,
                desc: ''
            }, {
                id: 3179,
                desc: ''
            }, {
                id: 3180,
                desc: ''
            }, {
                id: 3181,
                desc: ''
            }, {
                id: 3182,
                desc: ''
            }, {
                id: 3183,
                desc: ''
            }, {
                id: 3184,
                desc: ''
            }, {
                id: 3185,
                desc: ''
            }, {
                id: 3186,
                desc: ''
            }, {
                id: 3187,
                desc: ''
            }, {
                id: 3190,
                desc: ''
            }, {
                id: 3191,
                desc: ''
            }, {
                id: 3192,
                desc: ''
            }, {
                id: 3193,
                desc: ''
            }, {
                id: 3194,
                desc: ''
            }, {
                id: 3195,
                desc: ''
            }, {
                id: 3196,
                desc: ''
            }, {
                id: 3197,
                desc: ''
            }, {
                id: 3198,
                desc: ''
            },

            {
                id: 4406,
                desc: ''
            }, {
                id: 4407,
                desc: ''
            }, {
                id: 4408,
                desc: ''
            }, {
                id: 4409,
                desc: ''
            }, {
                id: 4410,
                desc: ''
            }, {
                id: 4411,
                desc: ''
            }, {
                id: 4412,
                desc: ''
            }, {
                id: 4414,
                desc: ''
            }, {
                id: 4415,
                desc: ''
            }, {
                id: 4416,
                desc: ''
            }, {
                id: 4417,
                desc: ''
            }, {
                id: 4418,
                desc: ''
            }, {
                id: 4419,
                desc: ''
            }, {
                id: 4420,
                desc: ''
            }, {
                id: 4421,
                desc: ''
            }, {
                id: 4566,
                desc: ''
            }, {
                id: 4570,
                desc: ''
            }, {
                id: 4571,
                desc: ''
            }, {
                id: 4572,
                desc: ''
            }, {
                id: 4573,
                desc: ''
            }, {
                id: 4574,
                desc: ''
            }, {
                id: 4575,
                desc: ''
            }, {
                id: 4576,
                desc: ''
            }, {
                id: 4577,
                desc: ''
            }, {
                id: 4578,
                desc: ''
            }, {
                id: 4579,
                desc: ''
            },

            {
                id: 4608,
                desc: ''
            }, {
                id: 4609,
                desc: ''
            }, {
                id: 4610,
                desc: ''
            }, {
                id: 4611,
                desc: ''
            }, {
                id: 4612,
                desc: ''
            }, {
                id: 4613,
                desc: ''
            }, {
                id: 4614,
                desc: ''
            }, {
                id: 4615,
                desc: ''
            }, {
                id: 4620,
                desc: ''
            }, {
                id: 4621,
                desc: ''
            }, {
                id: 4622,
                desc: ''
            }, {
                id: 4623,
                desc: ''
            }, {
                id: 4624,
                desc: ''
            }, {
                id: 4625,
                desc: ''
            }, {
                id: 4632,
                desc: ''
            }, {
                id: 4633,
                desc: ''
            }, {
                id: 4634,
                desc: ''
            }, {
                id: 4635,
                desc: ''
            }, {
                id: 4636,
                desc: ''
            }, {
                id: 4637,
                desc: ''
            }, {
                id: 4638,
                desc: ''
            }, {
                id: 4639,
                desc: ''
            }, {
                id: 4640,
                desc: ''
            }, {
                id: 4641,
                desc: ''
            }, {
                id: 4642,
                desc: ''
            }, {
                id: 4643,
                desc: ''
            }, {
                id: 4691,
                desc: ''
            }, {
                id: 4692,
                desc: ''
            }, {
                id: 4693,
                desc: ''
            }, {
                id: 4694,
                desc: ''
            }, {
                id: 4695,
                desc: ''
            }, {
                id: 4696,
                desc: ''
            }, {
                id: 4697,
                desc: ''
            }, {
                id: 4698,
                desc: ''
            }, {
                id: 4699,
                desc: ''
            },

            {
                id: 4700,
                desc: ''
            }, {
                id: 4701,
                desc: ''
            }, {
                id: 4702,
                desc: ''
            }, {
                id: 4703,
                desc: ''
            }, {
                id: 4704,
                desc: ''
            }, {
                id: 4705,
                desc: ''
            }, {
                id: 4706,
                desc: ''
            }, {
                id: 4707,
                desc: ''
            }, {
                id: 4708,
                desc: ''
            }, {
                id: 4709,
                desc: ''
            }, {
                id: 4710,
                desc: ''
            }, {
                id: 4711,
                desc: ''
            }, {
                id: 4712,
                desc: ''
            }, {
                id: 4749,
                desc: ''
            }, {
                id: 4750,
                desc: ''
            }, {
                id: 4751,
                desc: ''
            }, {
                id: 4752,
                desc: ''
            }, {
                id: 4753,
                desc: ''
            }, {
                id: 4754,
                desc: ''
            }, {
                id: 4755,
                desc: ''
            },

            {
                id: 4820,
                desc: ''
            }, {
                id: 4821,
                desc: ''
            }, {
                id: 4822,
                desc: ''
            }, {
                id: 4823,
                desc: ''
            }, {
                id: 4824,
                desc: ''
            }, {
                id: 4825,
                desc: ''
            }, {
                id: 5743,
                desc: ''
            }
        ]
        var updatedTiles = [];
        $scope.user = {};
        //auth variables
        var userFactory = UserFactory;
        var signIn = userFactory.signIn();
        var signOut = userFactory.signOut();

        $scope.signIn = function(){
          signIn();
        }
        $scope.signOut = function(){
          signOut();
        }

        $scope.imageDict = imageDict;
        var boardHeight = window.innerHeight;
        var boardWidth = window.innerWidth
        var zoom = 40
        var tileSize = boardWidth / zoom;
        var initTime = Date.now();

        //holds all tiles in view;
        $scope.camera = [];
        $scope.cameraPosition = {
            x: 500,
            y: 500
        };
        //holds full world map
        var worldMap = makeTileGrid();
        console.log(worldMap);

        //userSettings logic;
        $scope.showUserSettings = false;
        //tile editor logic
        $scope.showTileEditor = true;
        $scope.currentTile = ``;

        function showTileEditor() {
            $scope.showTileEditor = !$scope.showTileEditor;
        }
        // $scope.selectedTile = ``

        //MARK: CLICK FUNCTIONS
        $scope.clickedTile = function(tile, index) {
            console.log(tile, index);

            if ($scope.showTileEditor && $scope.currentTile != '') {
              var id = $scope.currentTile;
              $scope.camera[index].texture = `z1/${id}.gif`;
              updatedTiles.push({x: tile.x, y: tile.y, texture: `z1/${id}.gif`})
            }
        }

        $scope.chooseTile = function(id) {
            $scope.currentTile = id;
        }

        $scope.saveMapPressed = function(){
          var testing = Date.now();
          var mapToSave = makeTileGrid();
          var dbRef = firebase.database()
          .ref()
          .child('userMaps')
          .child($scope.user.uid)
          .push(mapToSave);
        }

        //MARK: CAMERA
        function findCurrentView(position) {
            var x = position.x;
            var y = position.y;


            var view = worldMap.slice(y - 11, y + 11);
            view = view.map(row => {
                return row.slice(x - (zoom / 2), x + (zoom / 2));
            });

            var camera = [];
            view.forEach(row => {
                camera.push(...row);
            })

            return camera;
        }
        $scope.camera = findCurrentView($scope.cameraPosition); //init


        //MARK: MAP BUILDING FUNCTIONS
        function getTextureFromID(x,y) {
            // console.log(x,y);
            var texture = '';
            updatedTiles.forEach(tile =>{
                if(x == tile.x && y == tile.y){
                  console.log(tile.texture);
                    texture = tile.texture
                };
            })


              var id = Math.floor((Math.random() * 16) + 1);
              id = id + 5;
              if (texture == ''){
                return `z1/44${id == 13 || id == 12 ? 11 : (id >= 10 ? id : '0'+id)}.gif`
              }
              else { return texture}





            return texture
        }

        function makeWaterSeed() {
            //wip
            var waterSeed = [Math.floor((Math.random() * 300) + 1), Math.floor((Math.random() * 300) + 1)];
            var waterWidth = Math.floor((Math.random() * 100) + 1)
            var waterHeight = Math.floor((Math.random() * 100) + 1)
            return null;
        }

        //make tilemap, proc gen style :D
        //will eventually be filling from gamemap database instead of proc gen prarie.
        //NOTE: put into worker for large maps.. gets expodentially huge. 100x100 = 10k loops, 1000x1000 = 1mil loops;
        function makeTileGrid() {

            var gameMap = [];
            var row = [];
            var cols = 1000;
            var rows = 1000;
            var texture = '';

            //assuming width is > height;
            var width = tileSize;
            var height = tileSize;
            var waterSeed = makeWaterSeed();



            for (var x = 0; x < cols; x++) {
                row = [];
                for (var y = 0; y < rows; y++) {


                    var items = [];
                    texture = getTextureFromID(x,y)
                    row.push({
                        x: x,
                        y: y,
                        width: width,
                        height: height,
                        texture: texture,
                        items: items
                    });
                }
                gameMap.push(row);
            }

            return gameMap;
        }



        $document.bind("keydown", function(event) {
            console.log(event.key);

            switch (event.key) {
                case "w":
                    if ($scope.cameraPosition.y != 11) {
                        $scope.cameraPosition.y -= 1;
                        console.log($scope.cameraPosition);
                        $scope.$apply(function() {
                            $scope.camera = findCurrentView($scope.cameraPosition)
                        })
                    }
                    break;
                case "s":
                    if ($scope.cameraPosition.y != 989) {
                        $scope.cameraPosition.y += 1;
                        console.log($scope.cameraPosition);
                        $scope.$apply(function() {
                            $scope.camera = findCurrentView($scope.cameraPosition)
                        })
                    }
                    break;
                case "a":
                    if ($scope.cameraPosition.x != 20) {
                        $scope.cameraPosition.x -= 1;
                        console.log($scope.cameraPosition);
                        $scope.$apply(function() {
                            $scope.camera = findCurrentView($scope.cameraPosition)
                        })
                    }
                    break;
                case "d":
                    if ($scope.cameraPosition.x != 980) {
                        $scope.cameraPosition.x += 1;
                        console.log($scope.cameraPosition);
                        $scope.$apply(function() {
                            $scope.camera = findCurrentView($scope.cameraPosition)
                        })
                    }
                    break;

                case "e":
                    $scope.$apply(function() {
                        showTileEditor();
                    })

                    break;

                case "Tab":
                event.preventDefault();
                $scope.$apply(function() {
                  $scope.showUserSettings = !$scope.showUserSettings;

                })

            }
            // if (event.key == "ArrowUp") {
            //
            //     event.preventDefault(); //would prevent from tabbing all over the screen
            // }
        });

//MARK: USER FUNCTIONALITY: save/load;
        $scope.auth = AuthFactory
            $scope.auth.$onAuthStateChanged(function(user) {
                console.log(user);
                $scope.user = user;
            });

        console.log(initTime - Date.now());
    }
]);
