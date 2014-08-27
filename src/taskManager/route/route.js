angular.module('taskMngApp').config(function($routeProvider) {

    $routeProvider
        .when('/tasks-list',{
            templateUrl: 'views/tasks-list.html',
            controller: 'TaskListController',
            controllerAs: 'listController'})
        .when('/log',{
            templateUrl: 'views/log.html',
            controller: 'LogActionController',
            controllerAs: 'logController'})
        .when('/new-task',{
            templateUrl: 'views/new-task.html',
            controller: 'TaskFormController',
            controllerAs: 'formController'})
        .otherwise({
            template:'<div>NOT FOUND!</div>'
        });
});