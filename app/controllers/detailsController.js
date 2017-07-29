'use strict';

todoApp.controller("DetailsController", function($scope, $window, TodoFactory, $routeParams) {
	
	let itemKey = $routeParams.itemId;

	TodoFactory.getSingleToDoItem(itemKey)
	.then( (item) => {
		console.log("the item?", item);
		$scope.selectedItem = item;
	})
	.catch( (err) => {
		console.log("Error! No item ID");
	});

	$scope.loadEditForm = () => {
		console.log("KEYS", itemKey);
		$window.location.href=`#!/todos/edit/${itemKey}`;
	};
});