import uirouter from '@uirouter/angularjs'
import angularmd from 'angular-material'

import './home.scss'
import {routes} from './home.routes'
import {homeComponent} from './home.component'
import {lcPagination} from '../lc-pagination/lc-pagination.component'

export const homeState = angular.module('lcTest.home', [uirouter, angularmd])
  .config(routes)
  .component('homeComponent', homeComponent)
  .component('lcPagination', lcPagination)
  .name
