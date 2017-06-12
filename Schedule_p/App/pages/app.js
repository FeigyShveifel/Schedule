(function () {
    'use strict';
    angular.module('SlApp.filter', []);
    angular.module('SlApp.route', []);
    angular.module('SlApp.home', []);
    angular.module('SlApp.schedule', []);
    angular.module('SlApp.clock', []);
    angular.module('SlApp.time', []);
    angular.module('SlApp', [
        // Angular modules 
        'ngRoute',
        'SlApp.route',
        'SlApp.route',
        'SlApp.time',
        // Custom modules 
        'SlApp.home',
        'SlApp.schedule',
        'SlApp.clock',

        // 3rd Party Modules
        
    ]);
})();