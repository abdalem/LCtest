export default class homeController {
  constructor(
    apiService,
    $mdSidenav
  ) {
    this.apiService = apiService
    this.$mdSidenav = $mdSidenav
  }

  $onInit() {
    this.apiService.getProducts().then(response => {
      this.products = response.data
    })
  }

  toggleList() {
    this.$mdSidenav('left').toggle();
  }
}

homeController.$inject = ['apiService', '$mdSidenav']
