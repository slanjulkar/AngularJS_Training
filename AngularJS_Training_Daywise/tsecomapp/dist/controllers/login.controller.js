var LoginController = /** @class */ (function () {
    function LoginController($scope) {
        this.$scope = $scope;
        this.username = '';
        this.password = '';
        this.message = 'Please enter your login credentials';
        // Bind this controller to the scope
        $scope['vm'] = this;
    }
    LoginController.prototype.login = function () {
        if (this.username && this.password) {
            // Mock login validation
            if (this.username === 'shrikant@dtcs' && this.password === '123') {
                this.message = 'Login successful!';
            }
            else {
                this.message = 'Invalid username or password';
            }
        }
        else {
            this.message = 'Please fill in both fields';
        }
    };
    LoginController.$inject = ['$scope'];
    return LoginController;
}());

