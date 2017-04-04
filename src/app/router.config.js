//конфигурация роутинга приложения

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  let headerState = {
    name: 'header',
    url: '/header',
    template: '<header-nav></header-nav>'
  }

  let footerState = {
    name: 'footer',
    url: '/footer',
    // template: '<page-footer></page-footer>'\
    templateUrl: '/media/laplandin/Work/GIT/webpack/src/app/components/page-footer/page-footer.template.html'
    // component: 'pageFooter'
  }

  $stateProvider.state(headerState);
  $stateProvider.state(footerState);
}
