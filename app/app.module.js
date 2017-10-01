import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import routes from './app.routes'

angular.module('lcTest', [uirouter])
  .config(routes)
