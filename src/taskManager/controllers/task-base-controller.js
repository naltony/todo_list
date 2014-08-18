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

        $scope.$on('taskAppEvent', function(ev, evType, data) {
            this.updateTasksList();
            $scope.$broadcast(evType, data);
        }.bind(this));

        $scope.$on('emitSetTaskForEditEvent', function(ev, index, task) {
            $scope.$broadcast('broadcastSetTaskForEditEvent', index, task);
        });
    }

    angular.module('taskMngApp').controller('TaskBaseController', ['TaskManageService', '$scope', TaskBaseController])
}());