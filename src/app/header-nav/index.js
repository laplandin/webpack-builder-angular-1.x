import angular from 'angular';

import HeaderNavComponent from './header-nav.component.js';

export default angular.module('headerNav', [])
  .directive('headerNav', () => new HeaderNavComponent);
  // .service('HeaderNavService', HeaderNavService);
