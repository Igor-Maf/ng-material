(() => {
	'use strict';

	angular.module('MaterialApp', [
		'ngMaterial',
		'users'
	])
		.run(() => console.log('MaterialApp is ready!'))
		.config(($mdThemingProvider) => {
			$mdThemingProvider.theme('default')
				.primaryPalette('blue')
				.accentPalette('light-blue');
		});
		
})();