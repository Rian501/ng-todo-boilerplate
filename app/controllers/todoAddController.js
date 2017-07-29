'use strict';

todoApp.controller('TodoAddController', function($scope, TodoFactory, UserFactory, $window) {
	$scope.pageTitle="Add New Item";
	$scope.todoItem = {
		assignedTo: "",
		dependencies: "",
		dueDate: "",
		isCompleted: false,
		location: "",
		task: "",
		urgency: "",
		uid: UserFactory.getUser()
	};

	$scope.saveTodoItem = () => {
		//POST to firebase
		TodoFactory.postNewTask ($scope.todoItem)
		.then( (data) => {
			console.log("new todo data", data);
			$window.location.href='#!/todo/view';
		});
	};

	
//make it so only logged in user can add stuff
});