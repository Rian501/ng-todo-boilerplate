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
	.otherwise('/');
});

// $scope.items = [
//   {
//     id: 0,
//     task: "mow the lawn",
//     isCompleted: false,
//     dueDate: "12/5/17",
//     assignedTo: "Greg",
//     location: "Joe's house",
//     urgency: "low",
//     dependencies: "sunshine, clippers, hat, water, headphones"
//   },
//   {
//     id: 1,
//     task: "grade quizzes, I mean Mastery Watzits",
//     isCompleted: false,
//     dueDate: "12/5/17",
//     assignedTo: "Joe",
//     location: "NSS",
//     urgency: "high",
//     dependencies: "wifi, tissues, vodka"
//   },
//   {
//     id: 2,
//     task: "take a nap",
//     isCompleted: false,
//     dueDate: "5/21/18",
//     assignedTo: "Joe",
//     location: "Porch of lakefront cabin",
//     urgency: "medium",
//     dependencies: "hammock, silence"
//   }
// ];
