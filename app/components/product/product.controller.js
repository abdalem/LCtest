export default class productController {
  constructor(
    apiService,
    $stateParams,
    $state,
    $mdToast
  ) {
    this.apiService = apiService
    this.$stateParams = $stateParams
    this.$state = $state
    this.$mdToast = $mdToast
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
    this.apiService.addProduct(product).then(response => {
      if(response.status == 201) {
        this.showToast('Votre produit a bien été créé')
        this.$state.go('home')
      } else {
        this.showToast('Une erreur a été détecté')
      }
    })
  }

  /**
  * Call apiService to update a product on api
  *
  * @param {Object} product
  *
  */
  updateProduct(product) {
    this.apiService.updateProduct(product).then(response => {
      if(response.status == 200) {
        this.showToast('Votre produit a bien été modifé')
        this.$state.go('home')
      } else {
        this.showToast('Une erreur a été détecté')
      }
    })
  }

  /**
  * Show toast with custom message
  *
  * @param {String} message
  *
  */
  showToast(message) {
    this.$mdToast.show(
      this.$mdToast.simple()
        .textContent(message)
        .hideDelay(3000)
        .position('top right')
    )
  }
}

productController.$inject = ['apiService', '$stateParams', '$state', '$mdToast']
