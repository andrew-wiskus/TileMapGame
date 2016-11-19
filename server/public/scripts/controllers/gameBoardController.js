myApp.controller("GameBoardController", ["$scope", "$http", "$document", "$window", "$timeout", "$location", 'AuthFactory', 'UserFactory', function($scope, $http, $document, $timeout, $window, $location, AuthFactory, UserFactory) {

    var boardHeight = window.innerHeight;
    var boardWidth = window.innerWidth
    var tileSize = boardWidth/40;
    var initTime = Date.now();

    //holds all tiles in view;
    $scope.camera = [];
    var cameraPosition = {x:50,y:50};
    //holds full world map
    var worldMap = makeTileGrid();
    console.log(worldMap);


//MARK: CAMERA
    function findCurrentView(position){
      var x = position.x;
      var y = position.y;


      var view = worldMap.slice(y-11, y+11);
      view = view.map(row=>{
        return row.slice(x-20,x+20);
      });

      var camera = [];
      view.forEach(row=>{
        camera.push(...row);
      })

      return camera;
    }

    $scope.camera = findCurrentView(cameraPosition);

//MARK: MAP BUILDING FUNCTIONS
    function getTextureFromID(){
      var id = Math.floor((Math.random() * 6) + 1);
      return `grass${id}.png`
    }
    function makeWaterSeed(){
      //wip
      var waterSeed = [Math.floor((Math.random() * 300) + 1), Math.floor((Math.random() * 300) + 1)];
      var waterWidth = Math.floor((Math.random() * 100) + 1)
      var waterHeight = Math.floor((Math.random() * 100) + 1)
      return null;
    }
    //NOTE: put into worker;
    function makeTileGrid(){

      var gameMap = [];
      var row = [];
      //assuming width is > height;
      var cols = 1000;
      var rows = 1000;
      var texture = '';
      var width = tileSize;
      var height = tileSize;
      var waterSeed = makeWaterSeed();


      //make tilemap, proc gen style :D
      //will eventually be filling from gamemap database instead.. 2 many proc gens in games.
      for(var x = 0; x < cols; x++){
        row = [];
        for(var y = 0; y < rows; y++){

          var items = [];
          texture = getTextureFromID()
          row.push({x: x, y:y, width: width, height: height, texture: texture, items: items});
        }
        gameMap.push(row);
      }

      return gameMap;
    }



    $document.bind("keydown", function(event) {
        console.log(event.key);

        switch(event.key){
          case "ArrowUp":
          cameraPosition.y -= 1;
          console.log(cameraPosition);
          $scope.$apply(function(){
            $scope.camera = findCurrentView(cameraPosition)
          })
          break;
          case "ArrowDown":
          cameraPosition.y += 1;
          console.log(cameraPosition);
          $scope.$apply(function(){
            $scope.camera = findCurrentView(cameraPosition)
          })
          break;
          case "ArrowLeft":
          cameraPosition.x -= 1;
          console.log(cameraPosition);
          $scope.$apply(function(){
            $scope.camera = findCurrentView(cameraPosition)
          })
          break;
          case "ArrowRight":
          cameraPosition.x += 1;
          console.log(cameraPosition);
          $scope.$apply(function(){
            $scope.camera = findCurrentView(cameraPosition)
          })
          break;

        }
        if (event.key == "ArrowUp") {

            event.preventDefault(); //would prevent from tabbing all over the screen
        }
    });

    console.log(initTime - Date.now());
}]);
