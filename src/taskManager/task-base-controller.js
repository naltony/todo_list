(function() {

    function TaskBaseController(TaskManageService, $scope) {

        $scope.showDoneTasks = true;

        $scope.tasksList = TaskManageService.getTasksList();

        var updateTasksList = function() {
            $scope.tasksList = TaskManageService.getTasksList();
        };

        $scope.$on('addTaskEvent', function(ev, task) {
            updateTasksList();
            $scope.$broadcast('logAddTaskEvent', task);
        });

        $scope.$on('emitSetTaskForEditEvent', function(ev, index, task) {
            $scope.$broadcast('broadcastSetTaskForEditEvent', index, task);
        });

        $scope.$on('updateTaskEvent', function(ev, task) {
            updateTasksList();
            $scope.$broadcast('logUpdateTaskEvent', task);
        });

        $scope.$on('removeTaskEvent', function(ev, task) {
            updateTasksList();
            $scope.$broadcast('logRemoveTaskEvent', task);
        });

        $scope.$on('doneTaskEvent', function(ev, task) {
            updateTasksList();
            $scope.$broadcast('logDoneTaskEvent', task);
        });

        $scope.$on('emitClearLogEvent', function() {
            $scope.$broadcast('broadcastClearLogEvent');
        });

        $scope.$on('showHideClickedEvent', function() {
            $scope.showDoneTasks = !$scope.showDoneTasks;
        });
    }

    angular.module('taskMngApp').controller('TaskBaseController', ['TaskManageService', '$scope', TaskBaseController])
}());