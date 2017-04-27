var scriptApp = angular.module('scriptApp',[]);

scriptApp.controller('scriptController',function($scope,$http){

    $http.get("./js/images.json")
    .then(function(res){
        $scope.data = res.data;
    });

});
