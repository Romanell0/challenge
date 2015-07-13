define(["modules/second/secondController"], 
       function(secondController){
    return angular.module("second", ['ngRoute'])
    .controller({
        "secondController": secondController
    })
    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
            .when('/second', {
                templateUrl: 'templates/second.html',
                controller: 'secondController',
                controllerAs: 'ctrl',
                title: 'бла лбла'
              });
          }])
    .config(['$_mainMenuProvider', function($_mainMenuProvider){
        $_mainMenuProvider.addItem({
            title: "second",
            link: "#/second"
        });
    }]);

    
})