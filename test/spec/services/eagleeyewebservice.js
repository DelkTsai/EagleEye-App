'use strict';

describe('Constant:', function() {
  var FRIENDLY_URL_PREFIX_CHART,
    FRIENDLY_URL_PREFIX_CHARTSET;

  beforeEach(module('eagleeye'));

  beforeEach(inject(function (_FRIENDLY_URL_PREFIX_CHART_, _FRIENDLY_URL_PREFIX_CHARTSET_) {
    FRIENDLY_URL_PREFIX_CHART = _FRIENDLY_URL_PREFIX_CHART_;
    FRIENDLY_URL_PREFIX_CHARTSET = _FRIENDLY_URL_PREFIX_CHARTSET_;
  }));

  describe('FRIENDLY_URL_PREFIX_CHART', function() {
    it('should be initialized', function() {
      expect(FRIENDLY_URL_PREFIX_CHART).toBe('c-');
    });
  });

  describe('FRIENDLY_URL_PREFIX_CHARTSET', function() {
    it('should be initialized', function() {
      expect(FRIENDLY_URL_PREFIX_CHARTSET).toBe('s-');
    });
  });
});

describe('Service: EagleEyeWebService', function () {

  var chartId                      = '57837029c66dc1a4570962b6';
  var rootEndpoint                 = 'http://8.8.8.8:6666/';
  var webServiceBaseUrl            = rootEndpoint + 'api/v1/';
  var staticServerSideImageBaseUrl = rootEndpoint + 'uploadChartImages/';
  var excelTemplateDownloadBaseUrl = webServiceBaseUrl + 'download/excels/';
  var excelTemplateDownloadUrl     = webServiceBaseUrl + 'download/excels/' + chartId;

  // load the service's module
  beforeEach(module('eagleeye'));

  // instantiate service
  var EagleEyeWebService,
    $httpBackend;

  beforeEach(inject(function (_EagleEyeWebService_) {
    EagleEyeWebService = _EagleEyeWebService_;
  }));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should export correct interfaces', function() {
    var exports = [
      'getCharts',
      'getChartById',
      'createChart',
      'getChartSets',
      'getChartSetById',
      'createChartSet',
      'deleteChartById',
      'deleteChartSetById',
      'updateChartSetById',
      'uploadFile'
    ];

    exports.forEach(function(fnName) {
      expect(EagleEyeWebService[fnName]).toBeDefined();
    });
  });

});
