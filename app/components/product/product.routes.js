export default function routes($stateProvider) {
  $stateProvider
    .state('product', {
      url: '/product/?id',
      template: require('./product.html'),
      controller: 'productController as $ctrl'
    })
}

routes.$inject = ['$stateProvider']
