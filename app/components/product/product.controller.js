export default class productController {
  constructor(
    apiService,
    $stateParams,
    $state
  ) {
    this.apiService = apiService
    this.$stateParams = $stateParams
    this.$state = $state
  }

  $onInit() {
    this.createMode = angular.isUndefined(this.$stateParams.id)?true:false

    this.apiService.getBrands().then(response => {
      this.brands = response.data
    })

    this.apiService.getCategories().then(response => {
      this.categories = response.data
    })

    if (!this.createMode) {
      this.apiService.getProduct(this.$stateParams.id).then(response => {
        this.product = {id: response.data.id, description: response.data.description, name: response.data.name, brand: response.data.brand.id, categories: []}
        for (let i = 0; i < response.data.categories.length; i++) {
          this.product.categories.push(response.data.categories[i].id)
        }
      })
    }
  }

  /**
  * Call apiService to add a new product on api
  *
  * @param {Object} product
  *
  */
  addProduct(product) {
    console.log(product);
    this.apiService.addProduct(product)
    this.$state.go('home')
  }

  /**
  * Call apiService to update a product on api
  *
  * @param {Object} product
  *
  */
  updateProduct(product) {
    this.apiService.updateProduct(product)
    this.$state.go('home')
  }
}

productController.$inject = ['apiService', '$stateParams', '$state']
