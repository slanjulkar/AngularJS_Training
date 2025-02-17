import * as angular from 'angular';

interface ILoginScope extends angular.IScope {
  vm: any; 
}

export class LoginController {
  static $inject = ['$scope'];
  username: string;
  password: string;
  message: string;

  constructor(private $scope: ILoginScope) {
    this.username = '';
    this.password = '';
    this.message = 'Please enter your login credentials';

    // Bind this controller to the scope
    $scope['vm'] = this;
  }

  login(): void {
    if (this.username && this.password) {
      // Mock login validation
      if (this.username === 'admin' && this.password === 'password123') {
        this.message = 'Login successful!';
      } else {
        this.message = 'Invalid username or password';
      }
    } else {
      this.message = 'Please fill in both fields';
    }
  }
}
