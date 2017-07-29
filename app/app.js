"use strict";

const todoApp = angular.module("TodoApp", ["ngRoute"])
.constant("FirebaseUrl", "https://to-do-app-48bab.firebaseio.com/");

todoApp.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/RegisterLogIn.html',
		controller: 'UserController'
	})
	.when('/todo/view', {
		templateUrl: 'partials/todo-list.html',
		controller: 'TodoListController'
	})
	.when('/todo/add', {
		templateUrl: 'partials/taskform.html',
		controller: 'TodoAddController'
	})
	.when('/todo/details/:itemId', {
		templateUrl: 'partials/item-details.html',
		controller: 'DetailsController'
	})
	.when('/todos/edit/:itemId', {
		templateUrl: 'partials/taskform.html',
		controller: 'TodoEditController'
	})
	.otherwise('/');
});
