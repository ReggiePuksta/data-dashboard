angular.module('dataDashboard', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('dataDashboard').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('contacts', {
        url: "/contacts",
        templateUrl: "partial/hello/hello.html"
    });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('dataDashboard').run(function($rootScope) {
    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
