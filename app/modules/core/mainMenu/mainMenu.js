define(['modules/core/mainMenu/mainMenuController', 
        'modules/core/mainMenu/mainMenuProvider', 
        'modules/core/mainMenu/mmDir'],
       function(mainMenuController, mainMenuProvider, mmDir){
    return angular.module("mainMenu", ['ngRoute'])
    .controller({
        'mainMenuController': mainMenuController
    })
    .provider({
        $_mainMenu: mainMenuProvider
    })
    .directive({
        'mmDir': mmDir
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
      }]);
    
 
  
})