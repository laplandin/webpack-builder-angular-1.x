'use strict';
import angular from 'angular';
import uirouter from 'angular-ui-router';

// Компоненты приложения
import headerNav from './components/header-nav/index.js';
import pageFooter from './components/page-footer/index.js';

import routes from './router.config.js';

console.log('init myApp');
angular.module("myApp", [
  uirouter,
  'headerNav',
  'pageFooter'
])
  .config(routes);
