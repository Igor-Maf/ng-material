(() => {
	'use strict';

	UserService.$inject = ['$q'];

	function UserService($q) {
		let users = [{
			name: "John Doe",
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
		}, {
			name: "Kristina Layb",
			content: "Aliquid est rem pariatur, deserunt magni molestiae atque minima ratione quidem alias at repudiandae autem odio eius."
		}, {
			name: "Alex Josher",
			content: "Laborum eveniet voluptas obcaecati, facilis!"
		}, {
			name: "Jessy Grey",
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum eveniet voluptas obcaecati, facilis!"
		}]

		this.loadAllUsers = function() {
			return $q((resolve) => {
				resolve(users);
			});
		}
	}

	angular.module('users')
		.service('usersService', UserService);

})();