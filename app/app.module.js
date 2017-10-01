import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import routes from './app.routes'
import apiService from './services/api.service'

angular.module('lcTest', [uirouter])
  .config(routes)
  .service('apiService', apiService)
