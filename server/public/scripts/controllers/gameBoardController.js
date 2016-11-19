myApp.controller("GameBoardController", ["$scope", "$http", "$document", "$window", "$timeout", "$location", 'AuthFactory', 'UserFactory',
    function($scope, $http, $document, $timeout, $window, $location, AuthFactory, UserFactory) {

        var boardHeight = window.innerHeight;
        var boardWidth = window.innerWidth
        var zoom = 40
        var tileSize = boardWidth / zoom;
        var initTime = Date.now();

        //holds all tiles in view;
        $scope.camera = [];
        var cameraPosition = {
            x: 500,
            y: 500
        };
        //holds full world map
        var worldMap = makeTileGrid();
        console.log(worldMap);

        //MARK: CLICK FUNCTIONS
        $scope.clickedTile = function(tile, index){
          console.log(tile, index);
          $scope.camera[index].texture = `water1.png`
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
        $scope.camera = findCurrentView(cameraPosition); //init

        //MARK: MAP BUILDING FUNCTIONS
        function getTextureFromID() {
            var id = Math.floor((Math.random() * 6) + 1);
            return `grass${id}.png`
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
                    texture = getTextureFromID()
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
                    if (cameraPosition.y != 11) {
                        cameraPosition.y -= 1;
                        console.log(cameraPosition);
                        $scope.$apply(function() {
                            $scope.camera = findCurrentView(cameraPosition)
                        })
                    }
                    break;
                case "s":
                    if (cameraPosition.y != 989) {
                        cameraPosition.y += 1;
                        console.log(cameraPosition);
                        $scope.$apply(function() {
                            $scope.camera = findCurrentView(cameraPosition)
                        })
                    }
                    break;
                case "a":
                    if (cameraPosition.x != 20) {
                        cameraPosition.x -= 1;
                        console.log(cameraPosition);
                        $scope.$apply(function() {
                            $scope.camera = findCurrentView(cameraPosition)
                        })
                    }
                    break;
                case "d":
                    if (cameraPosition.x != 980) {
                        cameraPosition.x += 1;
                        console.log(cameraPosition);
                        $scope.$apply(function() {
                            $scope.camera = findCurrentView(cameraPosition)
                        })
                    }
                    break;

            }
            // if (event.key == "ArrowUp") {
            //
            //     event.preventDefault(); //would prevent from tabbing all over the screen
            // }
        });

        console.log(initTime - Date.now());
    }
]);
