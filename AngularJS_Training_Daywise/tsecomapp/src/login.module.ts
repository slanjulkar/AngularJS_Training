import * as angular from 'angular';
import { LoginController } from './controllers/login.controller';

// Define the 'login' module and its dependencies (empty array means no dependencies for now)
angular.module('loginModule', []);

// Register the LoginController with the 'loginModule' module
angular.module('loginModule').controller('LoginController', LoginController);
