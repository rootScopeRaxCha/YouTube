"use strict";

var angularModule = angular.module('mainApp', ['ui.router', 'youtube-embed', 'uiRouterTitle']);
angularModule.controller('globalCtrl', function ($scope, $rootScope, $http, $state) {
  // API key
  var key = 'AIzaSyBiQMVzLBxNV1Tj2PiPdIenfqQtVZM3Ymw'; // Funcion que al hacer click tiene como parametro keyword y ejecuta la llamada a la API

  $scope.busqueda = function (keyword) {
    $state.go('root.videos', {}, {
      reload: 'root.videos'
    });
    $rootScope.datas = []; // Metodo por el cual haremos la llamada a la API

    $http({
      method: 'GET',
      // Template String ES6 con los parametros necesarios para la busqueda
      url: "https://www.googleapis.com/youtube/v3/search?key=".concat(key, "&part=snippet&q=").concat(keyword, "&maxResults=50")
    }).then(function (snapshot) {
      // Al terminar la llamada a la API se va a ejecutar un ciclo
      for (var i in snapshot.data.items) {
        // Ciclo para poder mostrar los datos del array con ng-repeat
        $rootScope.datas.push(snapshot.data.items[i]);
      }
    });
  }; // Funcion que al hacer enter en el input tiene como parametro keyword y event, y ejecuta la llamada a la API


  $scope.pressToSearch = function (event, keyword) {
    // Condicion para saber si se hizo un enter en el input
    if (event.keyCode === 13) {
      $state.go('root.videos', {}, {
        reload: 'root.videos'
      });
      $rootScope.datas = []; // Prevenir la accion predeterminada del enter

      event.preventDefault();
      $http({
        method: 'GET',
        url: "https://www.googleapis.com/youtube/v3/search?key=".concat(key, "&part=snippet&q=").concat(keyword, "&maxResults=6")
      }).then(function (snapshot) {
        console.log(snapshot);

        for (var k in snapshot.data.items) {
          $rootScope.datas.push(snapshot.data.items[k]);
        }
      });
    }
  }; // Recibir el array con los datos del video seleccionado


  $rootScope.sendData = function (x) {
    $rootScope.array = x;
    console.log(x);
  };
});
angularModule.controller('homeCtrl', function ($scope, $rootScope) {});
angularModule.controller('tendCtrl', function ($scope, $rootScope) {});
angularModule.controller('videosCtrl', function ($scope, $rootScope) {});
angularModule.controller('showCtrl', function ($scope, $rootScope) {
  // Almacenamos la ID del video en un scope
  $scope.theBestVideo = $rootScope.array.id.videoId; // Definimos parametros para el iFrame

  $scope.playerVars = {
    controls: 2,
    autoplay: 1
  };
});