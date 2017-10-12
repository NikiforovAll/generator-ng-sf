import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './<%= lname %>.routes';
import controller from './<%= lname %>.ctrl';

export default angular.module('app.<%= lname %>', [uirouter])
  .config(routing)
  .controller('<%= name %>Controller', controller)
  .name;
