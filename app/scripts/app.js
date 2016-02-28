'use strict';

/**
 * @ngdoc overview
 * @name pokedexRestAngularApp
 * @description
 * # pokedexRestAngularApp
 *
 * Main module of the application.
 */
angular
  .module('pokedexRestAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.select'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/pokemons', {
        templateUrl: 'views/pokemons.html',
        controller: 'PokemonsCtrl',
        controllerAs: 'pokemons'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
