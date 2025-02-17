
authModule.controller("LoginController",function($scope){

    $scope.users=[
        {email:"shrikant.lanjulkar@dtcs.com",password:"shrikant"},
        {email:"lukesh.b@dtcs.com",password:"lukesh"},
        {email:"amit.b@dtcs.com",password:"amit"},
        {email:"tejas@dtcs.com",password:"tejas"},
        {email:"akash.n@dtcs.com",password:"akash"}
    ];

    // Login function
    $scope.onLogin = function() {
        var user = $scope.user;
        
        var validUser = $scope.users.find(u => u.email === user.email && u.password === user.password);

        if (validUser) {
            $window.location.href = 'index.html';
        } else {
            alert('Invalid username or password!');
        }
    };
});