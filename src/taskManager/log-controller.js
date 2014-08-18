( function() {

    function LogActionController($scope, DataFormatService) {

        $scope.logsList = [];

        var logAction = function(actionDesc) {
            var date = DataFormatService.getCurrentDate();
            var log = date + actionDesc;
            $scope.logsList.push(log);
        }

        $scope.$on('logAddTaskEvent', function(ev, task){
            logAction(' - new task added');
        });

        $scope.$on('logUpdateTaskEvent', function(ev, task){
            logAction(' - updated task');
        });

        $scope.$on('logRemoveTaskEvent', function(ev, task){
            logAction(' - task removed');
        });

        $scope.$on('logDoneTaskEvent', function(ev, done){
            if (done) {
                logAction(' - task done');
            } else {
                logAction(' - task un-done');
            }
        });

        $scope.$on('broadcastClearLogEvent', function() {
            $scope.logsList = [];
        });
    }

    angular.module('taskMngApp').controller('LogActionController', ['$scope', 'DataFormatService', LogActionController])

})();