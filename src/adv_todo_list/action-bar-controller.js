(function() {

    function ActionBarController($rootScope, $scope) {

        this.clearLog = function () {
            $rootScope.$emit('emitClearLogEvent');
        };

        this.showHideClicked = function() {
            $rootScope.showDoneTasks = !$rootScope.showDoneTasks;
        }
    }

    angular.module('taskMngApp').controller('ActionBarController', ['$rootScope', '$scope', ActionBarController])
}());