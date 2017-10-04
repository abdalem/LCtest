import './lc-pagination.scss'


const lcPaginationCtrl = class {
  constructor(
    $mdMedia
  ) {
    this.$mdMedia = $mdMedia
    this.curPage = 0
    this.paginationStart = 0
  }


  getNumber(pages) {
    return Array.from(Array(pages),(x,i)=>i)
  }

  setCurrentPage(page) {
    this.setPage({page: page})
    this.curPage = page
    this.paginationStart = page<=2?0:(page>=this.pages-2?this.pages-5:page-2)

  }

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
