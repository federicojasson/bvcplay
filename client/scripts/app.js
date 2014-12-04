// Uses strict mode in the whole script
'use strict';

(function() {
	// Module: app
	var module = angular.module('app', [
		'routing',
		'ui.bootstrap'
	]);
	
	// Config
	module.config([
		'$locationProvider',
		config
	]);
	
	/*
	 * Applies application-wide configurations.
	 */
	function config($locationProvider) {
		// Activates the HTML5 history API
		$locationProvider.html5Mode(true);
	}
})();
