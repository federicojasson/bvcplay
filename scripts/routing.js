// Uses strict mode in the whole script
'use strict';

(function() {
	// Module: routing
	var module = angular.module('routing', [
		'ui.router'
	]);
	
	// Config
	module.config([
		'$stateProvider',
		'$urlRouterProvider',
		config
	]);
	
	/*
	 * Defines the routing.
	 */
	function config($stateProvider, $urlRouterProvider) {
		// State: site
		$stateProvider.state('site', {
			abstract: true,
			templateUrl: 'templates/layouts/site.html'
		});
		
		// State: site.home
		$stateProvider.state('site.home', {
			templateUrl: 'templates/views/home.html',
			url: '/'
		});
		
		// State: site.movie
		$stateProvider.state('site.movie', {
			templateUrl: 'templates/views/movie.html',
			url: '/movie/:id'
		});
		
		// State: site.movies
		$stateProvider.state('site.movies', {
			templateUrl: 'templates/views/movies.html',
			url: '/movies'
		});
		
		// State: site.music
		$stateProvider.state('site.music', {
			templateUrl: 'templates/views/music.html',
			url: '/music'
		});
		
		// State: site.series
		$stateProvider.state('site.series', {
			templateUrl: 'templates/views/series.html',
			url: '/series'
		});
		
		// Default route
		$urlRouterProvider.otherwise('/');
	}
})();
