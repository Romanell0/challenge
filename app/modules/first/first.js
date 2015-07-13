define(['modules/first/firstController'],
       function(firstController){
    return angular.module("first", ['ngRoute'])
    .controller({
        'firstController': firstController
    })
    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/first', {
            templateUrl: 'templates/first.html',
            controller: 'firstController',
            controllerAs: 'ctrl',
            title: 'first'
          });
      }])
    .config(['$_mainMenuProvider', function($_mainMenuProvider){
        $_mainMenuProvider.addItem({
            title: "first",
            link: "#/first"
        });
    }]);
    
 
  
})