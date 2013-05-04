angular.module("ui.bootstrap.alert", []).directive('alert', ['$parse', function ($parse) {
  return {
    restrict:'EA',
    templateUrl:'template/alert/alert.html',
    transclude:true,
    replace:true,
    scope: true,
    link: function(scope, iElement, iAttrs, controller) {

      var isClosable = 'close' in iAttrs;
      var closeFn = isClosable ? $parse(iAttrs.close) : angular.noop;

      scope.type = $parse(iAttrs.type)(scope);
      scope.closeable = isClosable;

      scope.close = function() {
        closeFn(scope);
      };
    }
  };
}]);
