routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('<%= state %>', {
      url: '<%= route %>',
      template: require('./<%= lname %>.html'),
      controller: '<%= lname %>Controller',
      controllerAs: 'vm'
    });
}
