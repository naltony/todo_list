( function() {

    function TaskListController(TaskManageService, $scope) {

        this.removeTask = function($index) {
            TaskManageService.removeTask($index);
            $scope.$emit('removeTaskEvent');
        }

        this.editTask = function($index, task) {
            $scope.$emit('emitSetTaskForEditEvent', $index, task);
        }

        this.toggleDone = function($index, task) {
            task.done = !task.done;
            TaskManageService.updateTask($index, task);
            $scope.$emit('doneTaskEvent');
        }
    }

    angular.module('taskMngApp').controller('TaskListController', ['TaskManageService', '$scope', TaskListController])
})();