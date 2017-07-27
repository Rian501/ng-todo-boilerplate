'use strict';

todoApp.controller('TodoListController', function ($scope, TodoFactory, UserFactory) {
	//show all todo items
	//first, get them from farbase
	//pass in the UID
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


	//delete any item
	$scope.deleteTask = (taskId) => {
		console.log("delete called", taskId);
		// pass along to delete from firebase?
	};
	//check complete/incomplete
	$scope.updateTaskStatus= (task) => {
		console.log("status update", task);
		//now send the task back to FB
		TodoFactory.putObjectOnFB(task);

	};


	//filtering/sortby (stretch)
});