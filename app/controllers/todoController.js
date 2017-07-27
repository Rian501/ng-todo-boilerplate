'use strict';

todoApp.controller('TodoListController', function ($scope, TodoFactory, UserFactory, $window) {
	//show all todo items

	//first, get them from farbase
	//pass in the UID
	$scope.fetchTodos = () => {
		TodoFactory.getTodoList(UserFactory.getUser())
		.then( (todoList) => {
			let todoData = todoList.data;
			console.log("todoData, an object of objects", todoData);
			Object.keys(todoData).forEach( (key) => {
				todoData[key].id = key;
			});
			console.log(todoData);
			$scope.todoList = todoData;
		})
		.catch ( (err) => {
			console.log("oh noes", err);
		});
	};


$scope.fetchTodos();

	$scope.loadListView = () => {
		$scope.fetchTodos();
		$window.location.href='#!/todo/view';
	};


	//on click of 'add' button, bring up the form view
	$scope.loadForm = () => {
		console.log("new item add button clicked");
		$window.location.href='#!/todo/add';
	};


	//delete any item
	$scope.deleteTask = (taskId) => {
		console.log("delete called", taskId);
		// pass along to delete from firebase
		TodoFactory.deleteItemFromFirebase(taskId)
		.then( (data) => {
			console.log("removed item", data);
			//get todolist again
			$scope.fetchTodos();
		});
	};

	//check complete/incomplete
	$scope.updateTaskStatus = (task) => {
		console.log("status update", task);
		//now send the task back to FB
		TodoFactory.putObjectOnFB(task)
		.then( (data) => {
			console.log("updated task", data);
		});
	};


	//filtering/sortby (stretch)
});