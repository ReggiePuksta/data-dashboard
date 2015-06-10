angular.module('rgAuth', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('rgAuth').config(function($stateProvider) {

    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'modules/rgAuth/partial-register/register.html'
    });
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'modules/rgAuth/partial-login/login.html'
    });
    /* Add New States Above */

});

