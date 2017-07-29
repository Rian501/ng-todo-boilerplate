"use strict";

todoApp.controller("TodoEditController", function($scope,TodoFactory, $routeParams, $window) {
	
	$scope.pageTitle="Edit To-Do List Item";
	
	let itemKey = $routeParams.itemId;

	TodoFactory.getSingleToDoItem(itemKey)
	.then( (singleItem) => {
		$scope.todoItem = singleItem;
	});
		
	$scope.saveTodoItem = (todoItem) =>{
		console.log("save To to item firing");
		TodoFactory.updateObjectOnFB(todoItem, itemKey)
		.then( (data) => {
		console.log("Edited item saved", todoItem);
		$window.location.href = "#!/todo/view";
		});
	};
});