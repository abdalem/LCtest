import uirouter from '@uirouter/angularjs'
import angularmd from 'angular-material'

import './product.scss'
import routes from './product.routes'
import productController from './product.controller'

export default angular.module('lcTest.product', [uirouter, angularmd])
  .config(routes)
  .controller('productController', productController)
  .name
