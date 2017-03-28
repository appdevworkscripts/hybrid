var app=angular.module('myapp',['ui.router']);

app.config(['$stateProvider',function($stateProvider){
    var p1={
        name:'p1',
        url:'/pone',
        templateUrl:'views/p1.html',
        controller:'AbcController'
    }
    $stateProvider.state(p1);
    $stateProvider.state({
        name:'p2',
        url:'/p2',
        templateUrl:'views/p2.html',
        controller:'AbcController'
    })
}]);


app.controller('AbcController',['$scope','$http',function($scope,$http){

}])
