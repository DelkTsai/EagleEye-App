'use strict';

/**
 * @ngdoc service
 * @name eagleeye.GoogleChartsService
 * @description
 * # GoogleChartsService
 * Factory in the eagleeye.
 */
angular.module('eagleeye')
  .provider('GoogleChartsService', function GoogleChartsServiceProvider() {
    var chartTypeOptions = [{
      label: 'Line Chart',
      value: 'LineChart',
      construcorName: 'LineChart'
    }, {
      label: 'Column Chart',
      value: 'ColumnChart',
      construcorName: 'ColumnChart'
    }, {
      label: 'Bar Chart',
      value: 'BarChart',
      construcorName: 'BarChart'
    }, {
      label: 'Combo Chart',
      value: 'ComboChart',
      construcorName: 'ComboChart'
    }];

    // https://developers.google.com/chart/interactive/docs/reference#dataparam
    var chartDataTableSamples = {
      string: {"cols":[{"label":"City","type":"string"},{"label":"2010 Population","type":"number"},{"label":"2000 Population","type":"number"}],"rows":[{"c":[{"v":"New York City, NY"},{"v":8175000},{"v":8008000}]},{"c":[{"v":"Los Angeles, CA"},{"v":3792000},{"v":3694000}]},{"c":[{"v":"Chicago, IL"},{"v":2695000},{"v":2896000}]},{"c":[{"v":"Houston, TX"},{"v":2099000},{"v":1953000}]},{"c":[{"v":"Philadelphia, PA"},{"v":1526000},{"v":1517000}]}]},
      number: {"cols":[{"id":"","label":"X","pattern":"","type":"number"},{"id":"","label":"Dogs","pattern":"","type":"number"},{"id":"","label":"Cats","pattern":"","type":"number"}],"rows":[{"c":[{"v":0},{"v":0},{"v":0}]},{"c":[{"v":1},{"v":10},{"v":5}]},{"c":[{"v":2},{"v":23},{"v":15}]},{"c":[{"v":3},{"v":17},{"v":9}]},{"c":[{"v":4},{"v":18},{"v":10}]},{"c":[{"v":5},{"v":9},{"v":5}]},{"c":[{"v":6},{"v":11},{"v":3}]},{"c":[{"v":7},{"v":27},{"v":19}]},{"c":[{"v":8},{"v":33},{"v":25}]},{"c":[{"v":9},{"v":40},{"v":32}]},{"c":[{"v":10},{"v":32},{"v":24}]},{"c":[{"v":11},{"v":35},{"v":27}]},{"c":[{"v":12},{"v":30},{"v":22}]},{"c":[{"v":13},{"v":40},{"v":32}]},{"c":[{"v":14},{"v":42},{"v":34}]},{"c":[{"v":15},{"v":47},{"v":39}]},{"c":[{"v":16},{"v":44},{"v":36}]},{"c":[{"v":17},{"v":48},{"v":40}]},{"c":[{"v":18},{"v":52},{"v":44}]},{"c":[{"v":19},{"v":54},{"v":46}]},{"c":[{"v":20},{"v":42},{"v":34}]},{"c":[{"v":21},{"v":55},{"v":47}]},{"c":[{"v":22},{"v":56},{"v":48}]},{"c":[{"v":23},{"v":57},{"v":49}]},{"c":[{"v":24},{"v":60},{"v":52}]},{"c":[{"v":25},{"v":50},{"v":42}]},{"c":[{"v":26},{"v":52},{"v":44}]},{"c":[{"v":27},{"v":51},{"v":43}]},{"c":[{"v":28},{"v":49},{"v":41}]},{"c":[{"v":29},{"v":53},{"v":45}]},{"c":[{"v":30},{"v":55},{"v":47}]},{"c":[{"v":31},{"v":60},{"v":52}]},{"c":[{"v":32},{"v":61},{"v":53}]},{"c":[{"v":33},{"v":59},{"v":51}]},{"c":[{"v":34},{"v":62},{"v":54}]},{"c":[{"v":35},{"v":65},{"v":57}]},{"c":[{"v":36},{"v":62},{"v":54}]},{"c":[{"v":37},{"v":58},{"v":50}]},{"c":[{"v":38},{"v":55},{"v":47}]},{"c":[{"v":39},{"v":61},{"v":53}]},{"c":[{"v":40},{"v":64},{"v":56}]},{"c":[{"v":41},{"v":65},{"v":57}]},{"c":[{"v":42},{"v":63},{"v":55}]},{"c":[{"v":43},{"v":66},{"v":58}]},{"c":[{"v":44},{"v":67},{"v":59}]},{"c":[{"v":45},{"v":69},{"v":61}]},{"c":[{"v":46},{"v":69},{"v":61}]},{"c":[{"v":47},{"v":70},{"v":62}]},{"c":[{"v":48},{"v":72},{"v":64}]},{"c":[{"v":49},{"v":68},{"v":60}]},{"c":[{"v":50},{"v":66},{"v":58}]},{"c":[{"v":51},{"v":65},{"v":57}]},{"c":[{"v":52},{"v":67},{"v":59}]},{"c":[{"v":53},{"v":70},{"v":62}]},{"c":[{"v":54},{"v":71},{"v":63}]},{"c":[{"v":55},{"v":72},{"v":64}]},{"c":[{"v":56},{"v":73},{"v":65}]},{"c":[{"v":57},{"v":75},{"v":67}]},{"c":[{"v":58},{"v":70},{"v":62}]},{"c":[{"v":59},{"v":68},{"v":60}]},{"c":[{"v":60},{"v":64},{"v":56}]},{"c":[{"v":61},{"v":60},{"v":52}]},{"c":[{"v":62},{"v":65},{"v":57}]},{"c":[{"v":63},{"v":67},{"v":59}]},{"c":[{"v":64},{"v":68},{"v":60}]},{"c":[{"v":65},{"v":69},{"v":61}]},{"c":[{"v":66},{"v":70},{"v":62}]},{"c":[{"v":67},{"v":72},{"v":64}]},{"c":[{"v":68},{"v":75},{"v":67}]},{"c":[{"v":69},{"v":80},{"v":72}]}]},
      date: {"cols":[{"id":"","label":"Time of Day","pattern":"","type":"date"},{"id":"","label":"Rating","pattern":"","type":"number"}],"rows":[{"c":[{"v":"Date(2015, 0, 1)"},{"v":5}]},{"c":[{"v":"Date(2015, 0, 2)"},{"v":7}]},{"c":[{"v":"Date(2015, 0, 3)"},{"v":3}]},{"c":[{"v":"Date(2015, 0, 4)"},{"v":1}]},{"c":[{"v":"Date(2015, 0, 5)"},{"v":3}]},{"c":[{"v":"Date(2015, 0, 6)"},{"v":4}]},{"c":[{"v":"Date(2015, 0, 7)"},{"v":3}]},{"c":[{"v":"Date(2015, 0, 8)"},{"v":4}]},{"c":[{"v":"Date(2015, 0, 9)"},{"v":2}]},{"c":[{"v":"Date(2015, 0, 10)"},{"v":5}]},{"c":[{"v":"Date(2015, 0, 11)"},{"v":8}]},{"c":[{"v":"Date(2015, 0, 12)"},{"v":6}]},{"c":[{"v":"Date(2015, 0, 13)"},{"v":3}]},{"c":[{"v":"Date(2015, 0, 14)"},{"v":3}]},{"c":[{"v":"Date(2015, 0, 15)"},{"v":5}]},{"c":[{"v":"Date(2015, 0, 16)"},{"v":7}]},{"c":[{"v":"Date(2015, 0, 17)"},{"v":6}]},{"c":[{"v":"Date(2015, 0, 18)"},{"v":6}]},{"c":[{"v":"Date(2015, 0, 19)"},{"v":3}]},{"c":[{"v":"Date(2015, 0, 20)"},{"v":1}]},{"c":[{"v":"Date(2015, 0, 21)"},{"v":2}]},{"c":[{"v":"Date(2015, 0, 22)"},{"v":4}]},{"c":[{"v":"Date(2015, 0, 23)"},{"v":6}]},{"c":[{"v":"Date(2015, 0, 24)"},{"v":5}]},{"c":[{"v":"Date(2015, 0, 25)"},{"v":9}]},{"c":[{"v":"Date(2015, 0, 26)"},{"v":4}]},{"c":[{"v":"Date(2015, 0, 27)"},{"v":9}]},{"c":[{"v":"Date(2015, 0, 28)"},{"v":8}]},{"c":[{"v":"Date(2015, 0, 29)"},{"v":6}]},{"c":[{"v":"Date(2015, 0, 30)"},{"v":4}]},{"c":[{"v":"Date(2015, 0, 31)"},{"v":6}]},{"c":[{"v":"Date(2015, 1, 1)"},{"v":7}]},{"c":[{"v":"Date(2015, 1, 2)"},{"v":9}]}]},
      datetime: {"cols":[{"id":"","label":"Time of Day","pattern":"","type":"datetime"},{"id":"","label":"Motivation Level","pattern":"","type":"number"}],"rows":[{"c":[{"v":"Date(2015, 0, 1)"},{"v":5}]},{"c":[{"v":"Date(2015, 0, 1, 0, 30, 0)"},{"v":5.1}]},{"c":[{"v":"Date(2015, 0, 1, 1, 0, 0)"},{"v":6.2}]},{"c":[{"v":"Date(2015, 0, 1, 2, 0, 0)"},{"v":7}]},{"c":[{"v":"Date(2015, 0, 1, 3, 0, 0)"},{"v":6.4}]},{"c":[{"v":"Date(2015, 0, 1, 4, 0, 0)"},{"v":3}]},{"c":[{"v":"Date(2015, 0, 1, 5, 0, 0)"},{"v":4}]},{"c":[{"v":"Date(2015, 0, 1, 6, 0, 0)"},{"v":4.2}]},{"c":[{"v":"Date(2015, 0, 1, 7, 0, 0)"},{"v":1}]},{"c":[{"v":"Date(2015, 0, 1, 8, 0, 0)"},{"v":2.7}]},{"c":[{"v":"Date(2015, 0, 1, 9, 0, 0)"},{"v":3.9}]},{"c":[{"v":"Date(2015, 0, 1, 10, 0, 0)"},{"v":3.8}]},{"c":[{"v":"Date(2015, 0, 1, 11, 0, 0)"},{"v":5}]},{"c":[{"v":"Date(2015, 0, 1, 12, 0, 0)"},{"v":6.2}]},{"c":[{"v":"Date(2015, 0, 1, 13, 0, 0)"},{"v":7.8}]},{"c":[{"v":"Date(2015, 0, 1, 14, 0, 0)"},{"v":9.1}]},{"c":[{"v":"Date(2015, 0, 1, 15, 0, 0)"},{"v":8}]},{"c":[{"v":"Date(2015, 0, 1, 16, 0, 0)"},{"v":6.8}]},{"c":[{"v":"Date(2015, 0, 1, 17, 0, 0)"},{"v":7.2}]},{"c":[{"v":"Date(2015, 0, 1, 18, 0, 0)"},{"v":4}]},{"c":[{"v":"Date(2015, 0, 1, 19, 0, 0)"},{"v":5.9}]},{"c":[{"v":"Date(2015, 0, 1, 20, 0, 0)"},{"v":6.3}]},{"c":[{"v":"Date(2015, 0, 1, 21, 0, 0)"},{"v":6}]},{"c":[{"v":"Date(2015, 0, 1, 22, 0, 0)"},{"v":3}]},{"c":[{"v":"Date(2015, 0, 1, 23, 0, 0)"},{"v":2.2}]},{"c":[{"v":"Date(2015, 0, 2)"},{"v":2.4}]},{"c":[{"v":"Date(2015, 0, 2, 1, 0, 0)"},{"v":3.6}]},{"c":[{"v":"Date(2015, 0, 2, 2, 0, 0)"},{"v":4}]},{"c":[{"v":"Date(2015, 0, 2, 3, 0, 0)"},{"v":5.5}]},{"c":[{"v":"Date(2015, 0, 2, 4, 0, 0)"},{"v":7.1}]},{"c":[{"v":"Date(2015, 0, 2, 5, 0, 0)"},{"v":6}]},{"c":[{"v":"Date(2015, 0, 2, 6, 0, 0)"},{"v":7.8}]},{"c":[{"v":"Date(2015, 0, 2, 7, 0, 0)"},{"v":8.2}]},{"c":[{"v":"Date(2015, 0, 2, 8, 0, 0)"},{"v":9}]}]}
    };

    var chartDataTableComboSamples = {
      string: {"cols":[{"label":"Month","type":"string"},{"label":"Bolivia","type":"number"},{"label":"Ecuador","type":"number"},{"label":"Madagascar","type":"number"},{"label":"Papua New Guinea","type":"number"},{"label":"Rwanda","type":"number"},{"label":"Average","type":"number"}],"rows":[{"c":[{"v":"2004/05"},{"v":165},{"v":938},{"v":522},{"v":998},{"v":450},{"v":614.6}]},{"c":[{"v":"2005/06"},{"v":135},{"v":1120},{"v":599},{"v":1268},{"v":288},{"v":682}]},{"c":[{"v":"2006/07"},{"v":157},{"v":1167},{"v":587},{"v":807},{"v":397},{"v":623}]},{"c":[{"v":"2007/08"},{"v":139},{"v":1110},{"v":615},{"v":968},{"v":215},{"v":609.4}]},{"c":[{"v":"2008/09"},{"v":136},{"v":691},{"v":629},{"v":1026},{"v":366},{"v":569.6}]}]},
      number: {},
      date: {},
      datetime: {}
    };

    var defaultChartOptions = {
      linechart: {},
      columnchart: {},
      barchart: {},
      combochart: {}
    };


    function setDefaultChartOptions(chartType, options) {
      angular.extend(defaultChartOptions[chartType], options);
    }

    function setDefaultChartData(chartType, data) {
      angular.extend(defaultChartData[chartType], data);
    }

    this.setLineChartDefaultOptions = function(options) {
      setDefaultChartOptions('linechart', options);
    };

    this.setColumnChartDefaultOptions = function(options) {
      setDefaultChartOptions('columnchart', options);
    };

    this.setBarChartDefaultOptions = function(options) {
      setDefaultChartOptions('barchart', options);
    };

    this.setComboChartDefaultOptions = function(options) {
      setDefaultChartOptions('combochart', options);
    };

    this.$get = [function() {
      return {
        getChartTypeOptions: function() {
          return chartTypeOptions;
        },
        getChartDataTableSamples: function(chartType) {
          if(chartType == "combochart"){
            return chartDataTableComboSamples;
          } else {
            return chartDataTableSamples;
          }
        },
        getDefaultChartOptions: function() {
          return defaultChartOptions;
        }
      };
    }];

  });
