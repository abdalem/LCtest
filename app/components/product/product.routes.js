export const routes = function routes($stateProvider) {
  $stateProvider
    .state('product', {
      url: '/product/?id',
      component: 'productComponent'
    })
}

routes.$inject = ['$stateProvider']
