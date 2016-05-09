angular
  .module('inputIconDemo', ['ngMaterial', 'ngMessages'])
  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      name: 'Istiak Mah',
      email: '',
      phone: '',
      address: 'Mountain View, CA',
      donation: 19.99
    };
  });
