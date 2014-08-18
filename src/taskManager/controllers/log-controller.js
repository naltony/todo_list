( function() {

    function LogActionController($scope, DataFormatService) {

        $scope.logsList = [];

        var logAction = function(evDesc) {
            var date = DataFormatService.getCurrentDate();
            var log = date + evDesc;
            $scope.logsList.push(log);
        }

        $scope.$on('logEvent', function(ev, evDesc){
            logAction(evDesc);
        });

        $scope.$on('clearLogEvent', function() {
            $scope.logsList = [];
        });
    }

    angular.module('taskMngApp').controller('LogActionController', ['$scope', 'DataFormatService', LogActionController])
})();