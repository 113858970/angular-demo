/*

什么是angular

AngularJS 是一个 JavaScript 框架。它可通过 <script> 标签添加到 HTML 页面。
AngularJS 通过 指令 扩展了 HTML，且通过 表达式 绑定数据到 HTML。
什么是指令：ng-app ,ng-init 
什么是表达式: {{2+2 > 3}}


AngularJS 把应用程序数据绑定到 HTML 元素。   ng-model ng-controller
AngularJS 可以克隆和重复 HTML 元素。         ng-repeat ng-options
AngularJS 可以隐藏和显示 HTML 元素。         ng-hide ng-show ng-if
AngularJS 可以在 HTML 元素"背后"添加代码。   ng-derictive
AngularJS 支持输入验证。                     $filter服务 或者 对form表单的判断







angular的特性

mvc 模块化 双向数据绑定  指令  依赖注入  路由  作用域  服务



mvc (a.html b.html c.html)

控制器

ng-controller

controller使用注意

不要试图去复用controller，一个控制器只负责一小块视图

不要在controller中操作dom，操作dom是通过指令的link，因为操作dom渲染是非常昂贵

不要在controller里面做数据格式化，ng有很好用的表单控件

不要在controller里面做数据过滤操作，ng有$filter的服务

一般来说，controller是不会互相调用，控制器之间的交互会通过事件进行


模型(b.html)

ng-model ng-repeat



视图(c.html)

ng-directive



模块化 (d.html)
模块是一些功能的集合，如控制器、服务、过滤器、指令等子元素组成的整体




双向数据绑定 (e.html)



路由 (文件夹1)

angular-ui-route




依赖模块注入  (文件夹1)

angular.module(name, [requires], [configFn]);

name：字符串类型，代表模块的名称；

requires：字符串的数组，代表该模块依赖的其他模块列表，如果不依赖其他模块，用空数组即可；

configFn：用来对该模块进行一些配置。


依赖注入的另一种实现方式

angular.injector()实现依赖注入

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



指令

事件指令 ng-click ng-bind ng-mouseover ng-blur ng-change ng-copy ng-cut
f.html

	
form指令
g.html


自定义指令(h.html - p.html)
ng-directive 





过滤器 $filter =>q.html


自定义过滤器 r.html


服务

$http (s.html)

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

$location ＝>URL的操作

$log =>日志服务

自定义服务 =>t.html





angular和jquery的一些事

1.绝不要先设计你的页面，然后用DOM操作去改变它，根据架构去思考，而不是根据功能去思考

  jquery中，一般都是看到设计稿，直接切图，切完之后通过对dom的各种操作实现最终的效果
  angular不能一开始就想到有一个这样的dom，要让他做什么，因为是基于mvc的，所以应该先设计应用，在设计试图
  必须考虑如何将应用拆分为独立，可扩展，可测试的组件。



2.不要用jQuery扩展angular

	jQuery可以完成X，Y，Z，所以我只要在指令和控制器添加jquery的方法就行了。在起步阶段这确实很容易勾引你，
但是最好angular的新手刚开始先放弃jquery,用angular的方式去解决angular的问题


3.数据绑定

jquery :

通过对dom的操作 $('#log').append('<li>text</li>');

angular:

<div ng-controller = "msg">{{ msg }}</div>

msg.controller('msg',function($scope){ 
  $scope.msg = 'text'
})


4.指令不是jQuery插件

只在指令里做dom操作

如：
使用ng-class我们能够动态的更新类；
ng-model允许双向的数据绑定；
ng-show和ng-hide显示或隐藏一个元素；
注:dom操作越少，对页面的渲染压力越小,在未来它们也更容易改变，并且也变得更加可重用和可分发。


问：既然控制器不能操作dom,那就在指令里面通过jquery操作dom

.directive( 'myDirective', function () {
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

第一，jQuery不是必须的。我们这里做的一切都不需要jQuery！

第二，即使是我们的页面上已经有jQuery，也没有理由一定要在这里使用它；
	  我们可以简单的使用angular.element，传递给link函数的element已经是一个jQuery元素

第三，为什么我们要将模板混合进我们的逻辑呢？

directive( 'myDirective', function () {
    return {
        scope: true,
        template: '<a class="btn" ng-class="{active: on}" ng-click="toggle()">Toggle me!</a>',
        link: function ( scope, element, attrs ) {
            scope.on = false;
 
            scope.toggle = function () {
                scope.on = !$scope.on;
            };
        }
    };
});

别用jQuery，甚至都别引用它，它会阻碍你，当你有个问题已经知道怎么用jQuery来解决的时候，
在你将手伸向$的时候，试试能不能在Angular.js的规范内解决。


*/