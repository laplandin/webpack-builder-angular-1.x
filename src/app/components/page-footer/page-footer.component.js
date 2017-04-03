import template from './page-footer.template.html';

export default class pageFooter {
  constructor() {
    // this.scope = {};
    // this.restrict = 'E';
    this.template = template;
    // this.controllerAs = 'vm';
    this.controller = PageFooterController;
  }
}

class PageFooterController {
  constructor() {
    this.value = 'Footer';
  }
}
