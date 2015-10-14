(function () {
	'use strict'; 

	
angular.module('App.Controllers', [])

    .controller('homeCtrl', function ($scope, $state) {
        $scope.stateInfo = $state.current;
    })
    .controller('detailCtrl', function ($scope, $state) {
        $scope.stateInfo = $state.current;
    });
});
