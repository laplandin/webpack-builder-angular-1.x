export default class HeaderNavDirective {
  constructor() {
    this.restrict = 'E';
    this.scope = {};
    this.template = require('./header-nav.template.html');

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
