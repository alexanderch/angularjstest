'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  /*describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });*/



  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.names', function() {
    it('set name to alex', function() {
      var $scope = {};
      var controller = $controller('View1Ctrl', { $scope: $scope });
      $scope.name = 'alex';
      $scope.addName();
      expect($scope.names).toEqual([{name:"Chris"}, {name:"Calvin"}, {name:"alex"}]);
    });
  });
});