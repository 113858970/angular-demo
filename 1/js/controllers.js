var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl',
    function($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
    }
);

bookStoreCtrls.controller('BookListCtrl',
    function($scope) {
        $scope.books =[
        	{title:"book1",author:"name1"},
        	{title:"book2",author:"name2"},
        	{title:"book3",author:"name3"}
        ]
    }
);
