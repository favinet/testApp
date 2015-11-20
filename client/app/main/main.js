(function () {

  'use strict';

  angular
    .module('testApp')
    .config(config);

  /* @ngInject */
  function config($stateProvider) { 
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
      });
  }

})();  