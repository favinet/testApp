(function () {
  'use strict';

  angular
    .module('testApp')
    .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl($scope, modal, logger, sgAlert, Auth) {
    
    $scope.getCurrentUser = Auth.getCurrentUser;

    Auth.getCurrentUser();

   
  }

})();