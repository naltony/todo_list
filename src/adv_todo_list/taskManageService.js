( function() {

    function TaskManageService(localStorageService) {

        var todoListNameInStorage = 'todoList';

        function TaskProto() {
            this.done = false;
            this.title = "";
            this.description = "";
        }

        var convertTask = function (task){
            var newTask = new TaskProto();
            newTask.done = task.done;
            newTask.title = task.title;
            newTask.description = task.description;
            return newTask;
        }

        this.getNewTask = function() {
            return new TaskProto();
        }

        this.getTasksList = function() {
            var todoList = localStorageService.get(todoListNameInStorage);
            return todoList;
        }

        this.addTask = function(taskFromUI) {
            var task = convertTask(taskFromUI);
            var todoList = localStorageService.get(todoListNameInStorage);
            if(todoList==null || todoList==undefined) {
                todoList=[];
            }
            todoList.push(task);
            localStorageService.set(todoListNameInStorage, todoList);
        }

        this.updateTask = function(index, task) {
            var todoList = localStorageService.get(todoListNameInStorage);
            todoList[index].done = task.done;
            todoList[index].title = task.title;
            todoList[index].description = task.description;
            localStorageService.set(todoListNameInStorage, todoList);
        }

        this.removeTask = function($index) {
            var todoList = localStorageService.get(todoListNameInStorage);
            todoList.splice($index,1);
            localStorageService.set(todoListNameInStorage, todoList);
        }


        /*this.clearAllTasks = function(taskToRemove) {
            localStorageService.remove(todoListNameInStorage);
        }*/
    }

    angular.module('taskMngApp',['LocalStorageModule']).service('TaskManageService', ['localStorageService', TaskManageService])
})();