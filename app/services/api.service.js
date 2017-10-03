export default class apiService {
  constructor(
    $http
  ){
    this.$http = $http
  }

  /**
  * Get products' informations
  */
  getProducts(config){
    return this.$http({
      url: 'https://test-recrutement.loyaltyexpert.net/products',
      method: 'GET',
      params: {
        start: config.start,
        limit: config.limit,
        search: config.search,
        sort: "DESC"
      }
    })
  }

  /**
  * Create a new product
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
  * Update a product
  */
  updateProduct(product){
    return this.$http({
      url: 'https://test-recrutement.loyaltyexpert.net/products/' + product.id,
      method: 'PUT',
      data: {
        name: product.anme,
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
}

apiService.$inject = ['$http']
