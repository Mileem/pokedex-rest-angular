'use strict';

/**
 * @ngdoc function
 * @name pokedexRestAngularApp.controller:PokemonsCtrl
 * @description
 * # PokemonsCtrl
 * Controller of the pokedexRestAngularApp
 */
angular.module('pokedexRestAngularApp')
  .controller('PokemonsCtrl', function ($http, $scope) {
    $http({method: 'GET', url: 'http://pokeapi.co/api/v2/pokemon'})
        .success(function(data, status, headers, config){ 
            $scope.pokemons = data;
        })
        .error(function(data, status, headers, config){ 
            console.log('error : can\'t find pokemons'); 
        });    
  });
