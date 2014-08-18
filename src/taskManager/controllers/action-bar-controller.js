(function() {

    function ActionBarController($scope) {

        this.clearLog = function () {
            $scope.$emit('taskAppEvent', 'clearLogEvent');
        };

        this.showHideClicked = function() {
            $scope.baseController.showDoneTasks = !$scope.baseController.showDoneTasks;
        }
    }

    angular.module('taskMngApp').controller('ActionBarController', ['$scope', ActionBarController])
}());