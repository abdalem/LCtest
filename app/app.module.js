import angular from 'angular'
import uirouter from '@uirouter/angularjs'
import angularmd from 'angular-material'
import '../node_modules/angular-material/angular-material.scss'

import './assets/styles.scss'
import routes from './app.routes'
import theming from './app.theming'
import apiService from './services/api.service'
import homeState from './components/home/home.module'

angular.module('lcTest', [uirouter, homeState])
  .config(routes)
  .config(theming)
  .service('apiService', apiService)
