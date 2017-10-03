export default class productController {
  constructor(
    apiService,
    $stateParams
  ) {
    this.apiService = apiService
    this.$stateParams = $stateParams
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
        this.product = {description: response.data.description, name: response.data.name, brand: response.data.brand.id, categories: []}
        for (let i = 0; i < response.data.categories.length; i++) {
          this.product.categories.push(response.data.categories[i].id)
        }
      })
    }
    // if(angular.isUndefined(this.$stateParams.id)){
    //   this.createMode = true
    // } else
      // this.getProducts(0)
  }

  // getProducts(start){
  //   this.config.start = start
  //   this.apiService.getProducts(this.config).then(response => {
  //     this.nbItems = response.headers('X-Pagination-Count')
  //     this.products = response.data
  //     console.log(this.nbItems);
  //   })
  // }
  //
  // toggleList() {
  //   this.$mdSidenav('left').toggle()
  // }
  //
  // setBckgImg(image) {
  //   return {"background-image": "url(" + image + ")"}
  // }
  //
  // getNbPages() {
  //   return Math.ceil(this.nbItems/this.config.limit)
  // }
  //
  // addProduct() {
  //   this.$mdDialog.show({
  //     clickOutsideToClose: true,
  //     template: require('./add-product/add-product.html'),
  //     controller: addProductCtrl,
  //     controllerAs: "$ctrl",
  //     parent: angular.element(document.body)
  //   }).then(function(parent){
  //     console.log(nbItems);
  //     // console.log(this.nbItems);
  //   }, function(parent){
  //     // console.log(this.nbItems);
  //     console.log(nbItems);
  //
  //   })
  // }
  //
  // updateProduct() {
  //   this.$mdDialog.show({
  //     clickOutsideToClose: true,
  //     template: require('./update-product/update-product.html'),
  //     controller: updateProductCtrl,
  //     controllerAs: "$ctrl"
  //   });
  // }
}

productController.$inject = ['apiService', '$stateParams']
