var app=angular.module("catDogMod");

app.config(function($routeProvider){

    $routeProvider


     .when('/',{
            controller: 'cdRouteCtrl',
            templateUrl: 'views/defaultview.html'

        })

        .when('/cat',{
            controller: 'cdRouteCtrl',
            templateUrl: 'views/catview.html'

        })

        .when('/dog',{
            controller: 'cdRouteCtrl',
            templateUrl: 'views/dogview.html'

        })

        .otherwise({
            templateUrl: 'views/catdogview.html'

        });


});