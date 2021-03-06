(function() {
   'use strict';

   angular
      .module('iigame.alerts')
      .controller('AlertsCtrl', AlertsCtrl);

   /** @ngInject */
   function AlertsCtrl(AlertsService) {
      var vm = this;

      vm.getAlerts = AlertsService.getAlerts;
      vm.closeAlert = closeAlert;

      ////////////

      function closeAlert(index) {
         AlertsService.removeAlert(index);
      }

   }

}());