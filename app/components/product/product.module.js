import uirouter from '@uirouter/angularjs'
import angularmd from 'angular-material'

import './product.scss'
import {routes} from './product.routes'
import {productComponent} from './product.component'

export const productState = angular.module('lcTest.product', [uirouter, angularmd])
  .config(routes)
  .component('productComponent', productComponent)
  .name
