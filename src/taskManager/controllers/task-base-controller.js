(function() {

    function TaskBaseController(TaskManageService, LogManagerService, $scope) {

        var TaskPrototype = {
            done : false,
            title : "",
            description : "",
            priority : ""
        }

        this.getNewTask = function() {
            var task = {};
            task.priority = '';
            task.done = TaskPrototype.done;
            task.title = TaskPrototype.title;
            task.description = TaskPrototype.description;
            return task;
        }

        this.sharedData = {
            showActionBar : true,
            showDoneTasks : true,
            tasksList : TaskManageService.getTasksList(),
            activeTask : this.getNewTask(),
            activeTaskIndex : undefined
        };

        this.convertTask = function (task){
            var newTask = this.getNewTask();
            newTask.priority = task.priority;
            newTask.done = task.done;
            newTask.title = task.title;
            newTask.description = task.description;
            return newTask;
        }

        this.updateTasksList = function() {
            this.sharedData.tasksList = TaskManageService.getTasksList();
        };

        this.toggleShowHideActions = function() {
            this.sharedData.showActionBar = !this.sharedData.showActionBar;
        }

        $scope.$on('taskAppEvent', function(ev, evType, data) {
            this.updateTasksList();
            $scope.$broadcast(evType, data);
        }.bind(this));
    }

    angular.module('taskMngApp').controller('TaskBaseController', ['TaskManageService', 'LogManagerService', '$scope', TaskBaseController])
}());