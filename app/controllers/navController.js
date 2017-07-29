'use strict';

todoApp.controller("NavController", function($scope, $window, UserFactory, FilterFactory) {

	$scope.isLoggedIn = false;

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			$scope.isLoggedIn = true;
			console.log("current user logged in", $scope.isLoggedIn, user.uid);
			$scope.$apply();
		} else {
			$scope.isLoggedIn = false;
			$scope.$apply();
			$window.location.href = "#!/login";
		}
	});

	$scope.logout = ()  => {
		console.log("user clicked log out");
		UserFactory.logOutUser();
	};

	$scope.searchText = FilterFactory;

});