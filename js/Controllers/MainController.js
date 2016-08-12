  app.controller('MainController', ['$scope','$http', function ($scope, $http) {

          $http.get('http://daniel.ejectufrn.com.br/teste.txt').success( function(response) {
              $scope.sensores_get = response; 
           });

      $scope.sensores = [{
          name: 'RGB1',
          method: "post",
          class: 'luz',
          type: 'color',
          value: '#681235',
          estado: 'on',
          comodo: 'quarto2',
          ciclo_h: null,
          ciclo_m: null,
          ciclo_s: 4
      }, {
          name: 'Luz1',
          method: "post",
          class: 'luz',
          type: 'standart',
          value: null,
          estado: 'on',
          comodo: 'quarto1',
          ciclo_h: 1,
          ciclo_m: 0,
          ciclo_s: 3
      }, {
          name: 'Luz2',
          method: "post",
          class: 'luz',
          type: 'range',
          value: '40',
          estado: 'off',
          comodo: 'cozinha',
          ciclo_h: 0,
          ciclo_m: 1,
          ciclo_s: 3
      }, {
          name: 'Janela',
          method: "post",
          class: 'temperatura',
          type: 'standart',
          value: null,
          estado: 'off',
          comodo: 'quarto2',
          ciclo_h: 0,
          ciclo_m: 0,
          ciclo_s: 6
      }, {
          name: 'Janela2',
          method: "post",
          class: 'temperatura',
          type: 'range',
          value: 68,
          estado: 'off',
          comodo: 'quarto2',
          ciclo_h: 0,
          ciclo_m: 0,
          ciclo_s: 6
      }];
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
      $scope.listasensores = ['luz1', 'luz2', 'aaaa', 'zvasda'];
      $scope.filtros = [{
          icone: 'img/icone-lamp.svg',
          id: 'luz'
      }, {
          icone: 'img/icone-termometro.svg',
          id: 'temperatura'
      }];

      $scope.templates = [
      {
        name: 'Controles',
        url: 'ambiente.html'},
      {
        name: 'Sensores',
        url: 'template2.html'},
      {
        name: 'Casas',
        url: 'template2.html'},
      {
        name: 'Sub-perfis',
        url: 'template2.html'},
      {
        name: 'Regras',
        url: 'template2.html'}

      ];
      $scope.regras = [
      {
        name: 'regra1',
        id: '1'},
      {
        name: 'regra2',
        id: '2'},
      {
        name: 'regra da cozinha',
        id: '3',
      }
      ];
  }]);