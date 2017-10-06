export const routes = function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      component: 'homeComponent'
    })
}

routes.$inject = ['$stateProvider']
