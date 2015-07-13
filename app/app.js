define('app', [
        "modules/core/mainMenu/mainMenu",
        "modules/first/first",
        "modules/second/second"],
   function(first){
   angular.module("app", ['mainMenu', 'first', 'second', 'ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .otherwise({
                    redirectTo: '/first'
                });
    }]);
});