import addProductCtrl from './add-product/add-product.controller'
import updateProductCtrl from './update-product/update-product.controller'

export default class homeController {
  constructor(
    apiService,
    $mdSidenav,
    $mdMedia,
    $mdDialog
  ) {
    this.apiService = apiService
    this.$mdSidenav = $mdSidenav
    this.$mdMedia = $mdMedia
    this.$mdDialog = $mdDialog
    this.config = {limit: this.$mdMedia('gt-xs')?10:5, search: ""}
  }

  $onInit() {
      this.getProducts(0)
  }

  getProducts(start){
    this.config.start = start
    this.apiService.getProducts(this.config).then(response => {
      this.nbItems = response.headers('X-Pagination-Count')
      this.products = response.data
      console.log(this.nbItems);
    })
  }

  toggleList() {
    this.$mdSidenav('left').toggle()
  }

  setBckgImg(image) {
    return {"background-image": "url(" + image + ")"}
  }

  getNbPages() {
    return Math.ceil(this.nbItems/this.config.limit)
  }

  addProduct() {
    this.$mdDialog.show({
      clickOutsideToClose: true,
      template: require('./add-product/add-product.html'),
      controller: addProductCtrl
    });
  }

  updateProduct() {
    this.$mdDialog.show({
      clickOutsideToClose: true,
      template: require('./update-product/update-product.html'),
      controller: updateProductCtrl
    });
  }
}

homeController.$inject = ['apiService', '$mdSidenav', '$mdMedia', '$mdDialog']
