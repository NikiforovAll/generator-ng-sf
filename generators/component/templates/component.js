import template from './<%= lname %>.html';
import controller from './<%= lname %>.ctrl';

let <%= name %>Controller = {
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default <%= name %>Controller;
