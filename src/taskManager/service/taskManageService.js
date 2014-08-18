( function() {

    function TaskManageService(localStorageService) {

        var todoListNameInStorage = 'todoList';

        this.getTasksList = function() {
            return localStorageService.get(todoListNameInStorage);
        }

        this.addTask = function(task) {
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