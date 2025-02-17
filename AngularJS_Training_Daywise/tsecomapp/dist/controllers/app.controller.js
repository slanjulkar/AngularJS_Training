var MyController = /** @class */ (function () {
    function MyController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to our store';
        this.users = [
            { name: 'shrikant Lanjulkar', email: 'shrikant@dtcs.com' }
        ];
        $scope['vm'] = this;
    }
    MyController.$inject = ['$scope'];
    return MyController;
}());
export { MyController };
//angular.module('myApp').controller('MyController', MyController);
