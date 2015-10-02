angular.module('App.Controllers', [])

    myApp.controller('homeCtrl', function ($scope, $state) {
        $scope.stateInfo = $state.current;
    })
    myApp.controller('detailCtrl', function ($scope, $state) {
        $scope.stateInfo = $state.current;
    });
