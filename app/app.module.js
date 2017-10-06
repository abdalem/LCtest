import angular from 'angular'
import uirouter from '@uirouter/angularjs'
import angularmd from 'angular-material'
import '../node_modules/angular-material/angular-material.scss'

import './assets/styles.scss'
import {globalRoutes} from './config/app.routes'
import {theming} from './config/app.theming'
import apiService from './services/api.service'
import homeState from './components/home/home.module'
import productState from './components/product/product.module'

angular.module('lcTest', [uirouter, homeState, productState])
  .config(globalRoutes)
  .config(theming)
  .service('apiService', apiService)
