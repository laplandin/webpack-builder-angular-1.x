//конфигурация роутинга приложения

routes.$inject = ['$urlRouterProvider'];

export default function routes($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}
