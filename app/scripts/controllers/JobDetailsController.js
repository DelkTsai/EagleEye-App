'use strict';

/**
 * @ngdoc function
 * @name eagleeye.controller:JobDetailsController
 */
angular.module('eagleeye')
  .controller('JobDetailsController', [
    function() {
      this.job = {
        enabled: true
      };

      this.customExpression = {};

      this.expressionOptions = [{
        label: 'Use Custom Expression',
        value: 'custom'
      }, {
        label: 'Hourly',
        value: '0 * * * *'
      }, {
        label: 'Daily',
        value: '0 0 * * *'
      }, {
        label: 'Weekly',
        value: '0 0 * * 0'
      }, {
        label: 'Monthly',
        value: '0 0 1 * *'
      }, {
        label: 'Yearly',
        value: '0 0 1 1 *'
      }];

      this.save = function(job) {
        console.log(job);
      };
    }
  ]);