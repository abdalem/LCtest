export const apiService = class {
  constructor(
    $http
  ){
    this.$http = $http
  }

  /**
  * Get products' informations
  *
  * @param {Object} config (object that contain config to paginate and search throw the list)
  *
  */
  getProducts(config){
    return this.$http({
      url: 'https://test-recrutement.loyaltyexpert.net/products',
      method: 'GET',
      params: {
        start: config.start,
        limit: config.limit,
        search: config.search
      }
    })
  }

  /**
  * Add a new product
  *
  * @param {Object} product (object that contain new product information)
  *
  */
  addProduct(product){
    return this.$http({
      url: 'https://test-recrutement.loyaltyexpert.net/products',
      method: 'POST',
      data: {
        name: product.name,
        description: product.description,
        categories: product.categories,
        brand: product.brand
      }
    })
  }

  /**
  * update a product
  *
  * @param {Object} product (object that contain product infomation that will be update by his id)
  *
  */
  updateProduct(product){
    return this.$http({
      url: 'https://test-recrutement.loyaltyexpert.net/products/' + product.id,
      method: 'PUT',
      data: {
        name: product.name,
        description: product.description,
        categories: product.categories,
        brand: product.brand
      }
    })
  }

  /**
  * Get brands' list
  */
  getBrands(){
    return this.$http({
      url: 'https://test-recrutement.loyaltyexpert.net/brands',
      method: 'GET'
    })
  }

  /**
  * Get categories' list
  */
  getCategories(){
    return this.$http({
      url: 'https://test-recrutement.loyaltyexpert.net/categories',
      method: 'GET'
    })
  }

  /**
  * Get one product
  *
  * @param {Integer} id
  *
  */
  getProduct(id){
    return this.$http({
      url: 'https://test-recrutement.loyaltyexpert.net/products/'+id,
      method: 'GET'
    })
  }
}

apiService.$inject = ['$http']
