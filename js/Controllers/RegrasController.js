  app.controller('RegrasController', ['$scope','$http', function ($scope, $http) {

      $scope.regras = [{
          name: 'Regra1',
          code:''
      }, {
          name: 'Regra2',
          code:''
      },{
          name: 'Regra3',
          code:''
      },{
          name: 'Regra4',
          code:''
      },{
          name: 'Regra5',
          code:''
      },}];
      $scope.sensoreseditar = [{
          name: 'RGB2',
          method: "post",
          class: 'luz',
          type: 'color',
          value: '#0000FF',
          estado: 'off',
          comodo: 'quarto3',
          ciclo_h: null,
          ciclo_m: null,
          ciclo_s: null
      }, ];

      $scope.comodos = ['quarto1', 'quarto2', 'cozinha', 'quarto3'];
  }]);