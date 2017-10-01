export default function routes($urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
}

routes.$inject = ['$urlRouterProvider']
