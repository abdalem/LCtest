export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.html'),
      controller: 'homeController as $ctrl'
    })
}

routes.$inject = ['$stateProvider']
