export default class HeaderNavComponent {
  constructor() {
    this.restrict = 'E';
    this.scope = {};
    this.template = '<h1>{{ctrl.name}}</h1>';

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
