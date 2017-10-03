const lcPaginationCtrl = class {
  constructor(

  ) {

  }

  getNumber(pages) {
    return new Array(pages)
  }

}

module.exports = {
  template: require('./lc-pagination.html'),
  controller: lcPaginationCtrl,
  controllerAs: '$ctrl',
  bindings: {
    pages: '<',
    setPage: '&'
  }
}
