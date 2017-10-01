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
}

apiService.$inject = ['$http']
