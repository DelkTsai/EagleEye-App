'use strict';

/**
 * @ngdoc function
 * @name eagleeye.controller:ChartOptionsController
 * @description
 * # ChartOptionsController
 * Controller of the eagleeye
 */
angular.module('eagleeye')
  .controller('ChartOptionsController', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$mdDialog',
    'GoogleChartsService',
    'EagleEyeWebService',
    function($scope, $http, $state, $stateParams, $mdDialog, GoogleChartsService, EagleEyeWebService) {
      var controller = this;
      var friendlyUrlPrefix = 'c-';

      controller.id = $stateParams.id;

      this.chartType = '';

      this.stackOptions = [{
        value: true,
        label: 'Yes'
      }, {
        value: false,
        label: 'No'
      }];

      this.formatOptions = [{
        value: 'percent',
        label: 'Yes'
      }, {
        value: '',
        label: 'No'
      }];

      this.chart = {
        description: '',
        friendlyUrl: '',
        options: {
          title: '',
          hAxis: {
            title: '',
            format: ''
          },
          vAxis: {
            title: '',
            format: ''
          },
          combolines: '',
          isStacked: 'false',
          chartArea: {
            left: '',
            width: ''
          }
        }
      };

      this.save = function() {
        var savedData = angular.copy(this.chart, {}),
          chartArea = {};

        if (this.chart.friendlyUrl) {
          savedData.friendlyUrl = friendlyUrlPrefix + this.chart.friendlyUrl;
        }

        if (this.chart.options.chartArea.left !== '') {
          chartArea.left = this.chart.options.chartArea.left;
        }

        if (this.chart.options.chartArea.width !== '') {
          chartArea.width = this.chart.options.chartArea.width;
        }

        savedData.options.chartArea = chartArea;

        EagleEyeWebService.updateChartById(controller.id, JSON.stringify(savedData)).then(function() {
          $state.go('chart', {
            id: controller.id
          });

        }, function(error) {
          console.log(error);
        });
      };

      this.showHelp = function(ev) {
        $mdDialog.show({
          templateUrl: 'scripts/templates/chart-creation-help.tmpl.html',
          controller: ['$scope', function($scope) {
            $scope.cancel = function() {
              $mdDialog.cancel();
            };
          }],
          parent: angular.element(document.body),
          clickOutsideToClose: true
        });
      };

      function init() {
        EagleEyeWebService.getChartById(controller.id).then(function(response) {
          controller.id = response._id;
          controller.chartType = response.chartType;
          controller.domainDataType = response.domainDataType;

          controller.chart.description = response.description;
          controller.chart.friendlyUrl = response.friendlyUrl;
          controller.chart.options     = response.options;
          controller.chart.friendlyUrl = response.friendlyUrl ? response.friendlyUrl.substring(2) : '';
        });
      };

      init();
    }
  ]);
