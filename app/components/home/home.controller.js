export default class homeController {
  constructor(
    apiService,
    $mdSidenav,
    $mdMedia
  ) {
    this.apiService = apiService
    this.$mdSidenav = $mdSidenav
    this.$mdMedia = $mdMedia
    this.config = {start:0, limit: this.$mdMedia('gt-xs')?10:5, search: ""}
  }

  $onInit() {
      this.getProducts()
  }

  getProducts(){
    this.apiService.getProducts(this.config).then(response => {
      this.nbItems = response.headers('X-Pagination-Count')
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

homeController.$inject = ['apiService', '$mdSidenav', '$mdMedia']
