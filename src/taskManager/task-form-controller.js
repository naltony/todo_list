(function() {

    function TaskFormController(TaskManageService, $scope) {

        $scope.taskIndex = undefined;
        $scope.formTask = TaskManageService.getNewTask();

        this.addTask = function () {
            TaskManageService.addTask($scope.formTask);
            $scope.formTask = TaskManageService.getNewTask(); // Clear the form task
            $scope.$emit('addTaskEvent');
        }

        this.updateTask = function() {
            TaskManageService.updateTask($scope.taskIndex, $scope.formTask);
            $scope.$emit('updateTaskEvent');
            $scope.formTask = TaskManageService.getNewTask(); // Clear the form task
            $scope.taskIndex = undefined;
        }

        this.toggelBtn = function() {
            if ($scope.taskIndex==undefined) {
                this.addTask();
            } else {
                this.updateTask();
            }
        }

        this.getBtnName = function() {
            if ($scope.taskIndex==undefined) {
                return 'Add';
            } else {
                return 'Save';
            }
        }

        $scope.$on('broadcastSetTaskForEditEvent', function(ev,index, task) {
            $scope.taskIndex = index;
            $scope.formTask = TaskManageService.getNewTask();
            $scope.formTask.done = task.done;
            $scope.formTask.title = task.title;
            $scope.formTask.description = task.description;
        });
    }

    angular.module('taskMngApp').controller('TaskFormController', ['TaskManageService', '$scope', TaskFormController])

}());