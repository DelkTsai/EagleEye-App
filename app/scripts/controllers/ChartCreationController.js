'use strict';

/**
 * @ngdoc function
 * @name eagleeye.controller:ChartCreationController
 */
angular.module('eagleeye')

.controller('ChartCreationController', [
  '$state',
  'EEDialogService',
  'GoogleChartsService',
  'EagleEyeWebService',
  'CHART_TYPE_OPTIONS',
  'IS_STACKED_OPTIONS',
  'AXIS_FORMAT_OPTIONS',
  function($state, EEDialogService, GoogleChartsService, EagleEyeWebService,
           CHART_TYPE_OPTIONS, IS_STACKED_OPTIONS, AXIS_FORMAT_OPTIONS) {

    this.chartTypeOptions = CHART_TYPE_OPTIONS;
    this.isStackedOptions = IS_STACKED_OPTIONS;
    this.axisFormatOptions = AXIS_FORMAT_OPTIONS;

    this.chart = {};

    /** @default 'ColumnChart' */
    this.chart.chartType = 'ColumnChart';

    this.chart.description = '';

    this.chart.options = {};
    this.chart.options.title = '';
    this.chart.options.combolines = '';

    /** @default false */
    this.chart.options.isStacked = false;

    this.chart.options.hAxis = {
      title: '',
      format: '' // default value
    };
    this.chart.options.vAxis = {
      title: '',
      format: '' // default value
    };
    this.chart.options.chartArea = {
      left: '',
      width: ''
    };

    /**
     * @method
     * @description Show an help dialog.
     */
    this.showHelp = function() {
      EEDialogService.showChartCreationHelping();
    };

    /**
     * Prepare the payload POST to server later, so that we could
     * create a new chart.
     * {@link https://github.com/CVBDL/EagleEye-Docs/blob/master/rest-api/rest-api.md#create-a-chart}.
     *
     * @method
     * @param {Object} chart The chart data model.
     * @returns {Object} The payload object.
     */
    this.makeChartPayload = function(chart) {
      var payload = {};

      payload.description = chart.description || '';
      payload.chartType = GoogleChartsService.makeChartType(chart.chartType);

      payload.datatable = GoogleChartsService.getChartDataTableSamples(
        chart.chartType);

      payload.options = GoogleChartsService.makeConfigurationOptions(
        chart.chartType, chart.options);

      return payload;
    };

    /**
     * Save the new chart to server.
     *
     * @method
     * @param {Object} chart The chart data model.
     */
    this.save = function(chart) {
      var payload = this.makeChartPayload(chart);

      EagleEyeWebService.createChart(payload)
        .then(function(newChart) {
          $state.go('chartSettings', {
            id: newChart._id
          });
        });
    };
  }
]);
