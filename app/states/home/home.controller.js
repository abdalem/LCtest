export default class homeController {
  constructor(
    apiService
  ) {
    this.apiService = apiService
  }

  $onInit() {
    this.apiService.getProducts().then(response => {
      this.products = response.data
      console.log(this.products);
    })
  }
}

homeController.$inject = ['apiService']
