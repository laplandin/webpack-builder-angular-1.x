import headerNavTemplate from './header-nav.template.html';

export default class HeaderNavDirective {
  constructor() {
    this.restrict = 'E';
    this.scope = {};
    this.templateUrl = headerNavTemplate;

    this.controller = HeaderNavController;
    this.controllerAs = 'ctrl';
    this.bindToController = true;
  }
}

class HeaderNavController {
  constructor() {
    this.name = 'Denis';
  }
}
