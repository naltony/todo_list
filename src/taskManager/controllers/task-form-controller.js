(function() {

    function TaskFormController(TaskManageService, $scope) {

        this.addTask = function () {
            TaskManageService.addTask($scope.baseController.convertTask($scope.baseController.sharedData.activeTask));
            $scope.baseController.sharedData.activeTask = $scope.baseController.getNewTask(); // Clear the form task
            $scope.$emit('taskAppEvent', 'logEvent', 'Task was added.');
        }

        this.updateTask = function() {
            TaskManageService.updateTask($scope.baseController.sharedData.activeTaskIndex, $scope.baseController.sharedData.activeTask);
            $scope.$emit('taskAppEvent', 'logEvent', 'Task was updated.');
            $scope.baseController.sharedData.activeTask = $scope.baseController.getNewTask(); // Clear the form task
            $scope.baseController.sharedData.activeTaskIndex = undefined;
        }

        this.toggelBtn = function() {
            if ($scope.baseController.sharedData.activeTaskIndex==undefined) {
                this.addTask();
            } else {
                this.updateTask();
            }
        }

        this.getBtnName = function() {
            if ($scope.baseController.sharedData.activeTaskIndex==undefined) {
                return 'Add';
            } else {
                return 'Save';
            }
        }

        // For UI use
        this.taskPriorities = ['High', 'Medium', 'Low'];
    }

    angular.module('taskMngApp').controller('TaskFormController', ['TaskManageService', '$scope', TaskFormController])
}());