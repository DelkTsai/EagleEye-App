'use strict';

/**
 * @ngdoc function
 * @name eagleeye.controller:AppController
 */
angular.module('eagleeye')

.controller('AppController', [
  'FEEDBACK_EMAIL',
  function(FEEDBACK_EMAIL) {
    this.feedbackLink =
      'mailto:' + FEEDBACK_EMAIL + '?subject=EagleEye+Feedback';
  }
]);
