(function() {

    function TaskBaseController(TaskManageService, $scope) {

        var TaskPrototype = {
            done : false,
            title : "",
            description : ""
        }

        this.showDoneTasks = true;
        this.tasksList = TaskManageService.getTasksList();

        this.getNewTask = function() {
            var task = {};
            task.done = TaskPrototype.done;
            task.title = TaskPrototype.title;
            task.description = TaskPrototype.description;
            return task;
        }

        this.convertTask = function (task){
            var newTask = this.getNewTask();
            newTask.done = task.done;
            newTask.title = task.title;
            newTask.description = task.description;
            return newTask;
        }

        this.updateTasksList = function() {
            this.tasksList = TaskManageService.getTasksList();
        };

        $scope.$on('addTaskEvent', function(ev, task) {
            $scope.baseController.updateTasksList();
            $scope.$broadcast('logAddTaskEvent', task);
        });

        $scope.$on('emitSetTaskForEditEvent', function(ev, index, task) {
            $scope.$broadcast('broadcastSetTaskForEditEvent', index, task);
        });

        $scope.$on('updateTaskEvent', function(ev, task) {
            $scope.baseController.updateTasksList();
            $scope.$broadcast('logUpdateTaskEvent', task);
        });

        $scope.$on('removeTaskEvent', function(ev, task) {
            $scope.baseController.updateTasksList();
            $scope.$broadcast('logRemoveTaskEvent', task);
        });

        $scope.$on('doneTaskEvent', function(ev, done) {
            $scope.baseController.updateTasksList();
            $scope.$broadcast('logDoneTaskEvent', done);
        });

        $scope.$on('emitClearLogEvent', function() {
            $scope.$broadcast('broadcastClearLogEvent');
        });

        $scope.$on('showHideClickedEvent', function() {
            $scope.baseController.showDoneTasks = !$scope.baseController.showDoneTasks;
        });
    }

    angular.module('taskMngApp').controller('TaskBaseController', ['TaskManageService', '$scope', TaskBaseController])
}());