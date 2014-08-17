( function() {

    function AdvTodoController(todoService) {

        this.todolist = todoService.getFromStorage();
        this.taskTitle = "";
        this.taskDesc = "";

        this.addTask = function() {
            todoService.saveTask(this.taskTitle, this.taskDesc);
            this.todolist = todoService.getFromStorage();
        }

        this.updateTask = function($index, task) {
            todoService.updateTask($index, task);
            this.todolist = todoService.getFromStorage();
        }

        this.toggleDone = function($index, task) {
            task.data.done = !task.data.done;
            this.updateTask($index, task);
        }

        this.removeTask = function(task) {
            todoService.deleteTask(task);
            this.todolist = todoService.getFromStorage();
        }
    }

    angular.module('advTodoApp').controller('AdvTodoController', ['todoService', AdvTodoController])
})();