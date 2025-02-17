
// Define the AngularJS module
var appModule = angular.module('myApp', ['ngRoute', 'authmodule', 'productmodule']);
appModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/product", {
            templateUrl: "src/views/product.html",
            controller: "Productcontroller"
        })
            .when("/login", {
            templateUrl: "src/views/login.html",
            controller: "AuthController"
        })
            .otherwise({
            redirectTo: "product"
        });
    }]);
