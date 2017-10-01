export default class apiService {
  constructor(
    $http
  ){
    this.$http = $http
  }
}

apiService.$inject = ['$http']
