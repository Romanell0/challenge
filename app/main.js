require.config({
    "waitSeconds" : 10,
    paths: {
        "angular": "bower/angular/angular",
        "angular-route": "bower/angular-route/angular-route",
        "lodash": "bower/lodash/lodash"
//        "first": "modules/first/first",
//        "second": "modules/second/second"
    },
    
    shim: {
        app: {
            deps: ["angular", "angular-route"]
        },
//        first: {
//            deps: ["angular"]
//        },
//        second: {
//            deps: ["angular"]
//        },
        'angular-route': {
            deps: ["angular"]
        }
    }
    
});

require(["app"], function(){
    angular.bootstrap(document, ["app"]);
})