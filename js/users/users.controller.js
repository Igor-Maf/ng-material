(() => {
	'use strict';

	UserController.$inject = ['usersService', '$mdSidenav', '$mdBottomSheet'];

	function UserController(usersService, $mdSidenav, $mdBottomSheet) {
		let self = this;

		self.selected = null;
		self.users = [];

		self.selectUser = selectUser;
		self.share = share;
		self.toggleMenu = toggleMenu;


		usersService
			.loadAllUsers()
			.then((users) => {
				self.users = [].concat(users);
				self.selected = users[0];
			});


		function selectUser(index) {
			self.selected = self.users[index];
			toggleMenu();
		}

		function share(selectedUser) {
			$mdBottomSheet.show({
				controller: UserSheetController,
				controllerAs: 'vm',
				template:
					`<md-bottom-sheet>
						<md-subheader>
							Contact: <span ng-bind="::vm.user.name"></span>
						</md-subheader>
						<md-list>
							<md-item ng-repeat="c in vm.contacts">
								<md-button
									aria-label="{{vm.user.name}} has {{c.name}}"
									ng-href="{{c.value}}"
									ng-bind="::c.name"
									ng-click="vm.performAction()"></md-button>
							</md-item>
						</md-list>
					</md-bottom-sheet>`,
				parent: angular.element(document.getElementById('content'))
			});

			function UserSheetController() {
				this.user = selectedUser;

				this.contacts = [{
					name: 'Phone',
					value: 'tel:80636363333'
				}, {
					name: 'Twitter',
					value: 'https://twitter.com/'
				}, {
					name: 'Google+',
					value: 'https://plus.google.com/'
				}, {
					name: 'Hangout',
					value: 'https://hangouts.google.com/'
				}];

				this.performAction = (action) => {
					$mdBottomSheet.hide();
				};
			}
		}

		function toggleMenu() {
			$mdSidenav('left').toggle();
		}
	}

	angular.module('users')
		.controller('UserController', UserController);

})();