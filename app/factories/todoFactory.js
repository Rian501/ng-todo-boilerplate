'use strict';

todoApp.factory("TodoFactory", function($q, $http, FirebaseUrl) {

//don't need the fbcreds because we are just interacting with the restful API
//if our database were not set to open, we would have to prove authentication to access it

	let getTodoList = (uid) => {
		return $q( (resolve, reject) => {
			$http.get(`${FirebaseUrl}todos.json?orderBy="uid"&equalTo="${uid}"`) //want to only fetch those with matching uid
			.then( (todosData) => {
				resolve(todosData);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	};

	let deleteItemFromFirebase = () => {
		// return $q( (resolve, reject) => {
		// 	$http.put(`${FirebaseUrl}todos/${taskObj}.id.json`);
		// });
	};

	let putObjectOnFB = (taskObj) => {
		//PUT on fb
		// return $q( (resolve, reject) => {
		// 	$http.put(`${FirebaseUrl}todos/${taskObj}.id.json`);
		// });
	};

	let postNewTask = (newObj) => {
		return $q( (resolve, reject) => {
			$http.post(`${FirebaseUrl}todos.json`,
				angular.toJson(newObj))
			.then( (response) => {
				resolve(response);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	};

	return { getTodoList, postNewTask };
});