( function() {

    function TodoService() {

        this.getFromStorage = function() {
            return JSON.parse(localStorage.getItem("todoList"));
        }

        this.list = this.getFromStorage();

        this.updateTask = function($index, task) {
            this.list[$index].data.done = task.data.done;
            this.list[$index].data.title = task.data.title;
            this.list[$index].data.description = task.data.description;
            localStorage.setItem("todoList", JSON.stringify(this.list));
        }

        this.saveTask = function(taskTitle, taskDesc) {
            if(this.list==null || this.list==undefined) {
               this.list = [];
            }

            this.list.push({
                'data' : {
                done:false,
                title:taskTitle,
                description:taskDesc}});

            localStorage.setItem("todoList", JSON.stringify(this.list));
        }

        this.deleteTask = function($index) {
            this.list = this.getFromStorage();
            this.list.splice($index,1);
            localStorage.setItem("todoList", JSON.stringify(this.list));
        }
    }

    angular.module('advTodoApp', []).service('todoService', TodoService);

})();