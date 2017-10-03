export default class apiService {
  constructor(
    $http
  ){
    this.$http = $http
  }

  /**
  * Get products' informations
  */
  getProducts(){
    return this.$http({
      url: 'https://test-recrutement.loyaltyexpert.net/products',
      method: 'GET'
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
        name: product.anme,
        description: product.description,
        url: product.url,
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
      method: 'POST',
      data: {
        name: product.anme,
        description: product.description,
        url: product.url,
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
