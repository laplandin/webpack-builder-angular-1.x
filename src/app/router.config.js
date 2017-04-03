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
    component: 'pageFooter'
  }

  $stateProvider.state(headerState);
  $stateProvider.state(footerState);
}
