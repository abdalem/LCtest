import './lc-pagination.scss'


const lcPaginationCtrl = class {
  constructor(
    $mdMedia
  ) {
    this.$mdMedia = $mdMedia
    this.curPage = 0
    this.paginationStart = 0
  }

  /**
  * Reset component params when sreen change form mobile to computer and vice versa
  *
  */
  $onChanges(changes){
    this.curPage = 0
    this.paginationStart = 0
    this.setPage({page: 0})
  }

  /**
  * Create an array with the number of pages to show for ng-repeat
  *
  * @param {Integer} pages
  *
  * @return {Array}
  */
  getNumber(pages) {
    return Array.from(Array(pages),(x,i)=>i)
  }

  /**
  * Set current selected page triggered on ng-click and set where to start the pagination on ng-repeat
  *
  * @param {Integer} page (current selected page)
  *
  */
  setCurrentPage(page) {
    this.setPage({page: page})
    this.curPage = page
    this.paginationStart = page<=2?0:(page>=this.pages-2?this.pages-5:page-2)
  }

  /**
  * Set style on selected span
  *
  * @param {Integer} page (current selected page)
  *
  * @return {Object} (style to inject with ng-style attribute)
  */
  getStyle(page) {
    if (page == this.curPage) {
      return {'background-color': 'rgb(63,81,181)', 'color': 'white'}
    }
  }
}

lcPaginationCtrl.$inject = ['$mdMedia']
module.exports = {
  template: require('./lc-pagination.html'),
  controller: lcPaginationCtrl,
  controllerAs: '$ctrl',
  bindings: {
    pages: '<',
    setPage: '&'
  }
}
