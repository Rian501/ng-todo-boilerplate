'use strict';

todoApp.factory("UserFactory", function($q, $http, FirebaseUrl, FBCreds) {
	var config = {
		apiKey: FBCreds.key,
		authDomain: FBCreds.authDomain
	};

	firebase.initializeApp(config);

	let currentUser = null;
	let isAuthenticated = function() {
		console.log("function isAuthenticated called");
		return new Promise( (resolve, reject) => {
			firebase.auth().onAuthStateChanged( function(user) {
				if (user) {
					currentUser = user.uid;
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	};

	let getUser = () => {
		return currentUser;
	};

	//register
	let createUser = (userObj) => {
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
		.catch( (err) => {
			console.log("error registering", err.message);
		});
	};

	//log in
	let logInUser = (userObj) => {
		return $q( (resolve, reject) => {
			firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
			.then( (user) => {
				currentUser = user.uid;
				resolve(user);
			})
			.catch( (err) => {
			console.log("Error logging in", err.message);
			});
		});
	};

	//log out
	let logOutUser = () => {
		return firebase.auth().signOut()
		.catch( (err) => {
			console.log("error logging out", err.message);
		});
	};

	console.log("it's hooked up", firebase);
	return { getUser, logOutUser, logInUser, createUser, isAuthenticated };
});