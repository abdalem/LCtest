export const theming = function($mdIconProvider, $mdThemingProvider) {
  $mdIconProvider
    .icon("filter", "./app/assets/icons/filter.svg", 24)
    .icon("add", "./app/assets/icons/add.svg", 24)
}

theming.$inject = ['$mdIconProvider', '$mdThemingProvider']
