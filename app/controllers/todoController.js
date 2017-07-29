'use strict'; 

todoApp.controller('TodoListController', function ($scope, TodoFactory, UserFactory, $window, FilterFactory) {

	let currentUser = null;

//make sure there is a user before you try to print the list
	UserFactory.isAuthenticated()
	.then( (user) =>{
		console.log("user status?", user);
		currentUser = UserFactory.getUser();
		fetchTodos();
	});

	//show all todo items
	//first, get them from farbase
	//pass in the UID
	function fetchTodos() {
		let todoArr= [];
		TodoFactory.getTodoList(UserFactory.getUser())
		.then( (todosList) => {
			let todoData = todosList.data;
			console.log("todoData, an object of objects", todoData);
			Object.keys(todoData).forEach( (key) => {
				todoData[key].id = key;
				todoArr.push(todoData[key]);
			});
			console.log(todoData);
			console.log("todoArray", todoArr);
			//this is an array of objects, which is what we want
			$scope.todoList = todoArr;
		})
		.catch ( (err) => {
			console.log("oh noes", err);
		});
	}



	$scope.loadListView = () => {
		fetchTodos();
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
			fetchTodos();
		});
	};

	//check complete/incomplete
	$scope.updateTaskStatus = (task) => {
		console.log("status update", task);
		//now send the task back to FB
		let itemId = task.id;
		TodoFactory.updateObjectOnFB(task, itemId)
		.then( (data) => {
			console.log("updated task", data);
		});
	};


	//filtering/sortby (stretch)
	$scope.searchText = FilterFactory;
});