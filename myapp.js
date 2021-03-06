var firstApp = angular.module('firstApp', ['ionic', "App.Services", "App.Controllers"])

firstApp.controller('firstController', function ($scope, ParseService) {
	$scopeItemList = [];
	$scope.inputItem = {
    value: "",
    name: "",
    room: ""
};
	
	ParseService.login().then( function loginSuccess(_LoggedInuser) {
		alert ("User logged in" + _LoggedInuser.username);

		return ParseService.getAllObjects();
	
	}).then(function getObjectsSuccess(_objectData) {
		$scopeItemList = _objectData.results;
	}, function error (_error) {
		alert ("error" + _error);
	});
	});

	$scope.editObject = function editObject (_object) {
		// why is _object in () we didnt do that for new item
		
		var data = null;
		var editedObject = {};
		var objectData = prompt("Enter the Edited Information", _object.name + "," + _object.room);

		if (objectData != null) {
			//
			data = objectData.split(",");
		}

		if (objectData && (data.length === 2)) {

			editedObject.name = data[0].trim();
        	editedObject.room = data[1].trim();
        	editedObject.objectId = _object.objectId;

        	console.log(JSON.stringify(editedObject));

        	ParseService.updateObject(editedObject)
            .then(function itemUpdated(_updatedItem) {
                alert("Item Updated " + _updatedItem.objectId);

                return populateList();
		}, function errorSaving(_error) {
                alert("Error Editing Object " + _error)
            });


	} else {
		if (objectData !== null) {
			alert("Invalid Input :" + objectData);
		}
	}
};



	$scope.addItem = function addItem () {
		var data = $scope.inputItem.value.split(",");

		if (data.length === 2) {

			$scope.inputItem.name = data[0].trim();
			$scope.inputItem.room = data[1].trim();

			ParseService.addObject($scope.inputItem)
				.then(function itemSaved(_newItem) {
					alert("itemSaved", _newItem.objectid);
					$scope.inputItem = {};

					return populateList();

				}, function errorSaving(_error) {
					$scope.inputItem ={};
				
				});

		} else {
			alert("Invalid Input: " + $scope.inputItem.value);
			$scope.inputItem ={};
			// i know what an if and else statement is but i dont know all the data i just inputed
		}
	};

	

$scope.deleteObject = function editObject(_objectId) {
    ParseService.deleteObjectById(_objectId)
        .then(function itemSaved(_deletedObject) {
            alert("Item Deleted " + _deletedObject.objectId);

            return populateList();

        }, function errorDeleting(_error) {
            alert("Error Deleting Object " + _objectId)
        });
};



	function populateList() {
		return ParseService.getAllObjects ();
	}

 
 
 
 
	
firstApp.config( function($stateprovider,  $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/home");

	$stateProvider 
		.state("home", {
			url:"/home",
			templateUrl: "views/home.html",
			controller: "homeCtrl"
		})
	    .state("detail", {
	    	url: "/detail",
	    	templateUrl: "views/detail.html",
	    	controller: "detailCtrl"
	    });

});

  

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/home.html",
      controller :"homeCtrl"
    })
    .state('detail', {
      url: "/detail",
      templateUrl: "views/detail.html",
      controller :"detailCtrl"  
    });
});

 
