export const globalRoutes = function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
}

globalRoutes.$inject = ['$urlRouterProvider']
