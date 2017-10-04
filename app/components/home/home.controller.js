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

  /**
  * Call apiService to get products' list
  *
  * @param {Integer} start
  *
  */
  getProducts(start){
    this.config.start = start
    this.apiService.getProducts(this.config).then(response => {
      this.nbItems = response.headers('X-Pagination-Count')
      this.products = response.data
    })
  }

  /**
  * Toggle (close or open) filter menu
  *
  */
  toggleFilter() {
    this.$mdSidenav('left').toggle()
  }

  /**
  * Set background of md-card
  *
  * @param {String} image (image's link)
  *
  * @return {Object}
  */
  setBckgImg(image) {
    return {"background-image": "url(" + image + ")"}
  }

  /**
  * Calculate page's number to show in lcPagination component
  *
  * @return {Integer}
  */
  getNbPages() {
    this.config.limit = this.$mdMedia('gt-xs')?10:5
    return Math.ceil(this.nbItems/this.config.limit)
  }
}

homeController.$inject = ['apiService', '$mdSidenav', '$mdMedia']
