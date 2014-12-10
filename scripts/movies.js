// Uses strict mode in the whole script
'use strict';

(function() {
	// Module: movies
	var module = angular.module('movies', [
		'ngResource',
		'ui.router'
	]);
	
	// Controller: MovieController
	module.controller('MovieController', [
		'$sce',
		'$stateParams',
		'moviesLoader',
		MovieController
	]);
	
	// Controller: MoviesController
	module.controller('MoviesController', [
		'moviesLoader',
		MoviesController
	]);
	
	// Service: moviesLoader
	module.service('moviesLoader', [
		'$resource',
		moviesLoaderService
	]);
	
	function MovieController($sce, $stateParams, moviesLoader) {
		var controller = this;
		
		var movie = null;
		
		controller.getMovie = function() {
			return movie;
		};
		
		moviesLoader.loadMovies().then(function(loadedMovies) {
			for (var i = 0; i < loadedMovies.length; i++) {
				if (loadedMovies[i].id === $stateParams.id) {
					movie = loadedMovies[i];
					movie.source = $sce.trustAsResourceUrl(movie.source);
					return;
				}
			}
		});
	}
	
	function MoviesController(moviesLoader) {
		var controller = this;
		
		var movies = [];
		
		controller.getMovies = function() {
			return movies;
		};
		
		moviesLoader.loadMovies().then(function(loadedMovies) {
			movies = loadedMovies;
		});
	}
	
	function moviesLoaderService($resource) {
		var service = this;
		
		service.loadMovies = function() {
			return $resource('contents/movies.json', {}, {
				sendRequest: {
					isArray: true,
					method: 'GET'
				}
			}).sendRequest().$promise;
		};
	}
})();
