export default class addProductCtrl {
  constructor(
    apiService
  ) {
    this.apiService = apiService
  }

  $onInit() {
      this.apiService.getBrands().then(response => {
        console.log(response);
        this.brands = response.data
      })

      this.apiService.getCategories().then(response => {
        this.categories = response.data
      })
  }

  addProduct(product) {
    console.log(product);
    // this.apiService.addProduct(product)
  }
}

addProductCtrl.$inject = ['apiService']
