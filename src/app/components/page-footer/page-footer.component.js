import pageFooterTemplate from './page-footer.template.html';

export default class pageFooter {
  constructor() {
    this.templateUrl = pageFooterTemplate;
    this.controller = PageFooterController;
  }
}

class PageFooterController {
  constructor() {
    this.value = 'Footer';
  }
}
