export default function theming($mdIconProvider, $mdThemingProvider) {
  $mdIconProvider
    .icon("filter", "./app/assets/icons/filter.svg", 24)
}

theming.$inject = ['$mdIconProvider', '$mdThemingProvider']
