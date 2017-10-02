import uirouter from '@uirouter/angularjs'
import angularmd from 'angular-material'

import './home.scss'
import routes from './home.routes'
import homeController from './home.controller'

export default angular.module('lcTest.home', [uirouter, angularmd])
  .config(routes)
  .controller('homeController', homeController)
  .name
