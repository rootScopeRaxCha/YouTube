"use strict";

angularModule.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/root/home');
  $stateProvider.state('root', {
    url: '/root',
    "abstract": true,
    templateUrl: 'templates/navbar.html',
    controller: 'globalCtrl'
  }).state('root.home', {
    url: '/home',
    data: {
      pageTitle: 'Inicio'
    },
    views: {
      'content': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  }).state('root.tendencias', {
    url: '/tendencias',
    data: {
      pageTitle: 'Tendencias'
    },
    views: {
      'content': {
        templateUrl: 'templates/tendencias.html',
        controller: 'tendCtrl'
      }
    }
  }).state('root.videos', {
    url: '/videos',
    data: {
      pageTitle: 'Videos'
    },
    views: {
      'content': {
        templateUrl: 'templates/videos.html',
        controller: 'videosCtrl'
      }
    }
  }).state('root.showVideos', {
    url: '/videos/:videoId',
    views: {
      'content': {
        templateUrl: 'templates/showVideos.html',
        controller: 'showCtrl'
      }
    }
  });
});