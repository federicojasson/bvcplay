// Uses strict mode in the whole script
'use strict';

(function() {
	// Module: movies
	var module = angular.module('movies', [
		'ngResource'
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
	
	function MoviesController(moviesLoader) {
		var controller = this
		
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
