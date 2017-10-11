import angular      from 'angular';
import ngAnimate    from 'angular-animate';
import ngCookies    from 'angular-cookies';
import uiRouter     from 'angular-ui-router';
import Components   from './components';
import Commons      from './commons';

import AppComponent from './app.component';

angular.module('App', [
  ngAnimate, 
  ngCookies,
  uiRouter,
  Components,
  Commons
])
.component('app', AppComponent);