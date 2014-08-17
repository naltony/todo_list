( function() {

    function TodoController() {

        this.newTask = {
            done: false,
            title: '',
            description: ''
        };

        this.list = [];

        this.addTask = function() {
            this.list.push(
                {
                    done:false,
                    title:this.newTask.title,
                    description:this.newTask.description
                });

            this.newTask.title = '';
            this.newTask.description = '';b
        }
    }

    angular.module('todoApp', []).controller('TodoController', TodoController)
})();