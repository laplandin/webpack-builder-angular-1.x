import angular from 'angular';

import HeaderNavDirective from './header-nav.directive.js';

export default angular.module('headerNav', [])
  .directive('headerNav', () => new HeaderNavDirective);
  // .service('HeaderNavService', HeaderNavService);
