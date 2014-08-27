( function() {

    function LogActionController($scope, LogManagerService) {

        this.logList = function(){
            return  LogManagerService.getLogList();
        }

        var logAction = function(evDesc) {
            LogManagerService.addLog(evDesc);
        }

        $scope.$on('logEvent', function(ev, evDesc){
            logAction(evDesc);
        });

        $scope.$on('clearLogEvent', function() {
            LogManagerService.clearLog();
        });
    }

    angular.module('taskMngApp').controller('LogActionController', ['$scope', 'LogManagerService', LogActionController])
})();