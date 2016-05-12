var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'bookStoreCtrls', 'bookStoreFilters','bookStoreServices', 'bookStoreDirectives'
]);


//$routeProvider when otherwise

bookStoreApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/list',{
    	templateUrl:'tpls/bookList.html',
    	controller:'BookListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});



/*
ui.router
var myUIRoute = angular.module('MyUIRoute', ['ui.router']);
myUIRoute.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/state1");
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "tpls/state1.html"
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "tpls/state1.list.html",
            controller: function($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "tpls/state2.html"
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "tpls/state2.list.html",
            controller: function($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        });
});


*/