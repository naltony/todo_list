( function() {

    function TaskListController(TaskManageService, $scope) {

        this.search = ''; // Used as filter in markup.

        this.removeTask = function($index) {
            TaskManageService.removeTask($index);
            $scope.$emit('taskAppEvent', 'logEvent', 'Task removed.');
        }

        this.editTask = function($index, task) {
            $scope.baseController.sharedData.activeTaskIndex = $index;
            $scope.baseController.sharedData.activeTask.priority = task.priority;
            $scope.baseController.sharedData.activeTask.done = task.done;
            $scope.baseController.sharedData.activeTask.title = task.title;
            $scope.baseController.sharedData.activeTask.description = task.description;
        }

        this.toggleDone = function($index, task) {
            task.done = !task.done;
            TaskManageService.updateTask($index, task);
            this.logAction = '';
            if (task.done) {
                this.logAction =' Task done';
            } else {
                this.logAction = ' Task un-done';
            }
            $scope.$emit('taskAppEvent', 'logEvent', this.logAction);
        }
    }

    angular.module('taskMngApp').controller('TaskListController', ['TaskManageService', '$scope', TaskListController])
})();