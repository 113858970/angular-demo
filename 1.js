ng-app
ng-init


{{2+2>3}}


ng-model


ng-repeat


ng-derictive




mvc  模块化  双向数据绑定 路由   依赖注入  指令   作用域    服务  



mvc 


ng-derictive = >link

$filter 


model ng-model ng-repeat 


ng-derictive

angular.injector()


// 创建myModule模块、注册服务  
var myModule = angular.module('myModule', []);  
myModule.service('myService', function() {  
            this.my = 0;  
});  
   
var herModule = angular.module('herModule', []);  
herModule.service('herService', function() {  
            this.her = 1;  
});  
  
// 加载了2个模块中的服务  
var injector = angular.injector(["myModule","herModule"]);  
alert(injector.get("myService").my);  
alert(injector.get("herService").her);  



事件指令   ng-click  ng-blur  ng-copy ng-cut

form指令

ng-derictive



$interval
每秒显示一次
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $interval) {
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);
});

$timeout
两秒后显示
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $timeout) {
    $scope.myHeader = "Hello World!";
    $timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 2000);
});





directive( 'myDirective', function () {
    return {
        template: '<a class="btn">Toggle me!</a>',
        link: function ( scope, element, attrs ) {
            var on = false;
 
            $(element).click( function () {
                if ( on ) {
                    $(element).removeClass( 'active' );
                }
                else {
                    $(element).addClass( 'active' );
                }
 
                on = !on;
            });
        }
    };
});





directive( 'myDirective', function () {
    return {
        scope: true,
        template: '<a class="btn" ng-class="{active: on}" ng-click="on =!on">Toggle me!</a>',
        link: function ( scope, element, attrs ) {
            scope.on = false;
 
            scope.toggle = function () {
                scope.on = !$scope.on;
            };
        }
    };
});