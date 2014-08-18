(function() {

    function TaskFormController(TaskManageService, $scope) {

        this.taskIndex = undefined;
        this.formTask = $scope.baseController.getNewTask();

        this.addTask = function () {
            TaskManageService.addTask($scope.baseController.convertTask(this.formTask));
            this.formTask = $scope.baseController.getNewTask(); // Clear the form task
            $scope.$emit('addTaskEvent');
        }

        this.updateTask = function() {
            TaskManageService.updateTask(this.taskIndex, this.formTask);
            $scope.$emit('updateTaskEvent');
            this.formTask = $scope.baseController.getNewTask(); // Clear the form task
            this.taskIndex = undefined;
        }

        this.toggelBtn = function() {
            if (this.taskIndex==undefined) {
                this.addTask();
            } else {
                this.updateTask();
            }
        }

        this.getBtnName = function() {
            if (this.taskIndex==undefined) {
                return 'Add';
            } else {
                return 'Save';
            }
        }

        $scope.$on('broadcastSetTaskForEditEvent', function(ev, index, task) {
            $scope.formController.taskIndex = index;
            $scope.formController.formTask = $scope.baseController.getNewTask();
            $scope.formController.formTask.done = task.done;
            $scope.formController.formTask.title = task.title;
            $scope.formController.formTask.description = task.description;
        });
    }

    angular.module('taskMngApp').controller('TaskFormController', ['TaskManageService', '$scope', TaskFormController])

}());