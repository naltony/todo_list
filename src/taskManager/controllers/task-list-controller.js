( function() {

    function TaskListController(TaskManageService, $scope) {

        this.removeTask = function($index) {
            TaskManageService.removeTask($index);
            $scope.$emit('taskAppEvent', 'logEvent', 'Task removed.');
        }

        this.editTask = function($index, task) {
            $scope.$emit('emitSetTaskForEditEvent', $index, task);
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