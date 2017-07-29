'use strict';

todoApp.controller("UserController", function ($scope, $window, UserFactory) {

	$scope.account = {
		email: "",
		password: ""
	};

	$scope.register = () => {
		//TODO validate that user doesn't exist already --fb sort of does this on in a way
		console.log("you clicked register");
		UserFactory.createUser($scope.account)
		.then ( (userData) => {
			console.log("new user", userData);
			//let's go ahead and log in our sad users
			$scope.login();
		});
	};

	$scope.login = () => {
		UserFactory.logInUser($scope.account)
		.then( (userData) => {
			//redirect them to the list page
			$window.location.href='#!/todo/view';
		});
	};


});