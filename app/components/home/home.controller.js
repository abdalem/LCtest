export default class homeController {
  constructor(
    apiService,
    $mdSidenav,
    $mdMedia
  ) {
    this.apiService = apiService
    this.$mdSidenav = $mdSidenav
    this.$mdMedia = $mdMedia
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
    })
  }

  toggleList() {
    this.$mdSidenav('left').toggle()
  }

  setBckgImg(image) {
    return {"background-image": "url(" + image + ")"}
  }

  getNbPages() {
    this.config.limit = this.$mdMedia('gt-xs')?10:5
    return Math.ceil(this.nbItems/this.config.limit)
  }
}

homeController.$inject = ['apiService', '$mdSidenav', '$mdMedia']
