import * as angular from 'angular';

export class AuthController {
  static $inject = ['$scope', '$location'];
  
  message: string;
  authUsers: Array<any>;

  public username: string;
  public password: string;

  constructor(private $scope: IDataScope, private $location: angular.ILocationService) {
    this.message = "";
    this.username = "";
    this.password = "";

    // Sample users with email and password
    this.authUsers = [
      { email: 'shrikant@dtcs.com', password: "123" },
      { email: 'admin', password: "admin" }
    ];

    $scope['data'] = this;
  }

  public login(): void {
    let userFound = false;

    // Loop through the authUsers array to find a match
    for (let user of this.authUsers) {
        if (user.email === this.username && user.password === this.password) {
            userFound = true;
            this.message = 'Login Successful';
            this.$location.path('/product'); // Redirect to catalog page
            break; // Exit the loop once we find a match
        }
    }

    // If no user is found, show an error message
    if (!userFound) {
        this.message = 'Invalid credentials';
    }
}

}
