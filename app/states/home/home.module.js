import uirouter from '@uirouter/angularjs'

import routes from './home.routes'
import homeController from './home.controller'

export default angular.module('lcTest.home', [uirouter])
  .config(routes)
  .controller('homeController', homeController)
  .name
