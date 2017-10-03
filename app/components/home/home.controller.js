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
      console.log(this.products);
    })
  }

  toggleList() {
    this.$mdSidenav('left').toggle()
  }

  setBckgImg(image) {
    return {"background-image": "url(" + image + ")"}
  }
}

homeController.$inject = ['apiService', '$mdSidenav']
